import React, { createContext, useContext, useEffect, useReducer } from 'react'
import useAt from '@/hooks/useAt'
import { useRouter } from 'next/router'
import { TypeLibPrograms } from '@/types/index'
import { ACTION, TypeProgramsReducer, programsPageReducer } from './reducer'
import { FilterTypeProgramEnum, SortingEnum } from '../enums'
import {
	ProgramsPageContextType,
	ProgramsPageProviderProps
} from 'modules/programs-page-alt/types'
import { addDurationAndPriceMBA } from '../utils/addDurationAndPriceMBA'
import { getMaxDuration, getMinDuration } from '../utils/getDuration'
import { sortNovelty, sortPopular, sortPrograms } from '../utils/sortPrograms'

export const ProgramsPageContext = createContext<
	ProgramsPageContextType | undefined
>(undefined)

export const ProgramsPageProvider: React.FC<ProgramsPageProviderProps> = ({
	children,
	programs
}) => {
	const at = useAt()

	const programsDuration = addDurationAndPriceMBA(programs)

	const initialPrograms = programsDuration

	const ProgramsReducerInitialState: TypeProgramsReducer = {
		programs: initialPrograms,
		UIPrograms: initialPrograms,
		programsConfig: {
			sorting: SortingEnum.popular,
			type: FilterTypeProgramEnum.all,
			direction: null,
			pricing: null,
			duration: {
				value: getMaxDuration(initialPrograms),
				min: getMinDuration(initialPrograms),
				max: getMaxDuration(initialPrograms)
			},
			employment: false
		}
	}

	const [state, dispatch] = useReducer(
		programsPageReducer,
		ProgramsReducerInitialState
	)

	useEffect(() => {
		const sortedPrograms = sortPrograms(
			initialPrograms,
			state.programsConfig.sorting
		)

		dispatch({
			type: ACTION.SET_UI_PROGRAMS,
			payload: sortedPrograms
		})
	}, [])

	useEffect(() => {
		dispatch({
			type: ACTION.SET_DURATION,
			payload: {
				...state.programsConfig.duration,
				value: state.programsConfig.duration.max
			}
		})
	}, [])

	useEffect(() => {
		dispatch({
			type: ACTION.SET_DURATION,
			payload: {
				...state.programsConfig.duration,
				min: getMinDuration(state.UIPrograms),
				max: getMaxDuration(state.UIPrograms)
			}
		})
	}, [state.UIPrograms])

	return (
		<ProgramsPageContext.Provider
			value={{
				state,
				dispatch
			}}
		>
			{children}
		</ProgramsPageContext.Provider>
	)
}

export const useProgramsPageSearch = (): ProgramsPageContextType => {
	const context = useContext(ProgramsPageContext)
	if (context === undefined) {
		throw new Error(
			'useProgramsPageDispatch must be used within a ProgramsPageProvider'
		)
	}
	return context
}
