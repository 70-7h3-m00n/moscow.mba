import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type PartnershipProps = HTMLAttributes<HTMLDivElement> & {
	program: TypeLibProgram
	mobile?: boolean
}
