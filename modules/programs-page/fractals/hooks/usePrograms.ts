import { useContext, useEffect, useState } from 'react'
import { ContextStaticProps } from '@/context/index'
import { useConfigProgramsContext } from './ConfigPrograms'
import { FilterTypeProgramEnum, SortingEnum } from '../enums'

export const usePrograms = () => {
	const { programs } = useContext(ContextStaticProps)
	const { configPrograms } = useConfigProgramsContext()
	const [renderPrograms, setRenderPrograms] = useState(programs)
	const [minMaxDuration, setMinMaxDuration] = useState({
		minDuration: null,
		maxDuration: null
	})
	const [isBlended, setIsBlended] = useState(true)
	const [uniqueDirections, setUniqueDirections] = useState([])

	const fitlerAll = programs => [...programs]

	const filterTypeProgram = programs =>
		programs?.filter(
			program => program?.category?.slug === configPrograms?.filterTypeProgram
		)

	const filterDuration = programs => {
		if (
			FilterTypeProgramEnum.profession === configPrograms?.filterTypeProgram ||
			FilterTypeProgramEnum.course === configPrograms?.filterTypeProgram
		) {
			const maxDuration = Math.max(
				...programs?.map(item => item.duration?.minStudyMonths)
			)
			const minDuration = Math.min(
				...programs?.map(item => item.duration?.minStudyMonths)
			)

			setMinMaxDuration(() => ({
				minDuration: minDuration,
				maxDuration: maxDuration
			}))

			return programs?.filter(
				program =>
					+program?.duration?.minStudyMonths <= +configPrograms?.filterDuration
			)
		} else {
			setMinMaxDuration(null)

			return programs
		}
	}

	const filterTrainingFormat = programs => {
		if (
			FilterTypeProgramEnum.mba === configPrograms?.filterTypeProgram ||
			FilterTypeProgramEnum.mini === configPrograms?.filterTypeProgram ||
			FilterTypeProgramEnum.all === configPrograms?.filterTypeProgram
		) {
			setIsBlended(true)

			return programs?.filter(
				program => program?.studyFormat === configPrograms?.filterTrainingFormat
			)
		} else {
			setIsBlended(false)

			return programs
		}
	}
	const filterUniqueDirections = programs => {
		const programsStudyFieldName = programs.map(
			program => program?.study_field?.name
		)
		const uniqueProgramsStudyFieldName = programsStudyFieldName.filter(
			(item, index, arr) => arr.indexOf(item) === index
		)

		return uniqueProgramsStudyFieldName
	}

	const filterDirection = programs => {
		if (
			FilterTypeProgramEnum.course === configPrograms?.filterTypeProgram ||
			FilterTypeProgramEnum.profession === configPrograms?.filterTypeProgram
		) {
			setUniqueDirections(filterUniqueDirections(programs))

			return programs.filter(
				program =>
					program?.study_field?.name === configPrograms?.filterDirection
			)
		} else {
			setUniqueDirections([])

			return programs
		}
	}

	const sortAlphabet = programs =>
		[...programs].sort((a, b) => a?.title[0].localeCompare(b?.title[0]))

	const sortNovelty = programs =>
		programs &&
		[...programs].sort(
			(a, b) =>
				new Date(b?.updatedAt).getTime() - new Date(a?.updatedAt).getTime()
		)

	const filtering = () => {
		if (FilterTypeProgramEnum.all === configPrograms?.filterTypeProgram) {
			const filteredAll = fitlerAll(programs)
			const filteredTrainingFormat = filterTrainingFormat(filteredAll)
			setRenderPrograms(filteredTrainingFormat)
		} else {
			const filteredTypeProgram = filterTypeProgram(programs)
			const filteredTrainingFormat = filterTrainingFormat(filteredTypeProgram)
			const filteredDirection = filterDirection(filteredTrainingFormat)
			const filteredDuration = filterDuration(filteredDirection)
			setRenderPrograms(filteredDuration)
		}
	}

	const sorting = () => {
		if (SortingEnum.alphabet === configPrograms?.sorting) {
			setRenderPrograms(renderPrograms => sortAlphabet(renderPrograms))
		}
		if (SortingEnum.novelty === configPrograms?.sorting) {
			setRenderPrograms(renderPrograms => sortNovelty(renderPrograms))
		}
	}

	useEffect(() => {
		filtering()
		sorting()
	}, [configPrograms])

	return {
		renderPrograms,
		isBlended,
		uniqueDirections,
		minMaxDuration
	}
}
