import { HTMLAttributes } from 'react'

export type FutureJobItemProps = HTMLAttributes<HTMLDivElement> & {
	idx: number
	item: { id: number; title: string; string: string }
}
