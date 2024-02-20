import { TypeLibPrograms } from '@/types/index'
import { HTMLAttributes } from 'react'

export type ProgramsPageProps = HTMLAttributes<HTMLElement> & {
	programs: TypeLibPrograms
}
