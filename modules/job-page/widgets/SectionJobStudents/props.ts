import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { StudentsData } from '../data/StudentsData'

export default interface SectionJobStudentsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	students: typeof StudentsData
}
