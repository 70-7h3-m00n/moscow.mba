import React, { createContext, useContext, useEffect, useReducer } from 'react'
import useAt from '@/hooks/useAt'
import { useRouter } from 'next/router'
import { TypeLibPrograms } from '@/types/index'
import {
	ACTION,
	TypeProgramsAction,
	TypeProgramsReducer,
	programsPageReducer
} from './reducer'
import { FilterTypeProgramEnum, SortingEnum } from '../enums'

type ProgramsPageContextType = {
	state: TypeProgramsReducer
	dispatch: React.Dispatch<TypeProgramsAction>
}

export type ProgramsPageProviderProps = {
	children: React.ReactNode
	programs: TypeLibPrograms
}

// export const ProgramsReducerInitialState: TypeProgramsReducer = {
// 	programs: [],
// 	UIPrograms: [],
// 	programsConfig: {
// 		sorting: SortingEnum.popular,
// 		type: FilterTypeProgramEnum.all,
// 		direction: null,
// 		pricing: null,
// 		duration: null,
// 		employment: null
// 	}
// }

export const ProgramsPageContext = createContext<
	ProgramsPageContextType | undefined
>(undefined)

export const ProgramsPageProvider: React.FC<ProgramsPageProviderProps> = ({
	children,
	programs
}) => {
	const at = useAt()

	const ProgramsReducerInitialState: TypeProgramsReducer = {
		programs: programs,
		UIPrograms: programs,
		programsConfig: {
			sorting: SortingEnum.popular,
			type: FilterTypeProgramEnum.all,
			direction: null,
			pricing: null,
			duration: null,
			employment: null
		}
	}

	const [state, dispatch] = useReducer(
		programsPageReducer,
		ProgramsReducerInitialState
	)

	useEffect(() => {
		// dispatch({
		// 	type: ACTION.SET_UI_PROGRAMS,
		// 	payload: programs
		// })

		const sortPopular = (programs: TypeLibPrograms) =>
			[...programs].sort((a, b) => a?.title[0].localeCompare(b?.title[0]))

		const sortNovelty = programs =>
			programs &&
			[...programs].sort(
				(a, b) =>
					new Date(b?.updatedAt).getTime() - new Date(a?.updatedAt).getTime()
			)

		const sorting = () => {
			if (SortingEnum.popular === state.programsConfig?.sorting) {
				dispatch({
					type: ACTION.SET_UI_PROGRAMS,
					payload: sortPopular(programs)
				})
			}
			// if (SortingEnum.novelty === configPrograms?.sorting) {
			// 	setRenderPrograms(renderPrograms => sortNovelty(renderPrograms))
			// }
		}
	}, [])

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
