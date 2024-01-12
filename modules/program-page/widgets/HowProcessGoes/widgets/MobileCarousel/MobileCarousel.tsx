import stls from './MobileCarousel.module.sass'
import cn from 'classnames'
import { MobileCarouselProps } from './types'

import { Wrapper } from '@/components/layout'

import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import { GetHowProcessGoesData } from '../../fractals/GetHowProcessGoesData'
import { IconCheck, IconNext } from 'modules/program-page/widgets/components'
import { IconCheckCircle } from '@/components/icons'

export const MobileCarousel = ({ className, ...rest }: MobileCarouselProps) => {
	const sliderRef = useRef<Slider>(null)
	const slidesRef = useRef(null)
	const navigationWrapperRef = useRef<HTMLDivElement>(null)
	const slidesData = GetHowProcessGoesData()

	const [nav1, setNav1] = useState(null)
	const [nav2, setNav2] = useState(null)

	useEffect(() => {
		setNav1(slider1)
		setNav2(slider2)
	}, [])

	let slider1 = null
	let slider2 = null

	const settingsSlider = {
		dots: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		// autoplay: true,
		autoplaySpeed: 4000,
		vertical: false,
		arrows: false,
		infinite: true,
		className: cn(stls.carousel)
	}

	const settingsNavigation = {
		dots: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		autoplaySpeed: 4000,
		vertical: false,
		arrows: false,
		infinite: true,
		className: cn(stls.navigation)
	}

	const nextBtn = () => {
		console.log('click next')

		slider1.current?.slickNext()
	}

	const previousBtn = () => {
		console.log('click prev')
		slider1.current?.slickPrev()
	}

	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<div ref={slidesRef} className={stls.slides}>
					<div className={stls.navigationWrapper} ref={navigationWrapperRef}>
						<Slider
							asNavFor={nav1}
							ref={slider => (slider2 = slider)}
							{...settingsNavigation}
						>
							{slidesData.map((slide, idx) => (
								<div
									className={cn(stls.navigationCarousel__slide, stls.slide)}
									key={`navigation_carousel_post--${idx}`}
								>
									<div className={stls.navigationCarousel__dot}>
										<IconCheck />
										<p className={stls.navigationCarousel__desc}>
											{slide.title}
										</p>
									</div>
									<div
										className={stls.navigationCarousel__line}
										style={{
											backgroundImage:
												'linear-gradient(90deg, #DEE2E5 0% 10%, #FF3535 30% 50%, #DEE2E5 50%)'
										}}
									/>
								</div>
							))}
						</Slider>
					</div>
					<Slider
						asNavFor={nav2}
						ref={slider => (slider1 = slider)}
						{...settingsSlider}
					>
						{slidesData.map((slide, idx) => (
							<div
								className={cn(stls.carousel__slide, stls.slide)}
								key={`Carousel_post--${idx}`}
							>
								<div className={stls.slide__content}>
									<h3 className={stls.slide__title}>{slide.title}</h3>
									<p className={stls.slide__desc}>{slide.description}</p>
								</div>
							</div>
						))}
					</Slider>

					{/* <div className={stls.carousel__navigation}>
						<button className={stls.prev} onClick={previousBtn}>
							<IconNext className={stls.svg} />
						</button>
						<button className={stls.next} onClick={nextBtn}>
							<IconNext className={stls.svg} />
						</button>
					</div> */}
				</div>
			</Wrapper>
		</section>
	)
}
