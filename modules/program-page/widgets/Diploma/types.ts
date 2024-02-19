import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type DiplomaProps = HTMLAttributes<HTMLDivElement> & {
	program: TypeLibProgram
}
