import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type SubjectsProfessionSectionType = HTMLAttributes<HTMLDivElement> & {
	program: TypeLibProgram
	isBonusModules?: boolean
}
