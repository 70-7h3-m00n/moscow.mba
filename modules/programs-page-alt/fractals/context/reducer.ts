import { TypeLibPrograms } from '@/types/index'
import { FilterPriceProgramEnum } from '../enums'

export const ACTION = {
	SET_INITIAL_PROPS: 'SET_INITIAL_PROPS' as const,
	SET_PROGRAMS: 'SET_PROGRAMS' as const,
	SET_UI_PROGRAMS: 'SET_UI_PROGRAMS' as const,
	SET_DIRECTION: 'SET_DIRECTION' as const,
	SET_PRICE: 'SET_PRICE' as const
}

export type TypeProgramsAction =
	| {
			type: typeof ACTION.SET_INITIAL_PROPS
			payload: {
				programs: TypeLibPrograms
				UIPrograms: TypeLibPrograms
				direction: string | null
				price: FilterPriceProgramEnum | null
			}
	  }
	| {
			type: typeof ACTION.SET_PROGRAMS
			payload: TypeLibPrograms
	  }
	| {
			type: typeof ACTION.SET_UI_PROGRAMS
			payload: TypeLibPrograms
	  }
	| {
			type: typeof ACTION.SET_DIRECTION
			payload: string
	  }
	| {
			type: typeof ACTION.SET_PRICE
			payload: FilterPriceProgramEnum | null
	  }

export type TypeProgramsReducer = {
	programs: TypeLibPrograms
	UIPrograms: TypeLibPrograms
	direction: string
	price: FilterPriceProgramEnum
}

export const programsPageReducer = (
	state: TypeProgramsReducer,
	action: TypeProgramsAction
) => {
	switch (action.type) {
		case ACTION.SET_INITIAL_PROPS:
			return {
				...state,
				programs: action.payload.programs,
				UIPrograms: action.payload.UIPrograms,
				direction: action.payload.direction,
				price: action.payload.price
			}
		case ACTION.SET_PROGRAMS:
			return { ...state, programs: action.payload }
		case ACTION.SET_UI_PROGRAMS:
			return { ...state, UIPrograms: action.payload }
		case ACTION.SET_DIRECTION:
			return { ...state, direction: action.payload }
		case ACTION.SET_PRICE:
			return { ...state, price: action.payload }

		default:
			return state
	}
}
