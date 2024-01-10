import { HTMLAttributes, ReactNode } from 'react'

export type CornerPhotoProps = HTMLAttributes<HTMLDivElement> & {
	src: string
	children: ReactNode
}
