type Amount = {
	value: string
	currency: string
}

type Confirmation = {
	type: string
	return_url: string
	confirmation_url: string
}

type PaymentMethod = {
	type: string
	id: string
	saved: boolean
}

type Recipient = {
	account_id: string
	gateway_id: string
}

export type CreatePaymentResponseType = {
	id: string
	status: string
	paid: boolean
	amount: Amount
	confirmation?: Confirmation
	created_at: string
	description?: string
	metadata?: Record<string, unknown> // Пустой объект, так как не указаны конкретные свойства
	payment_method: PaymentMethod
	recipient?: Recipient
	refundable: boolean
	test: boolean
}

// Пример использования
// const payment: PaymentData = {
// 	id: '22e12f66-000f-5000-8000-18db351245c7',
// 	status: 'pending',
// 	paid: false,
// 	amount: {
// 		value: '2.00',
// 		currency: 'RUB'
// 	},
// 	confirmation: {
// 		type: 'redirect',
// 		return_url: 'https://www.example.com/return_url',
// 		confirmation_url:
// 			'https://yoomoney.ru/payments/external/confirmation?orderId=22e12f66-000f-5000-8000-18db351245c7'
// 	},
// 	created_at: '2018-07-18T10:51:18.139Z',
// 	description: 'Заказ №72',
// 	metadata: {},
// 	payment_method: {
// 		type: 'bank_card',
// 		id: '22e12f66-000f-5000-8000-18db351245c7',
// 		saved: false
// 	},
// 	recipient: {
// 		account_id: '100500',
// 		gateway_id: '100700'
// 	},
// 	refundable: false,
// 	test: false
// }
