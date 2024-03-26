import { TypeLibPrograms } from '@/types/index'
import { ComponentPropsWithoutRef } from 'react'

export type CardsListProps = ComponentPropsWithoutRef<'ul'> & {
	programs: TypeLibPrograms
}
