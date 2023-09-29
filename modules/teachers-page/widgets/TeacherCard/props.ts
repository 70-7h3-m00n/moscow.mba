import { TypeLibTeacher } from '@/types/index'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface TeacherCardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	teacher: TypeLibTeacher | null
	atStandAlonePage?: boolean
}
