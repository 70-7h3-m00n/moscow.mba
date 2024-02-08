import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type StudyCostPriceProps = HTMLAttributes<HTMLDivElement> & {
	program: TypeLibProgram
}
