import { TypeLibTeacher } from '@/types/index'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type TeacherCardProps = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	teacher: TypeLibTeacher | null
}
