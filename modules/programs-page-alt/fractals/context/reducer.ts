import { TypeLibPrograms } from '@/types/index'
import { FilterPricingProgramEnum, FilterTypeProgramEnum } from '../enums'
import { SortingEnum } from 'modules/programs-page-alt/fractals'
import {
	TypeDurationConfig,
	TypeProgramsConfig
} from 'modules/programs-page-alt/types'
import { filterPrograms } from '../utils/filterPrograms'
import { sortPrograms } from '../utils/sortPrograms'
import { getMaxDuration, getMinDuration } from '../utils/getDuration'

export const ACTION = {
	SET_INITIAL_PROPS: 'SET_INITIAL_PROPS' as const,
	SET_PROGRAMS: 'SET_PROGRAMS' as const,
	SET_UI_PROGRAMS: 'SET_UI_PROGRAMS' as const,
	SET_SORTING: 'SET_SORTING' as const,
	SET_TYPE: 'SET_TYPE' as const,
	SET_DIRECTION: 'SET_DIRECTION' as const,
	SET_PRICING: 'SET_PRICING' as const,
	SET_DURATION: 'SET_DURATION' as const,
	SET_DURATION_CONFIG: 'SET_DURATION_CONFIG' as const,
	SET_EMPLOYMENT: 'SET_EMPLOYMENT' as const,
	SET_SEARCH_TERM: 'SET_SEARCH_TERM' as const
}

export type TypeProgramsAction =
	| {
			type: typeof ACTION.SET_INITIAL_PROPS
			payload: {
				programs: TypeLibPrograms
				UIPrograms: TypeLibPrograms
				programsConfig: TypeProgramsConfig
			}
	  }
	| {
			type: typeof ACTION.SET_PROGRAMS
			payload: TypeLibPrograms
	  }
	| {
			type: typeof ACTION.SET_UI_PROGRAMS
	  }
	| {
			type: typeof ACTION.SET_SORTING
			payload: SortingEnum
	  }
	| {
			type: typeof ACTION.SET_TYPE
			payload: FilterTypeProgramEnum | null
	  }
	| {
			type: typeof ACTION.SET_DIRECTION
			payload: string | null
	  }
	| {
			type: typeof ACTION.SET_PRICING
			payload: FilterPricingProgramEnum | null
	  }
	| {
			type: typeof ACTION.SET_DURATION
			payload: number | null
	  }
	| {
			type: typeof ACTION.SET_DURATION_CONFIG
			payload: TypeDurationConfig | null
	  }
	| {
			type: typeof ACTION.SET_EMPLOYMENT
			payload: boolean
	  }
	| {
			type: typeof ACTION.SET_SEARCH_TERM
			payload: string
	  }

export type TypeProgramsReducer = {
	programs: TypeLibPrograms
	UIPrograms: TypeLibPrograms
	programsConfig: TypeProgramsConfig
	durationConfig: TypeDurationConfig
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
				programsConfig: action.payload.programsConfig
			}

		case ACTION.SET_PROGRAMS:
			return { ...state, programs: action.payload }

		case ACTION.SET_UI_PROGRAMS:
			const filteredAndSortedPrograms = sortPrograms(
				filterPrograms(state.programs, state.programsConfig),
				state.programsConfig.sorting
			)
			return {
				...state,
				UIPrograms: filteredAndSortedPrograms
			}

		case ACTION.SET_SORTING:
			return {
				...state,
				programsConfig: { ...state.programsConfig, sorting: action.payload }
			}

		case ACTION.SET_TYPE:
			return {
				...state,
				programsConfig: { ...state.programsConfig, type: action.payload }
			}

		case ACTION.SET_DIRECTION:
			return {
				...state,
				programsConfig: { ...state.programsConfig, direction: action.payload }
			}

		case ACTION.SET_PRICING:
			return {
				...state,
				programsConfig: { ...state.programsConfig, pricing: action.payload }
			}

		case ACTION.SET_DURATION:
			return {
				...state,
				programsConfig: { ...state.programsConfig, duration: action.payload }
			}

		case ACTION.SET_DURATION_CONFIG:
			return {
				...state,
				durationConfig: action.payload
			}

		case ACTION.SET_EMPLOYMENT:
			return {
				...state,
				programsConfig: { ...state.programsConfig, employment: action.payload }
			}

		case ACTION.SET_SEARCH_TERM:
			return {
				...state,
				programsConfig: { ...state.programsConfig, searchTerm: action.payload }
			}

		default:
			return state
	}
}
