import { TypeLibPrograms } from '@/types/index'
import { SortingEnum } from '../enums'
import { price } from '@/config/price'

export const sortNovelty = (programs: TypeLibPrograms) => {
	if (!programs) {
		return []
	}

	const sortedPrograms = [...programs].sort((a, b) => {
		// Сортировка по hit в обратном порядке, чтобы программы с hit === true оказались в начале
		const hitComparison = Number(b?.new) - Number(a?.new)

		// Если hit различен, вернуть результат сравнения по hit
		if (hitComparison !== 0) {
			return hitComparison
		}

		// Если hit одинаков, вернуть результат сравнения по дате обновления
		return new Date(b?.updatedAt).getTime() - new Date(a?.updatedAt).getTime()
	})

	return sortedPrograms
}

export const sortPopular = (programs: TypeLibPrograms) => {
	if (!programs) {
		return []
	}

	const sortedPrograms = [...programs].sort((a, b) => {
		// Перемещаем программы с hit === true в начало массива
		const hitComparison = Number(b?.hit) - Number(a?.hit)
		if (hitComparison !== 0) {
			return hitComparison
		}

		// Если hit одинаков, сортируем по популярности (например, по первой букве названия)
		return a?.title[0].localeCompare(b?.title[0])
	})

	return sortedPrograms
}

const discountedMBA = price.discounted.mba.online
const discountedMini = price.discounted.mini.online

export const sortPriceDecrease = (programs: TypeLibPrograms) =>
	[...programs].sort((a, b) => {
		const priceA =
			a.category.type === 'mba'
				? discountedMBA
				: a.category.type === 'mini'
				? discountedMini
				: Number(a.price)
		const priceB =
			b.category.type === 'mba'
				? discountedMBA
				: b.category.type === 'mini'
				? discountedMini
				: Number(b.price)
		return priceB - priceA
	})

export const sortPriceIncrease = (programs: TypeLibPrograms) =>
	[...programs].sort((a, b) => {
		const priceA =
			a.category.type === 'mba'
				? discountedMBA
				: a.category.type === 'mini'
				? discountedMini
				: Number(a.price)
		const priceB =
			b.category.type === 'mba'
				? discountedMBA
				: b.category.type === 'mini'
				? discountedMini
				: Number(b.price)
		return priceA - priceB
	})

export const sortPrograms = (
	programs: TypeLibPrograms,
	sorting: SortingEnum
) => {
	switch (sorting) {
		case SortingEnum.novelty:
			return sortNovelty(programs)

		case SortingEnum.popular:
			return sortPopular(programs)

		case SortingEnum.priceDecrease:
			return sortPriceDecrease(programs)

		case SortingEnum.priceIncrease:
			return sortPriceIncrease(programs)

		default:
			return programs
	}
}
