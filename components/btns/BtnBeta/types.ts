import { HTMLAttributes, ReactNode } from 'react'

export type BtnBetaProps = HTMLAttributes<HTMLButtonElement> & {
	children: ReactNode
	variant: 'alpha' | 'beta' | 'gamma'
	size?: 's' | 'm'
}
