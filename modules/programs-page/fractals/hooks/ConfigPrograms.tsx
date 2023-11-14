import { NextRouter, useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React, { useState, useContext } from 'react'
import {
	FilterTypeProgramEnum,
	FilterFormatTrainingEnum,
	SortingEnum
} from '../enums'

// TODO: TYPES

type TConfigPrograms = {
	sorting?: string
	filterTypeProgram?: keyof typeof FilterTypeProgramEnum | string
	filterTrainingFormat?: keyof typeof FilterFormatTrainingEnum | string
	filterDuration?: number
	filterDirection?: string
}

type TConfigProgramContext = {
	configPrograms: TConfigPrograms
	handlerSetConfigPrograms: (props: TConfigPrograms) => void
	handlerDeleteConfigPrograms: (props: keyof TConfigPrograms) => void
	router: Omit<NextRouter, 'query'> & {
		query: TConfigPrograms
	}
	setQueryURI: (props: TConfigPrograms) => void
}

const ConfigProgramsContext = React.createContext<TConfigProgramContext>({
	configPrograms: {
		sorting: 'default',
		filterTypeProgram: 'all',
		filterTrainingFormat: 'online',
		filterDirection: 'all',
		filterDuration: 0
	},
	handlerSetConfigPrograms: () => {},
	handlerDeleteConfigPrograms: () => {},
	router: null,
	setQueryURI: () => {}
})

export const ConfigProgramsProvider = ({ children }) => {
	const router = useRouter()
	const [configPrograms, setConfigPrograms] = useState<TConfigPrograms>({
		sorting: SortingEnum.default,
		filterTypeProgram: FilterTypeProgramEnum.all,
		filterTrainingFormat: FilterFormatTrainingEnum.online
	})

	const handlerSetConfigPrograms = (props: TConfigPrograms) => {
		setConfigPrograms(configPrograms => ({
			...configPrograms,
			...props
		}))
	}

	const handlerDeleteConfigPrograms = (props: keyof TConfigPrograms) => {
		const getNewConfig = (configPrograms: TConfigPrograms): TConfigPrograms => {
			const { [props]: deleteItem, ...newConfigPrograms } = configPrograms
			return newConfigPrograms
		}

		setConfigPrograms(configPrograms => ({
			...getNewConfig(configPrograms)
		}))
	}

	const setQueryURI = (props: TConfigPrograms) => {
		router.replace(
			{
				query: {
					...props,
					...router.query
				}
			},
			undefined,
			{
				shallow: true,
				scroll: false
			}
		)
	}

	return (
		<ConfigProgramsContext.Provider
			value={{
				configPrograms: configPrograms,
				handlerSetConfigPrograms: handlerSetConfigPrograms,
				router: router,
				handlerDeleteConfigPrograms: handlerDeleteConfigPrograms,
				setQueryURI: setQueryURI
			}}
		>
			{children}
		</ConfigProgramsContext.Provider>
	)
}

export const useConfigProgramsContext = () => {
	const {
		configPrograms,
		handlerSetConfigPrograms,
		handlerDeleteConfigPrograms,
		router,
		setQueryURI
	} = useContext(ConfigProgramsContext)

	return {
		configPrograms,
		handlerSetConfigPrograms,
		handlerDeleteConfigPrograms,
		router,
		setQueryURI
	}
}
