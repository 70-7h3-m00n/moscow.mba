import { HTMLAttributes } from 'react'

export type ProfessionAccordionProps = HTMLAttributes<HTMLDivElement> & {
	course: any
	accordionIndex: number
	activeAccordionIndex: number
	activeAccordion: boolean
	setActiveAccordion: any
	noCounter?: boolean
}
