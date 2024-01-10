import stls from './Reviews.module.sass'
import cn from 'classnames'
import { ReviewsProps } from './types'

import { Wrapper } from '@/components/layout'
import { Rating } from './components/Rating/Rating'
import Carousel from './components/ReviewsCarousel/Carousel'
import { VideoReviewsCarousel } from './components/VideoReviewsCarousel/VideoReviewsCarousel'
import { BtnBeta } from '@/components/btns'
import { StudentStories } from './components/StudentStories/StudentStories'
export const Reviews = ({ className, ...rest }: ReviewsProps) => {
	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>Отзывы</h2>
				<p className={stls.subtitle}>
					Нам важно, чтобы вы приняли взвешенное решение об обучении. Поэтому мы
					собрали для вас отзывы студентов и выпускников об обучении в Moscow
					Business Academy
				</p>
				<Rating className={stls.rating} />
				<Carousel className={stls.carousel} />
				<VideoReviewsCarousel className={stls.videoReviews} />
				<BtnBeta className={stls.moreReviewsBtn} variant='alpha'>
					Больше отзывов
				</BtnBeta>
				<StudentStories />
			</Wrapper>
		</section>
	)
}
