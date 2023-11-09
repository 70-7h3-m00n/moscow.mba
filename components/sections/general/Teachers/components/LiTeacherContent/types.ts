import { TypeLibTeacher } from '@/types/index'
import { HTMLAttributes } from 'react'

export type LiTeacherContentProps = HTMLAttributes<HTMLElement> & {
	teacher: TypeLibTeacher | null
	atStandAlonePage?: boolean
}
