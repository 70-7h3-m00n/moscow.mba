import { DetailedHTMLProps, HTMLAttributes } from 'react'

type Variant = {
	title: string
	description: string
	link?: { name: string; url: string }
}

export default interface SectionCooperationVariantsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	data: Variant[]
}
