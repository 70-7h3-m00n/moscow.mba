import { HTMLAttributes } from 'react'

export type VideoComponentProps = HTMLAttributes<HTMLVideoElement> & {
	item: { name: string; src: string; preview: string }
	width?: number
	height?: number
}
