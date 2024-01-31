import { HTMLAttributes, ReactNode } from 'react'

export type BtnBetaProps = HTMLAttributes<HTMLButtonElement> & {
	tag?: 'button' | 'Link'
	children: ReactNode
	variant: 'alpha' | 'beta' | 'gamma'
	size?: 's' | 'm'
	as?: any
}
