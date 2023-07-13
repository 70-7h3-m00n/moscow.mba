import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

interface Data {
	status: Status[]
}

interface Status {
	id: string
	name: string
	status_id: string
	old_status_id: string
	price: string
	responsible_user_id: string
	last_modified: string
	modified_user_id: string
	created_user_id: string
	date_create: string
	pipeline_id: string
	tags: {
		id: string
		name: string
	}[]
	account_id: string
	custom_fields: CustomField[]
	created_at: string
	updated_at: string
}
;[]

interface CustomField {
	id: string
	name: string
	values: any
	code?: string
}

const data: Data = {
	status: [
		{
			id: '30248107',
			name: 'Новая заявка с moscow.mba',
			status_id: '57209378',
			old_status_id: '143',
			price: '1',
			responsible_user_id: '9414390',
			last_modified: '1689158200',
			modified_user_id: '8421298',
			created_user_id: '0',
			date_create: '1689153492',
			pipeline_id: '4542166',
			tags: [{ id: '55515', name: 'новаязаявка' }],
			account_id: '29638927',
			custom_fields: [
				{
					id: '432373',
					name: 'roistat',
					values: [{ value: '139919' }],
					code: 'ROISTAT'
				},
				{
					id: '644897',
					name: 'Тип программы',
					values: [{ value: 'MBA', enum: '853027' }]
				},
				{
					id: '745159',
					name: 'Программа обучения',
					values: [{ value: '111' }]
				},
				{
					id: '644899',
					name: 'Часы',
					values: [{ value: '360', enum: '863241' }]
				},
				{
					id: '709257',
					name: 'Месяцы',
					values: [{ value: '1 месяц', enum: '827671' }]
				},
				{
					id: '715391',
					name: 'Ссылка на сайт',
					values: [
						{
							value:
								'https://moscow.mba/promo?utm_source=salid&amp;utm_medium=offer1234&amp;utm_campaign=wm112233&amp;utm_term=423432345654345423456743'
						}
					]
				},
				{ id: '644949', name: '№ Договора', values: [{ value: '1' }] },
				{ id: '645087', name: 'Дата доступа', values: ['1689195600'] },
				{ id: '776035', name: 'Источник', values: [{ value: 'salid' }] },
				{
					id: '1363223',
					name: 'Yandex metrics ID',
					values: [{ value: '1680699095677241273' }]
				},
				{
					id: '1376331',
					name: 'Тип трафика',
					values: [{ value: 'offer1234' }]
				},
				{ id: '1376333', name: 'Название РК', values: [{ value: 'wm112233' }] },
				{
					id: '1376337',
					name: 'Ключевое слово',
					values: [{ value: '423432345654345423456743' }]
				}
			],
			created_at: '1689153492',
			updated_at: '1689158200'
		}
	]
}

type TypeNextApiResponseLeadData = {
	readonly err?: unknown
	readonly msg: string
}

enum LeadStatusCode {
	Register = '41893090', // Первый диалог
	NewOrder = '41893093', // Отправлено КП
	PaidOrder = '142' // Успешно реализовано
}

const webhook = async (
	req: NextApiRequest,
	res: NextApiResponse<TypeNextApiResponseLeadData | Error>
) => {
	const customFields = req?.body?.status?.[0]?.custom_fields

	const utm: {
		source: string | null
		medium: string | null
		term: string | null
		campaign: string | null
	} = customFields?.reduce(
		(acc, customField) => {
			if (customField.name === 'Источник')
				acc.source = customField?.values?.[0]?.value || null
			if (customField.name === 'Тип трафика')
				acc.medium = customField?.values?.[0]?.value || null
			if (customField.name === 'Ключевое слово')
				acc.term = customField?.values?.[0]?.value || null
			if (customField.name === 'Название РК')
				acc.campaign = customField?.values?.[0]?.value || null
			return acc
		},
		{
			source: null, // Источник рекламы
			medium: null, // Тип трафика
			term: null, // Ключевое слово
			campaign: null // Название РК
		}
	)

	if (utm?.source === 'salid' && utm?.medium === 'offer1234') {
		const clientId = req?.body?.status?.[0]?.account_id // где взять?
		console.log('clientId: ', clientId)
		const orderId = req?.body?.status?.[0]?.id
		console.log('orderId: ', orderId)
		const orderSumm = req?.body?.status?.[0]?.price
		console.log('orderSumm: ', orderSumm)

		const leadStatus = req?.body?.status?.[0]?.status_id
		console.log('leadStatus: ', leadStatus)

		const regPostback = `https://salid.ru/postback/ads.php?offer=${utm.medium}&webmaster=${utm.campaign}&clickid=${utm.term}&id_polzovatelya=${clientId}&klient=mba&cel=registration`
		const newOrderPostback = `https://salid.ru/postback/ads.php?offer=${utm.medium}&webmaster=${utm.campaign}&clickid=${utm.term}&id_polzovatelya=${clientId}&id_zakaza=${orderId}&summa_zakaza=${orderSumm}&klient=mba&cel=order`
		const payedOrderPostback = `https://salid.ru/postback/ads.php?offer=${utm.medium}&webmaster=${utm.campaign}&clickid=${utm.term}&id_polzovatelya=${clientId}&id_zakaza=${orderId}&summa_zakaza=${orderSumm}&klient=mba&cel=sale`

		// const regPostback = `https://webhook.site/8ae882fe-2b33-4bae-b5ca-32dc877c78d6?offer=${utm.medium}&webmaster=${utm.campaign}&clickid=${utm.term}&id_polzovatelya=${clientId}&klient=mba&cel=registration`
		// const newOrderPostback = `https://webhook.site/8ae882fe-2b33-4bae-b5ca-32dc877c78d6?offer=${utm.medium}&webmaster=${utm.campaign}&clickid=${utm.term}&id_polzovatelya=${clientId}&id_zakaza=${orderId}&summa_zakaza=${orderSumm}&klient=mba&cel=order`
		// const payedOrderPostback = `https://webhook.site/8ae882fe-2b33-4bae-b5ca-32dc877c78d6?offer=${utm.medium}&webmaster=${utm.campaign}&clickid=${utm.term}&id_polzovatelya=${clientId}&id_zakaza=${orderId}&summa_zakaza=${orderSumm}&klient=mba&cel=sale`

		try {
			// Postback registration
			if (leadStatus === LeadStatusCode.Register) {
				await axios.get(regPostback)
			}

			// Postback new order
			if (leadStatus === LeadStatusCode.NewOrder) {
				await axios.get(newOrderPostback)
			}

			// Postback payed order
			if (leadStatus === LeadStatusCode.PaidOrder) {
				await axios.get(payedOrderPostback)
			}
		} catch (e) {
			console.error(e)
		}
	}

	res.status(200).json({ msg: JSON.stringify(req.body) })
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
