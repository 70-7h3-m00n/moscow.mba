import stls from './VideoReviewsCarousel.module.sass'
import cn from 'classnames'
import { VideoReviewsCarouselProps } from './types'

import { useContext, useRef } from 'react'
import Slider from 'react-slick'
import { IconNext } from 'modules/program-page/widgets/components'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { VideoComponent } from './VideoComponent/VideoComponent'
import { videoReviewsData } from './constants'

export const VideoReviewsCarousel = ({
	className
}: VideoReviewsCarouselProps) => {
	const sliderRef = useRef<Slider>(null)
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const next = () => {
		sliderRef.current?.slickNext()
	}

	const previous = () => {
		sliderRef.current?.slickPrev()
	}

	const settings = {
		dots: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveHeight: true,
		// autoplay: true,
		autoplaySpeed: 4000,
		vertical: false,
		arrows: false,
		infinite: false,
		className: cn(stls.carousel),
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 968,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			}
		]
	}

	return (
		<div className={cn(className, stls.content)}>
			<Slider ref={sliderRef} {...settings}>
				{videoReviewsData.map(item => (
					<div
						className={cn(stls.carousel__post, stls.post)}
						key={`Carousel_post--${item.name}`}
					>
						<VideoComponent className={stls.video} item={item} />
					</div>
				))}
			</Slider>
			<div className={stls.carousel__navigation}>
				<button className={stls.prev} onClick={previous}>
					<IconNext className={stls.svg} />
				</button>
				<button className={stls.next} onClick={next}>
					<IconNext className={stls.svg} />
				</button>
			</div>
		</div>
	)
}
