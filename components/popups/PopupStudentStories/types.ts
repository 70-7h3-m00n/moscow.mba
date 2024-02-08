import { HTMLAttributes } from 'react'

export type PopupStudentStoriesProps = HTMLAttributes<HTMLElement> & {
	storyData: {
		name: string
		description: string[]
		preview: string
		profession: string
	}
}
