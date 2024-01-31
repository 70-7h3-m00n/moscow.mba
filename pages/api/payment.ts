import routesBack from '@/config/routesBack'
import { CreatePaymentResponseType, TypeLibProgram } from '@/types/index'
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'
import { dev, routesFront } from '@/config/index'

export type TypeNextApiResponseLeadData = {
	readonly err?: unknown
	readonly msg: string
	readonly url?: string
	readonly status: number
	readonly transactionId?: number | string
}

const shopId = dev
	? process.env.YOOKASSA_SHOP_ID_DEV
	: process.env.YOOKASSA_SHOP_ID_PROD
const secretKey = dev
	? process.env.YOOKASSA_SECRET_KEY_DEV
	: process.env.YOOKASSA_SECRET_KEY_PROD
const idempotenceKey = uuidv4()

const payment = async (
	req: NextApiRequest,
	res: NextApiResponse<TypeNextApiResponseLeadData | Error>
) => {
	const { price, returnURL, description } = req.body

	// цену нужно получать с бека

	const requestData = {
		amount: {
			value: `${price}.00`, // string '100.00'
			currency: 'RUB'
		},
		capture: true,
		confirmation: {
			type: 'redirect',
			return_url: returnURL
		},
		description
	}

	try {
		const response = await axios.post<CreatePaymentResponseType>(
			'https://api.yookassa.ru/v3/payments',
			requestData,
			{
				auth: {
					username: shopId,
					password: secretKey
				},
				headers: {
					'Idempotence-Key': idempotenceKey,
					'Content-Type': 'application/json'
				}
			}
		)

		res.status(200).json({
			status: 200,
			msg: 'URL returned successfully',
			url: response.data.confirmation.confirmation_url,
			transactionId: response.data.id
		})
	} catch (err) {
		res.status(500).json({ status: 500, err, msg: 'Unexpected server error' })
		console.error(err)
	}
}

export default payment
