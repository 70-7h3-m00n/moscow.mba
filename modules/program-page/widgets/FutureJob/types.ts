import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type FutureJobProps = HTMLAttributes<HTMLElement> & {
	program: TypeLibProgram
}
