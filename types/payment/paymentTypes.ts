export const PAYMENT = {
	CONSULTATION: 'CONSULTATION' as const,
	FULLPRICE: 'FULLPRICE' as const,
	CREDIT: 'CREDIT' as const,
	GIFT: 'GIFT' as const
}

export type PaymentType = keyof typeof PAYMENT
