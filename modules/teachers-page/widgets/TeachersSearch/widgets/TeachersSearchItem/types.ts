import { TypeLibTeacher } from '@/types/index'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type TeachersSearchItemProps = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	teacher: TypeLibTeacher
}
