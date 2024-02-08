import { TypeLibTeacher } from '@/types/index'
import { HTMLAttributes } from 'react'

export type ExpertsCardProps = HTMLAttributes<HTMLDivElement> & {
	expert: TypeLibTeacher
	mainExpert?: boolean
}
