import React, { useState, useContext } from 'react'
import {
	FilterTypeProgramEnum,
	FilterFormatTrainingEnum,
	SortingEnum
} from '../enums'

// TODO: TYPES

const ConfigProgramsContext = React.createContext({
	configPrograms: {},
	setConfigPrograms: () => {}
})

export const ConfigProgramsProvider = ({ children }) => {
	const [configPrograms, setConfigPrograms] = useState({
		sorting: SortingEnum.default,
		filterTypeProgram: FilterTypeProgramEnum.all,
		filterDuration: null,
		filterTrainingFormat: FilterFormatTrainingEnum.online,
		filterDirection: null
	})

	return (
		<ConfigProgramsContext.Provider value={[configPrograms, setConfigPrograms]}>
			{children}
		</ConfigProgramsContext.Provider>
	)
}

export const useConfigProgramsContext = () => {
	const [configPrograms, setConfigPrograms] = useContext(ConfigProgramsContext)

	return {
		configPrograms,
		setConfigPrograms
	}
}
