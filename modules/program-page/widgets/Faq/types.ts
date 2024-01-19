import { HTMLAttributes } from 'react'

export type FaqProps = HTMLAttributes<HTMLElement>

export type faqType = {
	title: string
	string: string[]
	isList: boolean
}[]
