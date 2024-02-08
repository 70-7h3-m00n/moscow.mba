import { HTMLAttributes } from 'react'

export type PopupGiftProps = HTMLAttributes<HTMLElement> & {
	programTitle: string
	studentName: string
	untilDate: string
	programType: string
}
