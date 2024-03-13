import { TypeLibProgram } from '@/types/index'
import { ComponentPropsWithoutRef } from 'react'

export type PriceTagProps = ComponentPropsWithoutRef<'div'> & {
	program: TypeLibProgram
}
