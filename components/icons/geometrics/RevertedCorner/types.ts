import { TypeColor } from '@/types/index'
import { SVGProps } from 'react'

export type RevertedCornerProps = SVGProps<SVGSVGElement> & {
	size: 's' | 'm' | 'l'
	bgColor?: TypeColor
}
