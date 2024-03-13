import { TypeDuration } from 'modules/programs-page-alt/types'

export const countProgressRange = (param: TypeDuration) => {
	if (param === null) {
		// Обработка ситуации, когда value равен null
		return 0 // Или любое другое значение по умолчанию
	}

	const { value, min, max } = param

	const countProgress = ((value - min) / (max - min)) * 100

	if (isNaN(countProgress)) {
		return 0
	} else {
		return countProgress
	}
}
