import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type SaleProps = HTMLAttributes<HTMLDivElement> & {
	program: TypeLibProgram
}
