import { HTMLAttributes } from 'react'

export type PopupCtaProps = HTMLAttributes<HTMLDivElement> & {
	next: () => void
	close: () => void
}
