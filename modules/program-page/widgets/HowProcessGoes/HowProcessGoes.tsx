import stls from './HowProcessGoes.module.sass'
import cn from 'classnames'
import { HowProcessGoesProps } from './types'

import { Wrapper } from '@/components/layout'
import { IconCheck } from '../components/icons/IconCheck/IconCheck'
import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import { howProcessGoesData } from './constants'

export const HowProcessGoesNew = ({ className }: HowProcessGoesProps) => {
	const dotsRef = useRef(null)
	const slidesRef = useRef(null)

	useEffect(() => {
		slidesRef.current.prepend(dotsRef.current)
	}, [])

	const [activeSlideIndex, setActiveSlideIndex] = useState(0)
	const percent = (100 / 5) * activeSlideIndex

	const settings = {
		dots: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		vertical: false,
		arrows: false,
		infinite: true,
		className: cn(stls.carousel),
		beforeChange(oldIndex, newIndex) {
			setActiveSlideIndex(newIndex)
		},
		appendDots: dots => (
			<div
				ref={dotsRef}
				className={stls.dots}
				style={{
					marginTop: '1rem',
					marginBottom: '1rem',
					padding: '3rem',
					paddingBottom: '6rem',
					borderRadius: '1.5rem',
					backgroundColor: '#fff',
					position: 'relative'
				}}
			>
				<span
					className={cn(stls.dots__progress)}
					style={{
						backgroundSize: `${percent}% 100%`
					}}
				></span>
				<ul className={stls.dots__list}>{dots}</ul>
			</div>
		),
		customPaging: idx => (
			<div className={stls.checkWrapper}>
				<IconCheck
					className={stls.iconCheck}
					color={activeSlideIndex >= idx ? '#FF3535' : '#DEE2E5'}
				/>
				<p
					className={cn(stls.checkDescription, {
						[stls.active]: activeSlideIndex === idx
					})}
				>
					{howProcessGoesData[idx].title}
				</p>
			</div>
		)
	}

	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<h2>Как проходит обучение</h2>
				<div ref={slidesRef} className={stls.slides}>
					<Slider {...settings}>
						{howProcessGoesData.map((program, idx) => (
							<div
								className={cn(stls.carousel__slide, stls.slide)}
								key={`Carousel_post--${idx}`}
							>
								<div className={stls.slide__content}>
									<h3 className={stls.slide__title}>Выполняйте задания</h3>
									<p className={stls.slide__desc}>
										Вы сможете отточить полученные навыки на групповых проектах
										и практических заданиях, приближенных к формату реальных
										задач. Мы ежегодно обновляем учебные планы, чтобы вы
										получали навыки, которые нужны работодателям
									</p>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</Wrapper>
		</section>
	)
}
