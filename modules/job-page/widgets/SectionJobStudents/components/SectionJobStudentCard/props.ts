import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Student } from 'modules/job-page/widgets/data/StudentsData'

export default interface SectionJobStudentCardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	student: Student
}
