import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type ReviewsProps = HTMLAttributes<HTMLDivElement> & {
	program?: TypeLibProgram
}