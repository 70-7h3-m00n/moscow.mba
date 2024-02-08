import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type ProgramModulesProps = HTMLAttributes<HTMLElement> & {
	program: TypeLibProgram
}
