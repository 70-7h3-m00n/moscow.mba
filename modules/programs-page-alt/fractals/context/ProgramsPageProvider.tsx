import React, { useEffect, useReducer } from 'react'
import { ACTION, programsPageReducer } from './reducer'
import {
	ProgramsPageContext,
	ProgramsPageProviderProps,
	ProgramsReducerInitialState
} from './context'

export const ProgramsPageProvider: React.FC<ProgramsPageProviderProps> = ({
	children,
	programs
}) => {
	const [state, dispatch] = useReducer(
		programsPageReducer,
		ProgramsReducerInitialState
	)

	useEffect(() => {
		dispatch({
			type: ACTION.SET_INITIAL_PROPS,
			payload: {
				programs
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
