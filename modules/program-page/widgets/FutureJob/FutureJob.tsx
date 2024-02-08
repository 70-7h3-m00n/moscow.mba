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
import { data } from './constants'
import { FutureJobItem } from './FutureJobItem/FutureJobItem'

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
		<>
			{program?.futureJob?.job && program?.futureJob?.job?.length > 0 && (
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
										<FutureJobItem idx={idx} item={item} />
									</div>
								))}
							</Slider>
							<div className={stls.carousel__navigation}>
								<button className={stls.prev} onClick={previousBtn}>
									<IconArrowAlt
										className={cn(stls.svg)}
										status={activeSlideIndex === 0 ? 'disabled' : 'default'}
										variant='beta'
										direction='left'
									/>
								</button>
								<button className={stls.next} onClick={nextBtn}>
									<IconArrowAlt
										className={cn(stls.svg)}
										status={
											data.length - 1 === activeSlideIndex
												? 'disabled'
												: 'default'
										}
										variant='beta'
									/>
								</button>
							</div>
						</div>
						<div className={cn(stls.mobileList, { [stls.hide]: !noCarusel })}>
							{program?.futureJob?.job.map((item, idx) => (
								<FutureJobItem key={idx} idx={idx} item={item} />
							))}
						</div>
					</Wrapper>
				</section>
			)}
		</>
	)
}
