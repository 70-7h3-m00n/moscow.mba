import { useContext, useEffect, useState } from 'react'
import { ContextStaticProps } from '@/context/index'

const usePrograms = () => {
	const { programs, setRenderPrograms } = useContext(ContextStaticProps)

	const [configPrograms, setConfigPrograms] = useState({ sorting: 'byDefault' })

	const handlerSetConfigPrograms = props => {
		setConfigPrograms(props)
	}

	const sorted = configPrograms => {
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

	useEffect(() => {
		sorted(configPrograms)
	}, [configPrograms])

	return {
		configPrograms,
		handlerSetConfigPrograms
	}
}

export default usePrograms
