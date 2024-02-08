import { HTMLAttributes } from 'react'

export type StudentStoryProps = HTMLAttributes<HTMLElement> & {
	storyData: { name: string; description: string[]; preview: string }
}
