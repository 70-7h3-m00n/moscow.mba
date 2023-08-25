interface PriceObject {
	new: string
	old: string
}

interface CoursePrice {
	totalPrice: PriceObject
	creditPrice: PriceObject
}

function PriceDiscount(
	initialPrice: number,
	discountPercentage: number
): CoursePrice {
	const discountedPrice = initialPrice * (1 - discountPercentage / 100)

	const roundToNearest100 = (value: number) => Math.floor(value / 100) * 100

	const totalPrice = {
		new: `${roundToNearest100(discountedPrice)?.toLocaleString('ru-RU')} Р.`,
		old: `${roundToNearest100(initialPrice)?.toLocaleString('ru-RU')} Р.`
	}

	const creditPrice = {
		new: `${roundToNearest100(discountedPrice / 12)?.toLocaleString(
			'ru-RU'
		)} Р. / мес`,
		old: `${roundToNearest100(initialPrice / 12)?.toLocaleString(
			'ru-RU'
		)} Р. / мес`
	}

	return {
		totalPrice: totalPrice,
		creditPrice: creditPrice
	}
}

export default PriceDiscount
