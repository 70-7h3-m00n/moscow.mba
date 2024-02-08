import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes, ReactNode } from 'react'

export type MBAModulesListProps = HTMLAttributes<HTMLElement> & {
	baseSubjects?: boolean
	specializedSubjects?: boolean
	bonusSubjects?: boolean
	program: TypeLibProgram
}
