import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type ProsProps = HTMLAttributes<HTMLElement> & {
	program: TypeLibProgram
	format?: string
}
