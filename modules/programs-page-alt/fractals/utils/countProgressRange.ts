import { TypeDurationConfig } from 'modules/programs-page-alt/types'

export const countProgressRange = (
	config: TypeDurationConfig,
	value: number
) => {
	if (config === null) {
		// Обработка ситуации, когда value равен null
		return 0 // Или любое другое значение по умолчанию
	}

	const { min, max } = config

	const countProgress = ((value - min) / (max - min)) * 100

	if (isNaN(countProgress)) {
		return 0
	} else {
		return countProgress
	}
}
