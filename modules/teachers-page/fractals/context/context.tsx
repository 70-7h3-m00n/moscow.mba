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
import { useRouter } from 'next/router'

interface TeachersSearchContextType {
	state: TypeTeachersReducer
	dispatch: React.Dispatch<TeachersSearchAction>
}

export interface TeachersSearchProviderProps {
	children: React.ReactNode
	teachersProps: TypeLibTeachers
	programTitle: string
	programId: string | number
	atStandAlonePage: boolean
}

export const TeachersReducerInitialState: TypeTeachersReducer = {
	searchTerm: '',
	searchTermIsAppliedtoUrl: false,
	isInputClose: false,
	shownTeachersCount: 8,
	UITeachers: [],
	teachers: [],

	searchInputIsFocused: null,
	showMoreTeachersAddedNum: 12,
	programTitle: null,
	programId: null,
	atStandAlonePage: null
}

export const TeachersSearchContext = createContext<
	TeachersSearchContextType | undefined
>(undefined)

export const TeachersSearchProvider: React.FC<TeachersSearchProviderProps> = ({
	children,
	teachersProps,
	programTitle,
	programId,
	atStandAlonePage
}) => {
	const at = useAt()

	const [state, dispatch] = useReducer(
		teachersReducer,
		TeachersReducerInitialState
	)
	const router = useRouter()

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
	}, [state.shownTeachersCount, router.query.q, UITeachers.length])

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

export const useTeachersSearch = (): TeachersSearchContextType => {
	const context = useContext(TeachersSearchContext)
	if (context === undefined) {
		throw new Error(
			'useTeachersDispatch must be used within a TeachersSearchProvider'
		)
	}
	return context
}
