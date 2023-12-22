import { HTMLAttributes } from 'react'

export type PopupFormProps = HTMLAttributes<HTMLDivElement> & {
	next: () => void
	prev: () => void
	close: () => void
}
