import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type SubjectsSectionType = HTMLAttributes<HTMLDivElement> & {
	program: TypeLibProgram
}
