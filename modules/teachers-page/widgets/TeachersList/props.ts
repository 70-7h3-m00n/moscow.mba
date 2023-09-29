import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface TeachersListProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	atStandAlonePage: boolean
}
