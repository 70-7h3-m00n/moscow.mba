import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type CourseModulesProps = HTMLAttributes<HTMLElement> & {
	baseSubjects?: boolean
	bonusSubjects?: boolean
	program: TypeLibProgram
}
