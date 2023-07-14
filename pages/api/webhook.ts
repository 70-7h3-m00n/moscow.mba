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

const data = {
	'account[subdomain]': 'mbamoscow',
	'account[id]': '29638927',
	'account[_links][self]': 'https://mbamoscow.amocrm.ru',
	'leads[status][0][id]': '30307415',
	'leads[status][0][name]': 'Новая заявка с moscow.mba',
	'leads[status][0][status_id]': '142',
	'leads[status][0][old_status_id]': '41893093',
	'leads[status][0][price]': '1',
	'leads[status][0][responsible_user_id]': '8744098',
	'leads[status][0][last_modified]': '1689281821',
	'leads[status][0][modified_user_id]': '8421298',
	'leads[status][0][created_user_id]': '0',
	'leads[status][0][date_create]': '1689256449',
	'leads[status][0][pipeline_id]': '4542166',
	'leads[status][0][tags][0][id]': '55515',
	'leads[status][0][tags][0][name]': 'новаязаявка',
	'leads[status][0][account_id]': '29638927',
	'leads[status][0][custom_fields][0][id]': '432373',
	'leads[status][0][custom_fields][0][name]': 'roistat',
	'leads[status][0][custom_fields][0][values][0][value]': '139919',
	'leads[status][0][custom_fields][0][code]': 'ROISTAT',
	'leads[status][0][custom_fields][1][id]': '644897',
	'leads[status][0][custom_fields][1][name]': 'Тип программы',
	'leads[status][0][custom_fields][1][values][0][value]': 'MBA',
	'leads[status][0][custom_fields][1][values][0][enum]': '853027',
	'leads[status][0][custom_fields][2][id]': '745159',
	'leads[status][0][custom_fields][2][name]': 'Программа обучения',
	'leads[status][0][custom_fields][2][values][0][value]': 'd',
	'leads[status][0][custom_fields][3][id]': '644899',
	'leads[status][0][custom_fields][3][name]': 'Часы',
	'leads[status][0][custom_fields][3][values][0][value]': '360',
	'leads[status][0][custom_fields][3][values][0][enum]': '863241',
	'leads[status][0][custom_fields][4][id]': '709257',
	'leads[status][0][custom_fields][4][name]': 'Месяцы',
	'leads[status][0][custom_fields][4][values][0][value]': '1 месяц',
	'leads[status][0][custom_fields][4][values][0][enum]': '827671',
	'leads[status][0][custom_fields][5][id]': '715391',
	'leads[status][0][custom_fields][5][name]': 'Ссылка на сайт',
	'leads[status][0][custom_fields][5][values][0][value]':
		'https://moscow.mba/promo?utm_source=salid&amp;utm_medium=offer1234&amp;utm_campaign=wm112233&amp;utm_term=423432345654345423456743',
	'leads[status][0][custom_fields][6][id]': '644949',
	'leads[status][0][custom_fields][6][name]': '№ Договора',
	'leads[status][0][custom_fields][6][values][0][value]': '1',
	'leads[status][0][custom_fields][7][id]': '645087',
	'leads[status][0][custom_fields][7][name]': 'Дата доступа',
	'leads[status][0][custom_fields][7][values][0]': '1689282000',
	'leads[status][0][custom_fields][8][id]': '776035',
	'leads[status][0][custom_fields][8][name]': 'Источник',
	'leads[status][0][custom_fields][8][values][0][value]': 'salid',
	'leads[status][0][custom_fields][9][id]': '1363223',
	'leads[status][0][custom_fields][9][name]': 'Yandex metrics ID',
	'leads[status][0][custom_fields][9][values][0][value]': '1680699095677241273',
	'leads[status][0][custom_fields][10][id]': '1376331',
	'leads[status][0][custom_fields][10][name]': 'Тип трафика',
	'leads[status][0][custom_fields][10][values][0][value]': 'offer1234',
	'leads[status][0][custom_fields][11][id]': '1376333',
	'leads[status][0][custom_fields][11][name]': 'Название РК',
	'leads[status][0][custom_fields][11][values][0][value]': 'wm112233',
	'leads[status][0][custom_fields][12][id]': '1376337',
	'leads[status][0][custom_fields][12][name]': 'Ключевое слово',
	'leads[status][0][custom_fields][12][values][0][value]':
		'423432345654345423456743',
	'leads[status][0][created_at]': '1689256449',
	'leads[status][0][updated_at]': '1689281821'
}

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
	const webhook = `https://webhook.site/8ae882fe-2b33-4bae-b5ca-32dc877c78d6`
	let currentLead

	if (req?.body?.hasOwnProperty('status')) {
		currentLead = req?.body?.leads?.status?.[0]
	} else if (req?.body?.hasOwnProperty('add')) {
		currentLead = req?.body?.leads?.add?.[0]
	} else {
		await axios.get(webhook + '?wrong=data')
		res.status(200).json({ msg: 'wrong data from crm' })
	}

	const utm: {
		source: string | null
		medium: string | null
		term: string | null
		campaign: string | null
	} = currentLead?.custom_fields?.reduce(
		(acc, customField) => {
			if (customField.name === 'Источник') {
				// вытащить имя ключа, у которого соответствует название
				// удалить у данного ключа [name]
				// добавить [values][0][value]
				// присвоить значение переменной

				// 'leads[status][0][custom_fields][8][name]': 'Источник',
				// 'leads[status][0][custom_fields][8][values][0][value]': 'salid',

				// const entries = Object.values(req.body)
				// const clickIdIndex = entries?.findIndex(ell => ell === 'Клик ID')
				// const clickId = clickIdIndex > 0 && entries?.[clickIdIndex + 1]
				// const isEdpartnersFromAmocrm = entries.some(el => el === 'edpartners')
				// const isAffiliateFromAmocrm = entries.some(el => el === 'affiliate')

				acc.source = customField?.values?.[0]?.value || null
			}
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

	const entries = Object.values(req.body)
	const utmTermIndex = entries?.findIndex(ell => ell === 'Ключевое слово')
	const utmTerm = utmTermIndex > 0 && entries?.[utmTermIndex + 1]
	const utmCampaighIndex = entries?.findIndex(ell => ell === 'Название РК')
	const utmCampaign = utmCampaighIndex > 0 && entries?.[utmCampaighIndex + 1]
	const isUTMSourceSalid = entries.some(el => el === 'salid')
	const isUTMMediumOffer = entries.some(el => el === 'offer1234')

	if (isUTMSourceSalid && isUTMMediumOffer) {
		const clientId = req.body?.['leads[status][0][account_id]']
		const orderId = req.body?.['leads[status][0][id]']
		const orderSumm = req.body?.['leads[status][0][price]']
		const leadStatus = req.body?.['leads[status][0][status_id]']

		const regPostback = `https://salid.ru/postback/ads.php?offer=${utm.medium}&webmaster=${utm.campaign}&clickid=${utm.term}&id_polzovatelya=${clientId}&klient=mba&cel=registration`
		const newOrderPostback = `https://salid.ru/postback/ads.php?offer=${utm.medium}&webmaster=${utm.campaign}&clickid=${utm.term}&id_polzovatelya=${clientId}&id_zakaza=${orderId}&summa_zakaza=${orderSumm}&klient=mba&cel=order`
		const payedOrderPostback = `https://salid.ru/postback/ads.php?offer=${utm.medium}&webmaster=${utm.campaign}&clickid=${utm.term}&id_polzovatelya=${clientId}&id_zakaza=${orderId}&summa_zakaza=${orderSumm}&klient=mba&cel=sale`

		try {
			// Postback registration
			if (leadStatus === LeadStatusCode.Register) {
				await axios.get(regPostback)
				await axios.get(webhook + `?cel=registration`)
			}

			// Postback new order
			if (leadStatus === LeadStatusCode.NewOrder) {
				await axios.get(newOrderPostback)
				await axios.get(webhook + `?cel=order`)
			}

			// Postback payed order
			if (leadStatus === LeadStatusCode.PaidOrder) {
				await axios.get(payedOrderPostback)
				await axios.get(webhook + `?cel=sale`)
			}
			res.status(200).json({ msg: 'success' })
		} catch (e) {
			console.error(e)
		}
	}

	res.status(200).json({ msg: 'api webhook' })
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

const x = {
	add: [
		{
			id: '30307415',
			name: 'Новая заявка с moscow.mba',
			status_id: '42100270',
			price: '0',
			responsible_user_id: '8283409',
			last_modified: '1689256448',
			modified_user_id: '0',
			created_user_id: '0',
			date_create: '1689256449',
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
					id: '715391',
					name: 'Ссылка на сайт',
					values: [
						{
							value:
								'https://moscow.mba/promo?utm_source=salid&amp;utm_medium=offer1234&amp;utm_campaign=wm112233&amp;utm_term=423432345654345423456743'
						}
					]
				},
				{
					id: '1363223',
					name: 'Yandex metrics ID',
					values: [{ value: '1680699095677241273' }]
				}
			],
			created_at: '1689256449',
			updated_at: '1689256448'
		}
	]
}

//30307415

const y = {
	status: [
		{
			id: '30307415',
			name: 'Новая заявка с moscow.mba',
			status_id: '41893093',
			old_status_id: '42100270',
			price: '0',
			responsible_user_id: '8854162',
			last_modified: '1689256781',
			modified_user_id: '8421298',
			created_user_id: '0',
			date_create: '1689256449',
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
					id: '715391',
					name: 'Ссылка на сайт',
					values: [
						{
							value:
								'https://moscow.mba/promo?utm_source=salid&amp;utm_medium=offer1234&amp;utm_campaign=wm112233&amp;utm_term=423432345654345423456743'
						}
					]
				},
				{
					id: '1363223',
					name: 'Yandex metrics ID',
					values: [{ value: '1680699095677241273' }]
				}
			],
			created_at: '1689256449',
			updated_at: '1689256781'
		}
	]
}
