import { useContext, useEffect, useState } from 'react'
import { ContextStaticProps } from '@/context/index'

export enum FilterTypeProgramEnum {
	all = 'all',
	mini = 'mini',
	mba = 'mba',
	profession = 'profession',
	course = 'course'
}

export enum FilterFormatTrainingEnum {
	online = 'online',
	blended = 'blended'
}

export enum SortingEnum {
	default = 'default',
	novelty = 'novelty',
	alphabet = 'alphabet'
}

type TConfigPrograms = {
	sorting?: string
	filterTypeProgram?: keyof typeof FilterTypeProgramEnum | string
	filterTrainingFormat?: keyof typeof FilterFormatTrainingEnum | string
	filterDuration?: number
	filterDirection?: string
}

type TMinMaxDuration = {
	minDuration: number
	maxDuration: number
}

const usePrograms = () => {
	const { programs, setRenderPrograms, configPrograms, setConfigPrograms } =
		useContext(ContextStaticProps)
	// const [configPrograms, setConfigPrograms] = useState({ sorting: 'byDefault' })
	const [minMaxDuration, setMinMaxDuration] = useState<TMinMaxDuration | null>(
		null
	)

	const handlerSetConfigPrograms = (props: TConfigPrograms) => {
		setConfigPrograms(configPrograms => ({
			...configPrograms,
			...props
		}))
	}

	const fitlerAll = programs => programs && [...programs]

	const filterTypeProgram = programs =>
		programs?.filter(
			program => program?.category?.slug === configPrograms?.filterTypeProgram
		)

	const sorted = configPrograms => {
		if (configPrograms) {
			if (configPrograms.sorting === 'byDefault') {
				programs && setRenderPrograms([...programs])
			}
			// TODO: Пробелы в карточках, ставятся на первое место
			if (configPrograms.sorting === 'byAlphabet') {
				setRenderPrograms(
					programs &&
						[...programs].sort((a, b) => a?.title[0].localeCompare(b?.title[0]))
				)
			}
			if (configPrograms.sorting === 'byNovelty') {
				setRenderPrograms(
					programs &&
						[...programs].sort(
							(a, b) =>
								new Date(b?.updatedAt).getTime() -
								new Date(a?.updatedAt).getTime()
						)
				)
			}
		}
	}

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
			return programs?.filter(
				program => program?.studyFormat === configPrograms?.filterTrainingFormat
			)
		} else {
			return programs
		}
	}

	const filtering = () => {
		if (FilterTypeProgramEnum.all === configPrograms?.filterTypeProgram) {
			const filteredAll = fitlerAll(programs)
			const filteredTrainingFormat = filterTrainingFormat(filteredAll)
			setRenderPrograms(filteredTrainingFormat)
		} else {
			const filteredTypeProgram = filterTypeProgram(programs)
			const filteredTrainingFormat = filterTrainingFormat(filteredTypeProgram)
			// const filteredDirection = filterDirection(filteredTrainingFormat)
			const filteredDuration = filterDuration(filteredTrainingFormat)
			setRenderPrograms(filteredDuration)
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
		configPrograms,
		handlerSetConfigPrograms,
		minMaxDuration
	}
}

export default usePrograms
