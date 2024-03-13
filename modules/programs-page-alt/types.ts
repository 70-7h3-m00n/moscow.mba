import { TypeLibPrograms } from '@/types/index'
import { ComponentPropsWithoutRef } from 'react'
import { FilterTypeProgramEnum, SortingEnum } from './fractals'
import { FilterPricingProgramEnum } from './fractals/enums'
import {
	TypeProgramsAction,
	TypeProgramsReducer
} from './fractals/context/reducer'

export type ProgramsPageProps = ComponentPropsWithoutRef<'div'> & {
	programs: TypeLibPrograms
}

export type TypeDuration = {
	value: number
	min: number
	max: number
}

export type TypeProgramsConfig = {
	sorting: SortingEnum
	type: FilterTypeProgramEnum
	direction: string
	pricing: FilterPricingProgramEnum
	employment: boolean | null
	duration: TypeDuration | null
}

export type ProgramsPageContextType = {
	state: TypeProgramsReducer
	dispatch: React.Dispatch<TypeProgramsAction>
}

export type ProgramsPageProviderProps = {
	children: React.ReactNode
	programs: TypeLibPrograms
}
