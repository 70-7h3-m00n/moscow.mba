import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type StudyCostPaymentProps = HTMLAttributes<HTMLDivElement> & {
	program: TypeLibProgram
}
