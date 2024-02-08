import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type ExpertsProps = HTMLAttributes<HTMLDivElement> & {
	program: TypeLibProgram
}
