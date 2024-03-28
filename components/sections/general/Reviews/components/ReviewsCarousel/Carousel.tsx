import stls from './Carousel.module.sass'
import cn from 'classnames'
import { CarouselProps } from './types'

import { useRef } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { IconNext, IconStar } from 'modules/program-page/widgets/components'
import { colors, defaultReviews } from './constants'
import Popup from 'reactjs-popup'
import { ReviewCard } from '../ReviewCard/ReviewCard'
import truncate from 'truncate'
import { CornerPhoto } from 'modules/program-page/widgets/components/CornerPhoto/CornerPhoto'
import readMore from './read-more.svg'

export function Carousel({ className, program }: CarouselProps) {
	const sliderRef = useRef<Slider>(null)
	const reviews = program?.reviews

	const getRandomReviews = (reviews, count) => {
		const shuffledReviews = reviews.sort(() => 0.5 - Math.random())
		return shuffledReviews.slice(0, count)
	}

	const reviewsInDatabase = reviews && reviews?.length > 0
	const data: typeof reviews = reviewsInDatabase
		? reviews
		: getRandomReviews(defaultReviews, 5)

	const next = () => {
		sliderRef.current?.slickNext()
	}

	const previous = () => {
		sliderRef.current?.slickPrev()
	}

	const getRandomColor = (): string =>
		colors[Math.floor(Math.random() * colors.length)]

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

	return (
		<div className={cn(className, stls.content)}>
			<Slider ref={sliderRef} {...settings}>
				{data?.map(item => (
					// <Review
					// 	className={cn(stls.carousel__post, stls.post)}
					// 	item={item}
					// 	key={item.id}
					// />
					<div
						className={cn(stls.carousel__post, stls.post)}
						key={`Carousel_post--${item?.studentName}`}
					>
						<p className={stls.post__title}>{item?.title || program?.title}</p>
						<div className={cn(stls.post__stars)}>
							{new Array(5).fill('_').map((_el, idx) => (
								<IconStar key={idx} filled={idx < item?.rating} />
							))}
						</div>
						<p className={stls.post__name}>{item?.studentName}</p>
						{item?.studentReview.length > 250 ? (
							<>
								<p className={cn(stls.post__description)}>
									{truncate(item?.studentReview, 251)}
								</p>
								<Popup
									trigger={
										<button className={stls.post__openLink}>
											<Image src={readMore} width={121} height={17} alt='' />
										</button>
									}
									modal
									lockScroll
									nested
									closeOnDocumentClick
								>
									{/* @ts-expect-error  */}

									{close => (
										<ReviewCard
											close={close}
											item={item}
											title={item?.title || program?.title}
											avatar={
												item?.studentPhoto ? (
													<Image
														className={stls.cornerPhoto__image}
														src={item?.studentPhoto}
														width={44}
														height={44}
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
												)
											}
										/>
									)}
								</Popup>
							</>
						) : (
							<>
								<p className={cn(stls.post__description)}>
									{item?.studentReview}
								</p>
							</>
						)}
						<CornerPhoto
							className={stls.cornerPhoto}
							variant='top-right'
							size='s'
							src={item?.studentPhoto}
							bgColor='#E7EAED'
							name={item?.studentName}
						/>
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