import stls from './Reviews.module.sass'
import cn from 'classnames'
import { ReviewsProps } from './types'

import { Wrapper } from '@/components/layout'
import { Rating } from './components/Rating/Rating'
import Carousel from './components/ReviewsCarousel/Carousel'
import { VideoReviewsCarousel } from './components/VideoReviewsCarousel/VideoReviewsCarousel'
import { BtnBeta } from '@/components/btns'
import { StudentStories } from './components/StudentStories/StudentStories'
import useAt from '@/hooks/useAt'
import Link from 'next/link'

export const ReviewsAlt = ({
	className,
	program = null,
	...rest
}: ReviewsProps) => {
	const at = useAt()

	const darkBg = at.programs

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content, darkBg && stls.dark]}>
				<h2 className={stls.title}>Отзывы</h2>
				<p className={stls.subtitle}>
					Нам важно, чтобы вы приняли взвешенное решение об обучении. Поэтому мы
					собрали для вас отзывы студентов и выпускников об обучении в Moscow
					Business Academy
				</p>
				{!at.programs && (
					<>
						<Rating className={stls.rating} />
						<Carousel className={stls.carousel} program={program} />
					</>
				)}
				{/* <VideoReviewsCarousel className={stls.videoReviews} /> */}
				<Link href={'/reviews'} className={stls.moreReviewsBtn}>
					Больше отзывов
				</Link>
				{(at.course || at.profession) && (
					<StudentStories className={stls.studentStories} />
				)}
			</Wrapper>
		</section>
	)
}