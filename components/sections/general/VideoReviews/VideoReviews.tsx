import stls from './VideoReviews.module.sass'
import cn from 'classnames'
import { VideoReviewsProps } from './types'

import { Wrapper } from '@/components/layout'
import { youtubeReviews } from './constants'
import { VideoReviewItem } from './components/VideoReviewItem/VideoReviewItem'

export default function VideoReviews({ darkBackground }: VideoReviewsProps) {
	return (
		<section
			className={cn(stls.container, {
				[stls.darkBackground]: darkBackground
			})}
		>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.titleContainer}>
					<h2
						className={cn(stls.title, {
							[stls.darkBackground]: darkBackground
						})}
					>
						{'Видеоотзывы'}
					</h2>
				</div>
				<div className={stls.reviewsList}>
					{youtubeReviews.map((review, idx) => (
						<VideoReviewItem
							key={idx}
							review={review}
							darkBackground={darkBackground}
						/>
					))}
				</div>
			</Wrapper>
		</section>
	)
}
