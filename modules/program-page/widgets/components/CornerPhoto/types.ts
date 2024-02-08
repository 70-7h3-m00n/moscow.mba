import { TypeColor } from '@/types/index'
import { HTMLAttributes, ReactNode } from 'react'

export type CornerPhotoProps = HTMLAttributes<HTMLDivElement> & {
	src: string
	variant?: 'top-left' | 'top-right'
	size: 's' | 'm' | 'l'
	bgColor?: TypeColor
}
