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

type ProgramsPageContextType = {
	state: TypeProgramsReducer
	dispatch: React.Dispatch<TypeProgramsAction>
}

export type ProgramsPageProviderProps = {
	children: React.ReactNode
	programs: TypeLibPrograms
}

export const ProgramsReducerInitialState: TypeProgramsReducer = {
	programs: []
}

export const ProgramsPageContext = createContext<
	ProgramsPageContextType | undefined
>(undefined)

export const ProgramsPageProvider: React.FC<ProgramsPageProviderProps> = ({
	children,
	programs
}) => {
	const at = useAt()

	const [state, dispatch] = useReducer(
		programsPageReducer,
		ProgramsReducerInitialState
	)
	const router = useRouter()

	useEffect(() => {
		dispatch({
			type: ACTION.SET_INITIAL_PROPS,
			payload: {
				programs: programs
			}
		})
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
