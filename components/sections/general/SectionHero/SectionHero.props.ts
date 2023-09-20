import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type DataItem = {
	title: string
	description: string
	src: string
}

export default interface SectionHeroProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	data: DataItem
}
