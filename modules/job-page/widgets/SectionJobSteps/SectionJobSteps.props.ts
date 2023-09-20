import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { DataItem } from '../data/JobData'

export default interface SectionJobStepsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	data: DataItem[]
}
