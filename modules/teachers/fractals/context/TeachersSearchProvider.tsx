import React, { useEffect, useReducer } from 'react'
import { ACTION, teachersReducer } from './reducer'
import { useUITeachers } from '../hooks/useUITeachers/useUITeachers'
import {
	TeachersSearchProviderProps,
	TeachersReducerInitialState,
	TeachersSearchContext
} from './context'

export const TeachersSearchProvider: React.FC<TeachersSearchProviderProps> = ({
	children,
	teachersProps,
	programTitle,
	programId,
	atStandAlonePage
}) => {
	const [state, dispatch] = useReducer(
		teachersReducer,
		TeachersReducerInitialState
	)

	const UITeachers = useUITeachers({
		teachers: teachersProps,
		searchTerm: state.searchTerm,
		shownTeachersCount: state.shownTeachersCount
	})

	useEffect(() => {
		dispatch({
			type: ACTION.SET_INITIAL_PROPS,
			payload: { programTitle, programId, atStandAlonePage }
		})
	}, [atStandAlonePage, programId, programTitle])

	useEffect(() => {
		dispatch({
			type: ACTION.SET_INITIAL_TEACHERS,
			payload: { teachersProps, UITeachers }
		})
	}, [teachersProps, state.shownTeachersCount])

	return (
		<TeachersSearchContext.Provider
			value={{
				state,
				dispatch
			}}
		>
			{children}
		</TeachersSearchContext.Provider>
	)
}
