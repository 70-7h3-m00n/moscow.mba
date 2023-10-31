import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type RedRectangleSectionType = HTMLAttributes<HTMLUListElement> & {
	program: TypeLibProgram
}
