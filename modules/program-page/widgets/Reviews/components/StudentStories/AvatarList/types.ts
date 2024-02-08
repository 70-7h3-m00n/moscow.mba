import { Dispatch, HTMLAttributes, SetStateAction } from 'react'

export type AvatarListProps = HTMLAttributes<HTMLUListElement> & {
	selectedStory: number
	setSelectedStory: Dispatch<SetStateAction<number>>
}
