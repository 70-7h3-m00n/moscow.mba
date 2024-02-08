import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type GetFullProgramBtnProps = HTMLAttributes<HTMLDivElement> & {
	program: TypeLibProgram
}
