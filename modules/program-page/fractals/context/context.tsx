import React, { createContext, useContext, useEffect, useReducer } from 'react'
import useAt from '@/hooks/useAt'
import { useRouter } from 'next/router'
import { TypeLibProgram, TypeLibPrograms, TypeLibTeachers } from '@/types/index'
import {
	ACTION,
	TypeProgramAction,
	TypeProgramReducer,
	programPageReducer
} from './reducer'

type ProgramPageContextType = {
	state: TypeProgramReducer
	dispatch: React.Dispatch<TypeProgramAction>
}

export type ProgramPageProviderProps = {
	children: React.ReactNode
	programs: TypeLibPrograms
	program: TypeLibProgram
	teachers: TypeLibTeachers
}

export const ProgramReducerInitialState: TypeProgramReducer = {
	programs: [],
	program: null,
	teachers: []
}

export const ProgramPageContext = createContext<
	ProgramPageContextType | undefined
>(undefined)

export const ProgramPageProvider: React.FC<ProgramPageProviderProps> = ({
	children,
	programs,
	program,
	teachers
}) => {
	const at = useAt()

	const [state, dispatch] = useReducer(
		programPageReducer,
		ProgramReducerInitialState
	)
	const router = useRouter()

	useEffect(() => {
		dispatch({
			type: ACTION.SET_INITIAL_PROPS,
			payload: {
				programs: programs,
				program: program,
				teachers: teachers
			}
		})
	}, [])

	return (
		<ProgramPageContext.Provider
			value={{
				state,
				dispatch
			}}
		>
			{children}
		</ProgramPageContext.Provider>
	)
}

export const useProgramPageSearch = (): ProgramPageContextType => {
	const context = useContext(ProgramPageContext)
	if (context === undefined) {
		throw new Error(
			'useProgramPageDispatch must be used within a ProgramPageProvider'
		)
	}
	return context
}
