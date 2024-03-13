import { TypeLibPrograms } from '@/types/index'

export const getMaxDuration = (programs: TypeLibPrograms) =>
	Math.ceil(
		Math.max(...programs?.map(program => +program?.duration.minStudyMonths))
	)

export const getMinDuration = (programs: TypeLibPrograms) =>
	Math.floor(
		Math.min(...programs?.map(program => +program?.duration.minStudyMonths))
	)
