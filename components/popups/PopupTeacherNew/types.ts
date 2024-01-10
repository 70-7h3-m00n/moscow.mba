import { TypeLibTeacher } from '@/types/index'
import { HTMLAttributes, MouseEventHandler } from 'react'

export type PopupTeacherNewProps = HTMLAttributes<HTMLDivElement> & {
	close: MouseEventHandler
	teacher: TypeLibTeacher
}
