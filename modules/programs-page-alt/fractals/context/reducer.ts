import { TypeLibPrograms } from '@/types/index'

export const ACTION = {
	SET_INITIAL_PROPS: 'SET_INITIAL_PROPS' as const,
	SET_PROGRAMS: 'SET_PROGRAMS' as const
}

export type TypeProgramsAction =
	| {
			type: typeof ACTION.SET_INITIAL_PROPS
			payload: {
				programs: TypeLibPrograms
			}
	  }
	| {
			type: typeof ACTION.SET_PROGRAMS
			payload: TypeLibPrograms
	  }

export type TypeProgramsReducer = {
	programs: TypeLibPrograms
}

export const programsPageReducer = (
	state: TypeProgramsReducer,
	action: TypeProgramsAction
) => {
	switch (action.type) {
		case ACTION.SET_INITIAL_PROPS:
			return {
				...state,
				programs: action.payload.programs
			}
		case ACTION.SET_PROGRAMS:
			return { ...state, programs: action.payload }

		default:
			return state
	}
}
