import { SortingEnum } from '../enums'

export const LIST_SORTING = [
	{ value: SortingEnum.popular, text: 'По популярности' },
	{ value: SortingEnum.novelty, text: 'По новизне' },
	{ value: SortingEnum.priceDecrease, text: 'По убыванию цены' },
	{ value: SortingEnum.priceIncrease, text: 'По возрастанию цены' }
]
