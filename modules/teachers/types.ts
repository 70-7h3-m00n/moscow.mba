import { TypeLibTeachers } from '@/types/index'
import { HTMLAttributes } from 'react'

export type TeachersProps = HTMLAttributes<HTMLElement> & {
	programTitle?: string
	programId?: string | number
	atStandAlonePage?: boolean
	teachers: TypeLibTeachers
}
