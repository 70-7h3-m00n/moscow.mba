import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type BreadcrumbsSectionProps = HTMLAttributes<HTMLDivElement> & {
	program: TypeLibProgram
}
