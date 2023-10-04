import { TypeLibTeacher } from '@/types/index'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface TeachersSearchLinkProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	teacher: TypeLibTeacher
}
