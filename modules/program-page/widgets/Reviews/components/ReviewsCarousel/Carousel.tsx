import stls from './Carousel.module.sass'
import cn from 'classnames'
import { CarouselProps } from './types'

import { useRef } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { posts } from './constants'
import { IconNext, IconStar } from 'modules/program-page/widgets/components'
import { ProgramCard } from 'modules/program-page/widgets/RecommendedPrograms/components/ProgramCard/ProgramCard'

export function Carousel({}: CarouselProps) {
	const sliderRef = useRef<Slider>(null)

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
		<>
			<Slider ref={sliderRef} {...settings}>
				{posts.map(({ name, stars, description, title, photo }) => (
					<div
						className={cn(stls.carousel__post, stls.post)}
						key={`Carousel_post--${name}`}
					>
						<p className={stls.post__title}>{title}</p>
						<div className={cn(stls.post__stars)}>
							{new Array(5).fill('_').map((_el, idx) => (
								<IconStar key={idx} filled={idx < stars} />
							))}
						</div>
						<p className={stls.post__name}>{name}</p>
						<p className={cn(stls.post__description)}>{description}</p>
						<div className={stls.cornerPhoto}>
							<Image src={photo} width={44} height={44} alt='Фото клиента' />
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
		</>
	)
}

export default Carousel
