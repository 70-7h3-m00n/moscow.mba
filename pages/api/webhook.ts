import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type TypeNextApiResponseLeadData = {
	readonly err?: unknown
	readonly msg: string
}

enum LeadStatusCode {
	Register = '42100270', // Необработано
	NewOrder = '41893093', // Отправлено КП
	PaidOrder = '142' // Успешно реализовано
}

const webhook = async (
	req: NextApiRequest,
	res: NextApiResponse<TypeNextApiResponseLeadData | Error>
) => {
	if (req.body) {
		const webhook = `https://webhook.site/8ae882fe-2b33-4bae-b5ca-32dc877c78d6`
		const entries = Object.values(req?.body)
		const utmTermIndex = entries?.findIndex(ell => ell === 'Ключевое слово')
		const utmTerm = utmTermIndex > 0 && entries?.[utmTermIndex + 1]
		const utmCampaighIndex = entries?.findIndex(ell => ell === 'Название РК')
		const utmCampaign = utmCampaighIndex > 0 && entries?.[utmCampaighIndex + 1]
		const isUTMSourceSalid = entries.some(el => el === 'salid')
		const isUTMMediumOffer = entries.some(el => el === 'offer1234')

		if (isUTMSourceSalid && isUTMMediumOffer) {
			const clientId =
				req?.body?.['leads[status][0][account_id]'] ||
				req?.body?.['leads[add][0][account_id]']
			const orderId =
				req?.body?.['leads[status][0][id]'] || req?.body?.['leads[add][0][id]']
			const orderSumm =
				req?.body?.['leads[status][0][price]'] ||
				req?.body?.['leads[add][0][price]']
			const leadStatus =
				req?.body?.['leads[status][0][status_id]'] ||
				req?.body?.['leads[add][0][status_id]']

			const regPostback = `https://salid.ru/postback/ads.php?offer=offer1234&webmaster=${utmCampaign}&clickid=${utmTerm}&id_polzovatelya=${clientId}&klient=mba&cel=registration`
			const newOrderPostback = `https://salid.ru/postback/ads.php?offer=offer1234&webmaster=${utmCampaign}&clickid=${utmTerm}&id_polzovatelya=${clientId}&id_zakaza=${orderId}&summa_zakaza=${orderSumm}&klient=mba&cel=order`
			const payedOrderPostback = `https://salid.ru/postback/ads.php?offer=offer1234&webmaster=${utmCampaign}&clickid=${utmTerm}&id_polzovatelya=${clientId}&id_zakaza=${orderId}&summa_zakaza=${orderSumm}&klient=mba&cel=sale`

			try {
				// Postback registration
				if (leadStatus === LeadStatusCode.Register) {
					await axios.get(regPostback)
					await axios.get(
						webhook +
							`?offer=offer1234&webmaster=${utmCampaign}&clickid=${utmTerm}&id_polzovatelya=${clientId}&klient=mba&cel=registration`
					)
				}

				// Postback new order
				if (leadStatus === LeadStatusCode.NewOrder) {
					await axios.get(newOrderPostback)
					await axios.get(
						webhook +
							`?offer=offer1234&webmaster=${utmCampaign}&clickid=${utmTerm}&id_polzovatelya=${clientId}&id_zakaza=${orderId}&summa_zakaza=${orderSumm}&klient=mba&cel=order`
					)
				}

				// Postback payed order
				if (leadStatus === LeadStatusCode.PaidOrder) {
					await axios.get(payedOrderPostback)
					await axios.get(
						webhook +
							`?offer=offer1234&webmaster=${utmCampaign}&clickid=${utmTerm}&id_polzovatelya=${clientId}&id_zakaza=${orderId}&summa_zakaza=${orderSumm}&klient=mba&cel=sale`
					)
				}

				res.status(200).json({ msg: 'success' })
			} catch (e) {
				console.error(e)
			}
		}
	}
}

export default webhook

// 30248107

// AMO CRM status codes id
// 42100270 - Необработано
// 42292828 - Дубли
// 41893090 - Первый диалог
// 41893093 - Отправлено КП
// 41948425 - Недозвон
// 41893096 - Поступает позже
// 42141634 - Не продал
// 41893099 - Готов поступать
// 41948455 - Выставлен счет
// 57209378 - Рассрочка от академии
// 143 - Некоррект
// 142 - Успешно реализовано
