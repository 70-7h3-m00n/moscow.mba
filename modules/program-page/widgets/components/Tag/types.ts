import { HTMLAttributes, ReactNode } from 'react'

export type TagProps = HTMLAttributes<HTMLDivElement> & {
	children: ReactNode
	variant:
		| 'alpha'
		| 'beta'
		| 'gamma'
		| 'delta'
		| 'epsilon'
		| 'zeta'
		| 'eta'
		| 'theta'
		| 'iota'
}
