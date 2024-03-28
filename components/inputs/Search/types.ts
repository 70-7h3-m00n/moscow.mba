import { ComponentPropsWithoutRef } from 'react'

export type SearchProps = ComponentPropsWithoutRef<'input'> & {
	handlerClearSearch: () => void
}