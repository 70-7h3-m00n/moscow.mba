import { TypeLibPrograms } from '@/types/index'
import { FilterTypeProgramEnum } from '../enums'
import keyboard from '@/config/keyboard'
import {
	TypeDurationConfig,
	TypeProgramsConfig
} from 'modules/programs-page-alt/types'
import { checkMatchAtBeginning } from '@/components/general/SearchField/fractals/hooks/searchMatch'

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

export const filterByEmployment = (
	programs: TypeLibPrograms,
	employment: boolean
) => {
	if (employment === null) return programs

	if (employment) {
		return programs.filter(
			program =>
				program.category.type === 'mba' ||
				program.category.type === 'mini' ||
				(program.category.type === 'course' && program.frdo === true) ||
				(program.category.type === 'profession' && program.frdo === true)
		)
	} else {
		return programs.filter(
			program =>
				(program.category.type === 'course' && !program.frdo) ||
				(program.category.type === 'profession' && !program.frdo)
		)
	}
}

const decode = (search: string) => {
	return search.replace(/[^а-я]/gi, match => {
		if (keyboard.hasOwnProperty(match.length > 1 ? match.at(-1) : match)) {
			return match.length > 1 ? ` ${keyboard[match.at(-1)]}` : keyboard[match]
		} else {
			return ''
		}
	})
}

export const filterBySearchTerm = (
	programs: TypeLibPrograms,
	searchTerm: string
) => {
	// Получаем расшифрованный поисковый запрос
	const decodedSearchTerm = decode(searchTerm)

	const filteredBySearch = programs.filter(program => {
		// Определяем название программы и приводим его к нижнему регистру
		const title = program.title.toLowerCase().replace(/-/g, ' ')

		// Приводим поисковый запрос к нижнему регистру и убираем тире
		const search = searchTerm?.toLowerCase()?.replace(/-/g, ' ')

		return title.includes(search) || title.includes(decodedSearchTerm)
	})

	// Сортируем отфильтрованные программы
	const result = filteredBySearch?.sort(
		program =>
			searchTerm &&
			checkMatchAtBeginning(program?.title, decodedSearchTerm || searchTerm)
	)

	return result
}

export const filterPrograms = (
	programsArray: TypeLibPrograms,
	config: TypeProgramsConfig
) => {
	let programs = programsArray

	programs = filterByType(programs, config.type)

	programs = filterByDirection(programs, config.direction)

	programs = filterByDuration(programs, config.duration)

	programs = filterBySearchTerm(programs, config.searchTerm)

	programs = filterByEmployment(programs, config.employment)

	return programs
}
