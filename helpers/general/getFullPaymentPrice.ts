import { price as defaultPrice } from '@/config/price'

type getFullPriceProps = {
	price: number | null
	type: 'mba' | 'mini' | 'profession' | 'course'
}

export const getFullPaymentPrice = ({ price, type }: getFullPriceProps) => {
	const discountRate = 0.05 // 5% скидка
	const currentTypePrice = price ? price : defaultPrice.discounted[type].online

	const discountedPrice = Math.floor(
		currentTypePrice - currentTypePrice * discountRate
	)

	return discountedPrice
}
