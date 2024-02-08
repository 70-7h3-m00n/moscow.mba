import { HTMLAttributes } from 'react'

export type ReviewProps = HTMLAttributes<HTMLDivElement> & {
	item: {
		id: number
		rating: number
		studentName: string
		studentReview: string
		studentPhoto: string
		title?: string
	}
}
