import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type HeroSectionProps = HTMLAttributes<HTMLElement> & {
	program: TypeLibProgram
}
