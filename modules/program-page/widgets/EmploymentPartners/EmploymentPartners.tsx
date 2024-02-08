import stls from './EmploymentPartners.module.sass'
import cn from 'classnames'
import { EmploymentPartnersProps } from './types'

import { Wrapper } from '@/components/layout'
import { partners, photoData } from './constants'
import Image from 'next/image'
import Slider from 'react-slick'
import { useState } from 'react'

export const EmploymentPartners = ({
	className,
	...rest
}: EmploymentPartnersProps) => {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0)

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
		// eslint-disable-next-line react/display-name
		appendDots: dots => (
			<div
				className={stls.dots}
				style={{
					position: 'absolute',
					bottom: '1rem',
					left: '1rem',
					right: '1rem',
					margin: '0 auto',
					zIndex: 100
				}}
			>
				<span className={cn(stls.dots__progress)}></span>
				<ul className={stls.dots__list}>{dots}</ul>
			</div>
		),
		// eslint-disable-next-line react/display-name
		customPaging: idx => (
			<button
				className={cn(stls.customDot, {
					[stls.active]: idx === activeSlideIndex
				})}
			></button>
		)
	}

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.left}>
					<h2 className={stls.title}>
						В эти компании мы трудоустроили своих студентов
					</h2>
					<ul className={stls.list}>
						{partners.map((partner, idx) => (
							<li className={stls.item} key={idx}>
								{partner.logo}
							</li>
						))}
					</ul>
				</div>

				<div className={stls.sliderWrapper}>
					<Slider {...settings}>
						{photoData.map((image, idx) => (
							<div
								className={cn(stls.carousel__post, stls.post)}
								key={`Carousel_post--${idx}`}
							>
								<Image
									className={stls.post__image}
									src={image.src}
									// width={660}
									// height={360}
									fill
									sizes='(max-width: 1020px) 100vw, 50vw'
									style={{ objectFit: 'cover' }}
									alt='Фото клиента'
								/>
							</div>
						))}
					</Slider>
				</div>
			</Wrapper>
		</section>
	)
}
