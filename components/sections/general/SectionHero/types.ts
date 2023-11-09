import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type DataItem = {
	title: string
	description: string
	src: string
}

export type SectionHeroProps = HTMLAttributes<HTMLElement> & {
	data: DataItem
}
