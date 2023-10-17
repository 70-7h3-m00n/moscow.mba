import { TypeLibTeachers } from '@/types/index'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type TeachersPageProps = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	programTitle?: string
	programId?: string | number
	atStandAlonePage?: boolean
	teachers: TypeLibTeachers
}
