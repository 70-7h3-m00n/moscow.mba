import { TypeLibTeachers } from '@/types/index'
import { HTMLAttributes } from 'react'

export type TeachersProps = HTMLAttributes<HTMLElement> & {
	programTitle?: string | null
	programId?: string | number | null
	atStandAlonePage?: boolean
	teachers?: TypeLibTeachers | null
}
