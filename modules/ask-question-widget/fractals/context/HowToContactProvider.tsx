import React, { useEffect, useReducer } from 'react'
import { ACTION, HowToContactReducer } from './reducer'
import {
	HowToContactContext,
	HowToContactInitialState,
	HowToContactProviderProps
} from './context'

export const HowToContactProvider = ({
	children
}: HowToContactProviderProps) => {
	const [state, dispatch] = useReducer(
		HowToContactReducer,
		HowToContactInitialState
	)

	useEffect(() => {
		dispatch({
			type: ACTION.SET_INITIAL_STATE,
			payload: HowToContactInitialState
		})
	}, [])

	return (
		<HowToContactContext.Provider
			value={{
				state,
				dispatch
			}}
		>
			{children}
		</HowToContactContext.Provider>
	)
}
