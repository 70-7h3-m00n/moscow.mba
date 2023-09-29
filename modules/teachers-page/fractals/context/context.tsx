import useAt from '@/hooks/useAt'
import { TypeLibTeachers } from '@/types/index'
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import {
	ACTION,
	TeachersSearchAction,
	TypeTeachersReducer,
	teachersReducer
} from './reducer'
import { useUITeachers } from '../hooks/useUITeachers/useUITeachers'

interface TeachersSearchContextType {
	state: TypeTeachersReducer
	dispatch: React.Dispatch<TeachersSearchAction>
}

interface TeachersSearchProviderProps {
	children: React.ReactNode
	teachersProps: TypeLibTeachers
}

export const TeachersReducerInitialState: TypeTeachersReducer = {
	searchTerm: '',
	searchTermIsAppliedtoUrl: false,
	isInputClose: false,
	shownTeachersCount: 8,
	UITeachers: [],
	teachers: [],
	searchInputIsFocused: null
}

const TeachersSearchContext = createContext<
	TeachersSearchContextType | undefined
>(undefined)

export const TeachersSearchProvider: React.FC<TeachersSearchProviderProps> = ({
	children,
	teachersProps
}) => {
	const at = useAt()

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
			type: ACTION.SET_INITIAL_TEACHERS,
			payload: { teachersProps, UITeachers }
		})
	}, [teachersProps, UITeachers])

	return (
		<TeachersSearchContext.Provider
			value={{
				state,
				dispatch
			}}>
			{children}
		</TeachersSearchContext.Provider>
	)
}

export const useTeachersSearch = (): TeachersSearchContextType => {
	const context = useContext(TeachersSearchContext)
	if (context === undefined) {
		throw new Error(
			'useTeachersDispatch must be used within a TeachersSearchProvider'
		)
	}
	return context
}
