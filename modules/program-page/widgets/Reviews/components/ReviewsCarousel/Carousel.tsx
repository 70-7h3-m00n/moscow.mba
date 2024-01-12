import stls from './Carousel.module.sass'
import cn from 'classnames'
import { CarouselProps } from './types'

import { useContext, useEffect, useRef, useState } from 'react'
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
		autoplay: true,
		autoplaySpeed: 4000,
		vertical: false,
		arrows: false,
		infinite: true,
		className: cn(stls.carousel),
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			}
		]
	}

	const colors = [
		'#6E84F8',
		'#F88268',
		'#79C173',
		'#BB72C7',
		'#DD5B5B',
		'#E1BF44',
		'#7CCECE',
		'#D96797'
	]

	const getRandomColor = (): string =>
		colors[Math.floor(Math.random() * colors.length)]

	return (
		<div className={cn(className, stls.content)}>
			<Slider ref={sliderRef} {...settings}>
				{data?.map(item => (
					<div
						className={cn(stls.carousel__post, stls.post)}
						key={`Carousel_post--${item?.studentName}`}
					>
						<p className={stls.post__title}>{program?.title}</p>
						<div className={cn(stls.post__stars)}>
							{new Array(5).fill('_').map((_el, idx) => (
								<IconStar key={idx} filled={idx < item?.rating} />
							))}
						</div>
						<p className={stls.post__name}>{item?.studentName}</p>
						<p className={cn(stls.post__description)}>{item?.studentReview}</p>
						<div className={stls.cornerPhoto}>
							{item?.studentPhoto ? (
								<Image
									className={stls.cornerPhoto__image}
									src={item?.studentPhoto}
									fill
									style={{
										objectFit: 'cover'
									}}
									alt='Фото клиента'
								/>
							) : (
								<div
									className={stls.noAvatar}
									style={{ backgroundColor: `${getRandomColor()}` }}
								>
									{item?.studentName?.at(0)}
								</div>
							)}
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
