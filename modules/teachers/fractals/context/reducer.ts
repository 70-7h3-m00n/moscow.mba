import { TypeLibTeachers } from '@/types/index'

export const ACTION = {
	SET_SEARCH_TERM: 'SET_SEARCH_TERM' as const,
	SET_SEARCH_TERM_IS_APPLIED: 'SET_SEARCH_TERM_IS_APPLIED' as const,
	SET_INPUT_CLOSE: 'SET_INPUT_CLOSE' as const,
	SET_SHOWN_TEACHERS_COUNT: 'SET_SHOWN_TEACHERS_COUNT' as const,
	SET_UI_TEACHERS: 'SET_UI_TEACHERS' as const,
	SET_TEACHERS: 'SET_TEACHERS' as const,
	SET_INITIAL_TEACHERS: 'SET_INITIAL_TEACHERS' as const,
	SET_EMPTY_INPUT: 'SET_EMPTY_INPUT' as const,
	APPLY_SEARCH_TERM_TO_URL: 'APPLY_SEARCH_TERM_TO_URL' as const,
	SET_SEARCH_TERM_INPUT_FOCUSED: 'SET_SEARCH_TERM_INPUT_FOCUSED' as const,
	SET_HANDLE_ON_FOCUS: 'SET_HANDLE_ON_FOCUS' as const,
	SET_INITIAL_PROPS: 'SET_INITIAL_PROPS' as const
}

export type TeachersSearchAction =
	| { type: typeof ACTION.SET_SEARCH_TERM; payload: string }
	| { type: typeof ACTION.SET_SEARCH_TERM_IS_APPLIED; payload: boolean }
	| { type: typeof ACTION.SET_INPUT_CLOSE; payload: boolean }
	| { type: typeof ACTION.SET_SHOWN_TEACHERS_COUNT; payload: number }
	| { type: typeof ACTION.SET_UI_TEACHERS; payload: TypeLibTeachers }
	| { type: typeof ACTION.SET_TEACHERS; payload: TypeLibTeachers }
	| { type: typeof ACTION.SET_SEARCH_TERM_INPUT_FOCUSED; payload: boolean }
	| {
			type: typeof ACTION.SET_HANDLE_ON_FOCUS
			payload: {
				searchInputIsFocused: boolean
				searchTermIsAppliedtoUrl: boolean
			}
	  }
	| {
			type: typeof ACTION.SET_INITIAL_TEACHERS
			payload: { teachersProps: TypeLibTeachers; UITeachers: TypeLibTeachers }
	  }
	| {
			type: typeof ACTION.SET_INITIAL_PROPS
			payload: {
				programTitle: string
				programId: string | number
				atStandAlonePage: boolean
			}
	  }
	| {
			type: typeof ACTION.SET_EMPTY_INPUT
			payload: {
				searchTermIsApplied: boolean
				setInputClose: boolean
			}
	  }
	| {
			type: typeof ACTION.APPLY_SEARCH_TERM_TO_URL
			payload: {
				searchTerm: string
				searchTermIsApplied: boolean
			}
	  }

export type TypeTeachersReducer = {
	searchTerm: string
	searchTermIsAppliedtoUrl: boolean
	isInputClose: boolean
	shownTeachersCount: number
	UITeachers: TypeLibTeachers
	teachers: TypeLibTeachers
	searchInputIsFocused: boolean

	showMoreTeachersAddedNum: number
	programTitle: string
	programId: string | number
	atStandAlonePage: boolean
}

export const teachersReducer = (
	state: TypeTeachersReducer,
	action: TeachersSearchAction
) => {
	switch (action.type) {
		case ACTION.SET_SEARCH_TERM:
			return { ...state, searchTerm: action.payload }
		case ACTION.SET_SEARCH_TERM_IS_APPLIED:
			return { ...state, searchTermIsAppliedtoUrl: action.payload }
		case ACTION.SET_INPUT_CLOSE:
			return { ...state, isInputClose: action.payload }
		case ACTION.SET_SHOWN_TEACHERS_COUNT:
			return { ...state, shownTeachersCount: action.payload }
		case ACTION.SET_UI_TEACHERS:
			return { ...state, UITeachers: action.payload }
		case ACTION.SET_TEACHERS:
			return { ...state, teachers: action.payload }
		case ACTION.SET_SEARCH_TERM_INPUT_FOCUSED:
			return { ...state, searchInputIsFocused: action.payload }
		case ACTION.SET_HANDLE_ON_FOCUS:
			return {
				...state,
				searchInputIsFocused: action.payload.searchInputIsFocused,
				searchTermIsAppliedtoUrl: action.payload.searchTermIsAppliedtoUrl
			}
		case ACTION.SET_INITIAL_TEACHERS:
			return {
				...state,
				teachers: action.payload.teachersProps,
				UITeachers: action.payload.UITeachers
			}
		case ACTION.SET_INITIAL_PROPS:
			return {
				...state,
				programTitle: action.payload.programTitle,
				programId: action.payload.programId,
				atStandAlonePage: action.payload.atStandAlonePage
			}
		case ACTION.APPLY_SEARCH_TERM_TO_URL:
			return {
				...state,
				searchTerm: action.payload.searchTerm,
				searchTermIsAppliedtoUrl: action.payload.searchTermIsApplied
			}
		case ACTION.SET_EMPTY_INPUT:
			return {
				...state,
				searchTerm: '',
				searchTermIsAppliedtoUrl: action.payload.searchTermIsApplied,
				setInputClose: action.payload.setInputClose
			}

		default:
			return state
	}
}
