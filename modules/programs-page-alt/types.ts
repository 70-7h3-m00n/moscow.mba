import { TypeLibPrograms } from '@/types/index'
import { ComponentPropsWithoutRef } from 'react'

export type ProgramsPageProps = ComponentPropsWithoutRef<'div'> & {
	programs: TypeLibPrograms
}
