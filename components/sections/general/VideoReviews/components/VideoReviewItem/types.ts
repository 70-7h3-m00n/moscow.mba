import { HTMLAttributes } from 'react'
import { youtubeReviews } from '../../constants'

export type VideoReviewItemProps = HTMLAttributes<HTMLElement> & {
	darkBackground?: boolean
	review: (typeof youtubeReviews)[number]
}
