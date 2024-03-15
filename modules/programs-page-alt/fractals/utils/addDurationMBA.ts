import { TypeLibPrograms } from '@/types/index'

export const addDurationToMBA = (
	programs: TypeLibPrograms
): TypeLibPrograms => {
	const categoryDurationMap: Record<string, { duration: number }> = {
		mba: { duration: 18 },
		mini: { duration: 9 }
	}

	return programs
		.filter(program => program.category.slug !== 'executive')
		.map(program => {
			const { category, duration } = program || {}

			if (category?.slug in categoryDurationMap && !duration?.minStudyMonths) {
				return {
					...program,
					duration: {
						...(program?.duration || {}),
						minStudyMonths: categoryDurationMap[category.slug].duration
					}
				}
			}

			return program
		})
		.filter(Boolean) as TypeLibPrograms
}
