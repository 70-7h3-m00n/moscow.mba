import { TypeColor } from '@/types/index'
import { HTMLAttributes, ReactNode } from 'react'

export type InfoTooltipProps = HTMLAttributes<HTMLDivElement> & {
	children: ReactNode
	color?: TypeColor
	textColor?: TypeColor
}
