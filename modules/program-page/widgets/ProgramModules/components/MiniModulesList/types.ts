import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes, ReactNode } from 'react'

export type MiniModulesListProps = HTMLAttributes<HTMLElement> & {
	baseSubjects?: boolean
	bonusSubjects?: boolean
	program: TypeLibProgram
}
