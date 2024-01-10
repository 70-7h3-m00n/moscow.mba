import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react'

export type AccordionProps = HTMLAttributes<HTMLDivElement> & {
	item: {
		title: string | null
		string?: string | null
		new?: boolean | null
		duration?: number | null
	}
	idx: number
	active: boolean
	handler: Dispatch<SetStateAction<number>>
	variant: 'modules' | 'faq'
	children: ReactNode
}
