import React, { useEffect, useReducer } from 'react'
import { ACTION, programPageReducer } from './reducer'
import {
	ProgramPageContext,
	ProgramPageProviderProps,
	ProgramReducerInitialState
} from './context'

export const ProgramPageProvider: React.FC<ProgramPageProviderProps> = ({
	children,
	programs,
	program,
	teachers
}) => {
	const [state, dispatch] = useReducer(
		programPageReducer,
		ProgramReducerInitialState
	)

	useEffect(() => {
		dispatch({
			type: ACTION.SET_INITIAL_PROPS,
			payload: {
				programs,
				program,
				teachers
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
