export type PendingPaymentResponseType = {
	id: string
	status: 'waiting_for_capture' | 'pending' | 'succeeded' | 'canceled'
	paid: boolean
	amount: {
		value: string
		currency: string
	}
	created_at: string
	description: string
	expires_at: string
	metadata: Record<string, any>
	payment_method: {
		type: string
		id: string
		saved: boolean
		card: {
			first6: string
			last4: string
			expiry_month: string
			expiry_year: string
			card_type: string
			issuer_country: string
			issuer_name: string
		}
		title: string
	}
	recipient: {
		account_id: string
		gateway_id: string
	}
	refundable: boolean
	test: boolean
}
