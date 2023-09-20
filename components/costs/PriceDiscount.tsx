interface PriceObject {
	new: string
	old: string
}

interface CoursePrice {
	totalPrice: PriceObject
	creditPrice: PriceObject
}

function PriceDiscount(
	actualPrice: number,
	discountPercentage: number
): CoursePrice {
	const oldPrice = actualPrice / (1 - discountPercentage / 100)

	const roundToNearest100 = (value: number) => Math.ceil(value / 100) * 100

	const totalPrice = {
		new: `${roundToNearest100(actualPrice)?.toLocaleString('ru-RU')} Р.`,
		old: `${roundToNearest100(oldPrice)?.toLocaleString('ru-RU')} Р.`
	}

	const creditPrice = {
		new: `${roundToNearest100(actualPrice / 12)?.toLocaleString(
			'ru-RU'
		)} Р. / мес`,
		old: `${roundToNearest100(oldPrice / 12)?.toLocaleString('ru-RU')} Р. / мес`
	}

	return {
		totalPrice: totalPrice,
		creditPrice: creditPrice
	}
}

export default PriceDiscount
