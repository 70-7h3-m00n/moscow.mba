import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type CarouselProps = HTMLAttributes<HTMLDivElement> & {
	program: TypeLibProgram
}
