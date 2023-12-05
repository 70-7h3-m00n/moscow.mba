import routesBack from '@/config/routesBack'
import { CreatePaymentResponseType, TypeLibProgram } from '@/types/index'
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'

type TypeNextApiResponseLeadData = {
	readonly err?: unknown
	readonly msg: string
	readonly url?: string
	readonly status: number
}

const shopId = '225914'
const secretKey = 'live_eMYxVoSmAFhN6WT9ylz4ayq-YEZce5TqIZ5bYb9Mmow'

const shopIdTest = '283212'
const secretKeyTest = 'test_VSWLFX4R3H6uUcmzsXJD6kR3zYys09bMmC4cLkKxiNI'

const idempotenceKey = uuidv4()

const makePaymentRequest = async (
	req: NextApiRequest,
	res: NextApiResponse<TypeNextApiResponseLeadData | Error>
) => {
	const { price } = req.body
	console.log('price: =>>>>>>>>', price)

	// const route = `${routesBack.root}${routesBack.getStaticPropsPrograms}/${type}/${slug}`
	// const programData: TypeLibProgram = await axios.get(route)

	const requestData = {
		amount: {
			value: `${price}.00`, // price should be string '100.00'
			currency: 'RUB'
		},
		capture: true,
		confirmation: {
			type: 'redirect',
			return_url: 'https://www.moscow.mba/'
		},
		description: `Оплата заказа № 72 для user@yoomoney.ru` //description should be string 'Заказ №1'
	}

	try {
		const response = await axios.post<CreatePaymentResponseType>(
			'https://api.yookassa.ru/v3/payments',
			requestData,
			{
				auth: {
					username: shopIdTest,
					password: secretKeyTest
				},
				headers: {
					'Idempotence-Key': idempotenceKey,
					'Content-Type': 'application/json'
				}
			}
		)

		const { confirmation_url } = response.data.confirmation

		// тут можно отправлять фетч на другой эндпоинт, который будет принимать айдишник транзакции
		// и через определённый промежуток времени (фиббоначи?) узнавать у юкассы прошел платёж или нет
		// как только получает какой-либо ответ отправляет результат в Ф5

		res.status(200).json({
			status: 200,
			msg: 'URL returned successfully',
			url: confirmation_url
		})
	} catch (err) {
		res.status(500).json({ status: 500, err, msg: 'Unexpected server error' })
		console.error(err)
	}
}

export default makePaymentRequest
