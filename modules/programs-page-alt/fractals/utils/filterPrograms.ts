import { TypeLibPrograms } from '@/types/index'
import { FilterTypeProgramEnum } from '../enums'
import {
	TypeDurationConfig,
	TypeProgramsConfig
} from 'modules/programs-page-alt/types'

export const filterByType = (
	programs: TypeLibPrograms,
	type: FilterTypeProgramEnum
) => {
	return programs?.filter(
		program => type === 'all' || program?.category?.slug === type
	)
}

export const filterByDirection = (
	programs: TypeLibPrograms,
	direction: string
) => {
	return programs?.filter(
		program => direction === null || program?.study_field?.name === direction
	)
}

export const filterByDuration = (
	programs: TypeLibPrograms,
	duration: number
) => {
	return programs?.filter(
		program => Number(program?.duration?.minStudyMonths) <= duration
	)
}

export const filterByEmployment = (programs: TypeLibPrograms) => {
	return programs.filter(program => {
		if (
			program.category.type === 'mba' ||
			program.category.type === 'mini' ||
			program?.frdo
		) {
			return true
		}
		return false
	})
}

export const filterPrograms = (
	programsArray: TypeLibPrograms,
	config: TypeProgramsConfig
) => {
	let programs = programsArray

	programs = filterByDirection(programs, config.direction)

	programs = filterByDuration(programs, config.duration)

	// programs = filterByEmployment(programs)

	return programs
}
