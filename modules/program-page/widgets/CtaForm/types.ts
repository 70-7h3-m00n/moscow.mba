import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type CtaFormProps = HTMLAttributes<HTMLDivElement> & {
	variant?: 'alpha' | 'beta' | 'gamma'
	program: TypeLibProgram
}
