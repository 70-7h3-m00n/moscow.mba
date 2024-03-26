import { ComponentPropsWithoutRef } from 'react'

export type HeaderMainProps = ComponentPropsWithoutRef<'div'> & {
	handleMenu: (value: boolean) => void
	openMenu: boolean
}

export type menuItemType = {
	title: string
	src: string
	list: {
		title: string
		src: string
	}[]
}
