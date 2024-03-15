import React, { createContext, useContext, useEffect, useReducer } from 'react'
import useAt from '@/hooks/useAt'
import { useRouter } from 'next/router'
import { ACTION, TypeProgramsReducer, programsPageReducer } from './reducer'
import { FilterTypeProgramEnum, SortingEnum } from '../enums'
import { getMaxDuration, getMinDuration } from '../utils/getDuration'
import { filterByType } from '../utils/filterPrograms'
import { addDurationToMBA } from '../utils/addDurationMBA'
import {
	ProgramsPageContextType,
	ProgramsPageProviderProps
} from 'modules/programs-page-alt/types'

export const ProgramsPageContext = createContext<
	ProgramsPageContextType | undefined
>(undefined)

export const ProgramsPageProvider: React.FC<ProgramsPageProviderProps> = ({
	children,
	programs
}) => {
	const at = useAt()

	const { mba, mini, profession, course } = at
	const filteredPrograms = programs.filter(program => {
		if (mba && program.category.type === FilterTypeProgramEnum.mba) return true
		if (mini && program.category.type === FilterTypeProgramEnum.mini)
			return true
		if (
			profession &&
			program.category.type === FilterTypeProgramEnum.profession
		)
			return true
		if (course && program.category.type === FilterTypeProgramEnum.course)
			return true
		return false
	})

	const initialPrograms =
		filteredPrograms.length > 0 ? filteredPrograms : addDurationToMBA(programs)
	const initialType = mba
		? FilterTypeProgramEnum.mba
		: mini
		? FilterTypeProgramEnum.mini
		: profession
		? FilterTypeProgramEnum.profession
		: course
		? FilterTypeProgramEnum.course
		: FilterTypeProgramEnum.all
	const initialEmployment = !profession || !course

	const ProgramsReducerInitialState: TypeProgramsReducer = {
		programs: initialPrograms,
		UIPrograms: initialPrograms,
		programsConfig: {
			sorting: SortingEnum.popular,
			type: initialType,
			direction: null,
			pricing: null,
			duration: getMaxDuration(initialPrograms),
			employment: initialEmployment
		},
		durationConfig: {
			min: getMinDuration(initialPrograms),
			max: getMaxDuration(initialPrograms)
		}
	}

	const [state, dispatch] = useReducer(
		programsPageReducer,
		ProgramsReducerInitialState
	)

	useEffect(() => {
		dispatch({
			type: ACTION.SET_UI_PROGRAMS
		})
	}, [state.programsConfig])

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
