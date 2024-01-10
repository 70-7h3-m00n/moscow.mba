import stls from './FutureJob.module.sass'
import cn from 'classnames'
import { FutureJobProps } from './types'

import { Wrapper } from '@/components/layout'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { IconUmbrella } from './assets/IconUmbrella'
import { CornerPhoto } from '../components/CornerPhoto/CornerPhoto'
import { IconNext } from '../components'

const data = [
	{
		title: 'Возможность построить карьеру в топовой компании',
		description:
			'Сегодня любая компания - потенциальная жертва кибератак. Чем дороже компания, тем выше риски. А значит, тем больше денег готовы тратить руководители на специалистов по кибербезопасности',
		src: '/assets/images/program/employment-partners.jpg'
	},
	{
		title: 'Возможность построить карьеру в топовой компании',
		description:
			'Сегодня любая компания - потенциальная жертва кибератак. Чем дороже компания, тем выше риски. А значит, тем больше денег готовы тратить руководители на специалистов по кибербезопасности',
		src: '/assets/images/program/employment-partners.jpg'
	}
]

export const FutureJob = ({ className, ...rest }: FutureJobProps) => {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0)

	const settings = {
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		autoplay: false,
		autoplaySpeed: 4000,
		vertical: false,
		arrows: false,
		infinite: false,
		className: cn(stls.carousel),
		beforeChange(oldIndex, newIndex) {
			setActiveSlideIndex(newIndex)
		}
	}

	const sliderRefExperts = useRef<Slider>(null)

	const nextBtn = () => {
		sliderRefExperts.current?.slickNext()
	}

	const previousBtn = () => {
		sliderRefExperts.current?.slickPrev()
	}

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.left}>
					<h2 className={stls.title}>Кем именно вы будете работать</h2>
					<IconUmbrella />
				</div>
				<div className={stls.sliderWrapper}>
					<Slider ref={sliderRefExperts} {...settings}>
						{data.map((image, idx) => (
							<div
								className={cn(stls.carousel__post, stls.post)}
								key={`Carousel_post--${idx}`}
							>
								<CornerPhoto
									className={stls.card}
									src='/assets/images/program/employment-partners.jpg'
								>
									<h3 className={stls.card__title}>
										Возможность построить карьеру в топовой компании
									</h3>
									<p className={stls.card__description}>
										Сегодня любая компания - потенциальная жертва кибератак. Чем
										дороже компания, тем выше риски. А значит, тем больше денег
										готовы тратить руководители на специалистов по
										кибербезопасности
									</p>
								</CornerPhoto>
							</div>
						))}
					</Slider>
					<div className={stls.carousel__navigation}>
						<button className={stls.prev} onClick={previousBtn}>
							<IconNext
								className={cn(stls.svg, {
									[stls.disabled]: 0 === activeSlideIndex
								})}
							/>
						</button>
						<button className={stls.next} onClick={nextBtn}>
							<IconNext
								className={cn(stls.svg, {
									[stls.disabled]: data.length - 1 === activeSlideIndex
								})}
							/>
						</button>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
