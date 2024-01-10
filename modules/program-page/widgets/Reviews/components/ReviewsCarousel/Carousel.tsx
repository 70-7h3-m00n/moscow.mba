import stls from './Carousel.module.sass'
import cn from 'classnames'
import { CarouselProps } from './types'

import { useContext, useRef } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { IconNext, IconStar } from 'modules/program-page/widgets/components'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { posts } from './constants'

export function Carousel({ className }: CarouselProps) {
	const sliderRef = useRef<Slider>(null)
	const { state } = useContext(ProgramPageContext)
	const { program } = state
	const reviews = program?.reviews

	const reviewsInDatabase = reviews && reviews?.length > 0
	const data: typeof reviews = reviewsInDatabase ? reviews : posts

	const next = () => {
		sliderRef.current?.slickNext()
	}

	const previous = () => {
		sliderRef.current?.slickPrev()
	}

	const settings = {
		dots: false,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		adaptiveHeight: true,
		// autoplay: true,
		autoplaySpeed: 4000,
		vertical: false,
		arrows: false,
		infinite: true,
		className: cn(stls.carousel)
		// responsive: [
		//    {
		//       breakpoint: 1280,
		//       settings: {
		//          slidesToShow: 2
		//       }
		//    },
		//    {
		//       breakpoint: 480,
		//       settings: {
		//          slidesToShow: 1
		//       }
		//    }
		// ]
	}

	return (
		<div className={cn(className, stls.content)}>
			<Slider ref={sliderRef} {...settings}>
				{data?.map(({ studentName, studentPhoto, studentReview, rating }) => (
					<div
						className={cn(stls.carousel__post, stls.post)}
						key={`Carousel_post--${studentName}`}
					>
						<p className={stls.post__title}>{program?.title}</p>
						<div className={cn(stls.post__stars)}>
							{new Array(5).fill('_').map((_el, idx) => (
								<IconStar key={idx} filled={idx < rating} />
							))}
						</div>
						<p className={stls.post__name}>{studentName}</p>
						<p className={cn(stls.post__description)}>{studentReview}</p>
						<div className={stls.cornerPhoto}>
							<Image
								className={stls.cornerPhoto__image}
								src={studentPhoto}
								fill
								style={{
									objectFit: 'cover'
								}}
								alt='Фото клиента'
							/>
						</div>
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

export default Carousel
