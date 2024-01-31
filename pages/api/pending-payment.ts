import dev from '@/config/dev'
import routesFront from '@/config/routesFront'
import { hitContactRoute } from '@/helpers/index'
import { PendingPaymentResponseType } from '@/types/index'
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export type TypeNextApiResponseLeadData = {
	readonly err?: unknown
	readonly msg: string
	readonly status: number
	readonly paymentStatus: any
}

const shopId = dev
	? process.env.YOOKASSA_SHOP_ID_DEV
	: process.env.YOOKASSA_SHOP_ID_PROD
const secretKey = dev
	? process.env.YOOKASSA_SECRET_KEY_DEV
	: process.env.YOOKASSA_SECRET_KEY_PROD

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms))

const getPaymentStatus = async transactionId => {
	const response = await axios.get<PendingPaymentResponseType>(
		`https://api.yookassa.ru/v3/payments/${transactionId}`,
		{
			headers: {
				Authorization: `Basic ${Buffer.from(`${shopId}:${secretKey}`).toString(
					'base64'
				)}`
			}
		}
	)
	return response.data.status
}

const pendingPayment = async (
	req: NextApiRequest,
	res: NextApiResponse<TypeNextApiResponseLeadData | Error>
) => {
	const { transactionId, values } = req.body

	try {
		let retryCount = 0
		let paymentStatus = await getPaymentStatus(transactionId)

		console.log(
			values.name,
			values.programTitle,
			retryCount,
			' try ====> status: ',
			paymentStatus
		)

		while (paymentStatus === 'pending' && retryCount < 11) {
			await timeout(60000)
			paymentStatus = await getPaymentStatus(transactionId)
			console.log(
				values.name,
				values.programTitle,
				retryCount,
				' try ====> status: ',
				paymentStatus
			)
			retryCount++
		}

		console.log(
			values.name,
			values.programTitle,
			' R E S U L T =>>>>',
			paymentStatus,
			values
		)

		// добавить в values статус платежа
		values.paymentStatus = paymentStatus

		await axios.post(`${routesFront.root}/api/contact`, values)

		if (paymentStatus === 'pending') {
			await timeout(60000 * 60)
			paymentStatus = await getPaymentStatus(transactionId)

			console.log(
				values.name,
				values.programTitle,
				'F I N A L   T R Y =>>>>>>> status',
				paymentStatus
			)

			if (paymentStatus !== 'pending') {
				values.paymentStatus = paymentStatus
				await axios.post(`${routesFront.root}/api/contact`, values)
			}
		}

		res.status(200).json({
			status: 200,
			paymentStatus,
			msg: 'Payment status returned successfully'
		})
	} catch (error) {
		console.error('Error checking transaction status:', error.message)
		throw error
	}
}

export default pendingPayment
