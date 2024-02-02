import { TypeLibTeacher } from '@/types/index'
import { HTMLAttributes, MouseEventHandler, ReactNode } from 'react'

export type PopupTeacherNewProps = HTMLAttributes<HTMLDivElement> & {
	// close: MouseEventHandler
	variant?: 'alpha' | 'beta' | 'gamma'
	btnText: string
	title: string
}
