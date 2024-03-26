import { TypeLibPrograms } from '@/types/index'
import { ComponentPropsWithoutRef } from 'react'

export type RecommendedProgramsProps = ComponentPropsWithoutRef<'div'> & {
	programs: TypeLibPrograms
}
