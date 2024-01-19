import stls from './FutureJob.module.sass'
import cn from 'classnames'
import { FutureJobProps } from './types'

import { Wrapper } from '@/components/layout'
import { useContext, useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import { IconUmbrella } from './assets/IconUmbrella'
import { CornerPhoto } from '../components/CornerPhoto/CornerPhoto'
import { IconNext } from '../components'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import useWindowWidth from '@/hooks/useWindowWidth'
import { IconArrowAlt } from '../components/icons/IconArrowAlt/IconArrowAlt'

const data = [
	{
		title: 'Возможность построить карьеру в топовой компании',
		description:
			'Сегодня любая компания - потенциальная жертва кибератак. Чем дороже компания, тем выше риски. А значит, тем больше денег готовы тратить руководители на специалистов по кибербезопасности',
		src: '/assets/images/program/future-job-photo.png'
	},
	{
		title: 'Возможность построить карьеру в топовой компании',
		description:
			'Сегодня любая компания - потенциальная жертва кибератак. Чем дороже компания, тем выше риски. А значит, тем больше денег готовы тратить руководители на специалистов по кибербезопасности',
		src: '/assets/images/program/future-job-photo-2.png'
	}
]

export const FutureJob = ({ className, ...rest }: FutureJobProps) => {
	const { state } = useContext(ProgramPageContext)
	const { program } = state
	const jobsList = program?.futureJob?.job
	const [activeSlideIndex, setActiveSlideIndex] = useState(0)
	const widthWindow = useWindowWidth()
	const [isMobile, setIsMobile] = useState(false)

	const noCarusel = isMobile || jobsList?.length === 1

	useEffect(() => {
		if (widthWindow <= 767) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}, [widthWindow])

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
		<section
			className={cn(className, stls.container, {
				[stls.noCarousel]: noCarusel
			})}
			{...rest}
		>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.left}>
					<h2 className={stls.title}>Кем именно вы будете работать</h2>
					<IconUmbrella className={cn(stls.icon, stls.rotation)} />
				</div>
				<div className={cn(stls.sliderWrapper, { [stls.hide]: noCarusel })}>
					<Slider ref={sliderRefExperts} {...settings}>
						{jobsList?.map((item, idx) => (
							<div
								className={cn(stls.carousel__post, stls.post)}
								key={`Carousel_post--${idx}`}
							>
								<CornerPhoto className={stls.card} src={data[idx].src}>
									<h3 className={stls.card__title}>{item?.title}</h3>
									<p className={stls.card__description}>{item?.string}</p>
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
							<IconArrowAlt
								className={cn(stls.svg)}
								disabled={data.length - 1 === activeSlideIndex}
							/>
						</button>
					</div>
				</div>
				<div className={cn(stls.mobileList, { [stls.hide]: !noCarusel })}>
					{program?.futureJob?.job.map((item, idx) => (
						<div className={stls.post} key={`Carousel_post--${idx}`}>
							<CornerPhoto className={stls.card} src={data[idx].src}>
								<h3 className={stls.card__title}>{item?.title}</h3>
								<p className={stls.card__description}>{item?.string}</p>
							</CornerPhoto>
						</div>
					))}
				</div>
			</Wrapper>
		</section>
	)
}
