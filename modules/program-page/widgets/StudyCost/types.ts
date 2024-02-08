import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type StudyCostProps = HTMLAttributes<HTMLDivElement> & {
	program: TypeLibProgram
}
