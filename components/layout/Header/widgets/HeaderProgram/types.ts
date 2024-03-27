import { ComponentPropsWithoutRef } from 'react'

export type HeaderProgramProps = ComponentPropsWithoutRef<'div'> & {
	handleMenu: (value: boolean) => void
	openMenu: boolean
}
