import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type ProgramsModulesType = HTMLAttributes<HTMLDivElement> & {
	program: TypeLibProgram
	smallerMb?: boolean
	isBonusModules?: boolean
}
