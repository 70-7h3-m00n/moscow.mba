import { TypeLibProgram } from '@/types/index'
import { ComponentPropsWithoutRef } from 'react'

export type ProgramCardProps = ComponentPropsWithoutRef<'div'> & {
	program: TypeLibProgram
}
