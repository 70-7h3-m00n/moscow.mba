import { TypeLibTeachers, TypeLibPrograms, TypeLibProgram } from '@/types/index'

export const ACTION = {
	SET_INITIAL_PROPS: 'SET_INITIAL_PROPS' as const,
	SET_PROGRAMS: 'SET_PROGRAMS' as const,
	SET_PROGRAM: 'SET_PROGRAM' as const,
	SET_TEACHERS: 'SET_TEACHERS' as const
}

export type TypeProgramAction =
	| {
			type: typeof ACTION.SET_INITIAL_PROPS
			payload: {
				programs: TypeLibPrograms
				program: TypeLibProgram
				teachers: TypeLibTeachers
			}
	  }
	| {
			type: typeof ACTION.SET_TEACHERS
			payload: TypeLibTeachers
	  }
	| {
			type: typeof ACTION.SET_PROGRAMS
			payload: TypeLibPrograms
	  }
	| {
			type: typeof ACTION.SET_PROGRAM
			payload: TypeLibProgram
	  }

export type TypeProgramReducer = {
	programs: TypeLibPrograms
	program: TypeLibProgram
	teachers: TypeLibTeachers
}

export const programPageReducer = (
	state: TypeProgramReducer,
	action: TypeProgramAction
) => {
	switch (action.type) {
		case ACTION.SET_INITIAL_PROPS:
			return {
				...state,
				programs: action.payload.programs,
				program: action.payload.program,
				teachers: action.payload.teachers
			}
		case ACTION.SET_PROGRAMS:
			return { ...state, programs: action.payload }
		case ACTION.SET_PROGRAM:
			return { ...state, program: action.payload }
		case ACTION.SET_TEACHERS:
			return { ...state, teachers: action.payload }

		default:
			return state
	}
}
