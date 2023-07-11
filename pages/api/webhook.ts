import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type TypeNextApiResponseLeadData = {
	readonly err?: unknown
	readonly msg: string
}

const data = {
	status: [
		{
			id: '30155081',
			name: 'Новая заявка с moscow.mba',
			status_id: '41948425',
			old_status_id: '41948455',
			price: '1',
			responsible_user_id: '8744098',
			last_modified: '1688998841',
			modified_user_id: '8421298',
			created_user_id: '0',
			date_create: '1688997250',
			pipeline_id: '4542166',
			tags: [{ id: '54263', name: 'дубль' }],
			account_id: '29638927', // аккаунт пользователя amo crm
			custom_fields: [
				{
					id: '432373',
					name: 'roistat',
					values: [{ value: '129368' }],
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
					values: [{ value: 'Тест' }]
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
								'https://moscow.mba/programs/mba/online/investment-management'
						}
					]
				},
				{ id: '644949', name: '№ Договора', values: [{ value: '12345' }] },
				{ id: '645087', name: 'Дата доступа', values: ['1689022800'] },
				{
					id: '1363223',
					name: 'Yandex metrics ID',
					values: [{ value: '1680699095677241273' }]
				}
			],
			created_at: '1688997250',
			updated_at: '1688998841'
		}
	]
}

// Postback о регистрации
// https://salid.ru/postback/ads.php?offer={utm_medium}&webmaster={utm_campaign}&clickid={utm_term}&id_polzovatelya={id_polzovatelya}&klient=mba&cel=registration

// Postback о новом заказе (заявка)
// https://salid.ru/postback/ads.php?offer={utm_medium}&webmaster={utm_campaign}&clickid={utm_term}&id_polzovatelya={id_polzovatelya}&id_zakaza={id_zakaza}&summa_zakaza={summa_zakaza}&klient=mba&cel=order

// Postback об оплаченном заказе
// https://salid.ru/postback/ads.php?offer={utm_medium}&webmaster={utm_campaign}&clickid={utm_term}&id_polzovatelya={id_polzovatelya}&id_zakaza={id_zakaza}&summa_zakaza={summa_zakaza}&klient=mba&cel=sale

const webhook = async (
	req: NextApiRequest,
	res: NextApiResponse<TypeNextApiResponseLeadData | Error>
) => {
	const utm_term = req?.body?.utms?.utm_term
	const utm_campaign = req?.body?.utms?.utm_campaign
	const utm_medium = req?.body?.utms?.utm_medium

	const id_polzovatelya = `id_polzovatelya` // где взять?
	const id_zakaza = req?.body?.['leads[status][0][id]']
	const summa_zakaza = req?.body?.['leads[status][0][price]']

	const regPostback = `https://salid.ru/postback/ads.php?offer=${utm_medium}&webmaster=${utm_campaign}&clickid=${utm_term}&id_polzovatelya=${id_polzovatelya}&klient=mba&cel=registration`
	const newOrderPostback = `https://salid.ru/postback/ads.php?offer=${utm_medium}&webmaster=${utm_campaign}&clickid=${utm_term}&id_polzovatelya=${id_polzovatelya}&id_zakaza=${id_zakaza}&summa_zakaza=${summa_zakaza}&klient=mba&cel=order`
	const payedOrderPostback = `https://salid.ru/postback/ads.php?offer=${utm_medium}&webmaster=${utm_campaign}&clickid=${utm_term}&id_polzovatelya=${id_polzovatelya}&id_zakaza=${id_zakaza}&summa_zakaza=${summa_zakaza}&klient=mba&cel=sale`

	console.log('req: ', req.body)

	try {
		const response = await axios.get(regPostback)

		// const entries = Object.values(req.body)
		// console.log('entries: ', entries)

		res.status(200).json({ msg: regPostback })
	} catch (e) {
		console.error(e)
	}
}

export default webhook
