import { HTMLAttributes } from 'react'

export type HeaderProgramProps = HTMLAttributes<HTMLDivElement> & {
	handleMenu: (value: boolean) => void
	openMenu: boolean
}
