import { TypeLibSeminar } from '@/types/index'
import { HTMLAttributes } from 'react'

export type SeminarCardProps = HTMLAttributes<HTMLLinkElement> & {
	card: TypeLibSeminar
}
