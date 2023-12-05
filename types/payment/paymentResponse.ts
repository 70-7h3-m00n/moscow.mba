type Amount = {
	value: string
	currency: string
}

type ThreeDSecure = {
	applied: boolean
}

type AuthorizationDetails = {
	rrn: string
	auth_code: string
	three_d_secure: ThreeDSecure
}

type Card = {
	first6: string
	last4: string
	expiry_month: string
	expiry_year: string
	card_type: string
	issuer_country: string
	issuer_name: string
}

type PaymentMethod = {
	type: string
	id: string
	saved: boolean
	card: Card
	title: string
}

type Recipient = {
	account_id: string
	gateway_id: string
}

export type PaymentResponseType = {
	id: string
	status: string
	paid: boolean
	amount: Amount
	authorization_details: AuthorizationDetails
	created_at: string
	description: string
	expires_at: string
	metadata: Record<string, unknown> // Пустой объект, так как не указаны конкретные свойства
	payment_method: PaymentMethod
	recipient: Recipient
	refundable: boolean
	test: boolean
	income_amount: Amount
}

// Пример использования
// const payment: PaymentResponseType = {
// 	id: '22e12f66-000f-5000-8000-18db351245c7',
// 	status: 'waiting_for_capture',
// 	paid: true,
// 	amount: {
// 		value: '2.00',
// 		currency: 'RUB'
// 	},
// 	authorization_details: {
// 		rrn: '10000000000',
// 		auth_code: '000000',
// 		three_d_secure: {
// 			applied: true
// 		}
// 	},
// 	created_at: '2018-07-18T10:51:18.139Z',
// 	description: 'Заказ №72',
// 	expires_at: '2018-07-25T10:52:00.233Z',
// 	metadata: {},
// 	payment_method: {
// 		type: 'bank_card',
// 		id: '22e12f66-000f-5000-8000-18db351245c7',
// 		saved: false,
// 		card: {
// 			first6: '555555',
// 			last4: '4444',
// 			expiry_month: '07',
// 			expiry_year: '2022',
// 			card_type: 'MasterCard',
// 			issuer_country: 'RU',
// 			issuer_name: 'Sberbank'
// 		},
// 		title: 'Bank card *4444'
// 	},
// 	recipient: {
// 		account_id: '100500',
// 		gateway_id: '100700'
// 	},
// 	refundable: false,
// 	test: false,
// 	income_amount: {
// 		value: '1.97',
// 		currency: 'RUB'
// 	}
// }
