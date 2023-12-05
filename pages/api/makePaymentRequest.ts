import routesBack from '@/config/routesBack'
import { CreatePaymentResponseType, TypeLibProgram } from '@/types/index'
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import {
	// TypeNextApiResponseLeadData,
	shopIdTest,
	secretKeyTest,
	idempotenceKey
} from './testPayment'

export const makePaymentRequest = async (
	req,
	res
	// req: NextApiRequest,
	// res: NextApiResponse<TypeNextApiResponseLeadData | Error>
) => {
	const { type, slug } = req.body

	const programData: TypeLibProgram = await axios.get(
		`${routesBack.root}${routesBack.getStaticPropsPrograms}/${type}/${slug}`
	)

	const requestData = {
		amount: {
			value: `${programData.price}.00`,
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

		// тут можно отправлять фетч на другой эндпоинт, который будет принимать айдишник транзакции и по фиббоначи
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
