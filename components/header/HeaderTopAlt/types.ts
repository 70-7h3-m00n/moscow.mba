import { ComponentPropsWithoutRef } from 'react'

export type HeaderTopAltProps = ComponentPropsWithoutRef<'div'> & {
	handleMenu: (value: boolean) => void
	openMenu: boolean
}
