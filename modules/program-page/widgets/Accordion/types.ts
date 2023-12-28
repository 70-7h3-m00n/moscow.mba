import { Dispatch, HTMLAttributes, SetStateAction } from 'react'

export type AccordionProps = HTMLAttributes<HTMLDivElement> & {
	item: {
		title: string
		content: string
		isList: boolean
	}
	idx: number
	active: boolean
	handler: Dispatch<SetStateAction<number>>
}
