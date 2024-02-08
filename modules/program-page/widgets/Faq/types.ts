import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type FaqProps = HTMLAttributes<HTMLElement> & {
	program: TypeLibProgram
}

export type faqType = {
	title: string
	string: string[]
	isList: boolean
}[]
