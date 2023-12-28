import stls from './Experts.module.sass'
import cn from 'classnames'
import { ExpertsProps } from './types'

import { Wrapper } from '@/components/layout'
import Image from 'next/image'
import { useContext, useId, useRef, useState } from 'react'
import Slider from 'react-slick'
import { IconNext } from '../components'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'

export const ExpertsNew = ({ className, ...rest }: ExpertsProps) => {
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const sliderRefExperts = useRef<Slider>(null)

	const nextBtn = () => {
		sliderRefExperts.current?.slickNext()
	}

	const previousBtn = () => {
		sliderRefExperts.current?.slickPrev()
	}

	const settings = {
		dots: false,
		speed: 500,
		// slidesToShow: 2,
		slidesToScroll: 3,
		adaptiveHeight: true,
		autoplay: false,
		autoplaySpeed: 4000,
		swipeToSlide: false,
		vertical: false,
		arrows: false,
		infinite: true,
		variableWidth: true,
		className: cn(stls.carousel)
	}

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.titleWrapper}>
					<h2 className={stls.title}>
						Российские и зарубежные эксперты программы
					</h2>
					<div className={stls.carousel__navigation}>
						<button className={stls.prev} onClick={previousBtn}>
							<IconNext className={stls.svg} />
						</button>
						<button className={stls.next} onClick={nextBtn}>
							<IconNext className={stls.svg} />
						</button>
					</div>
				</div>
				<div className={stls.slider}>
					<Slider ref={sliderRefExperts} {...settings}>
						{program?.teachers.map(item => (
							<div
								className={cn(stls.carousel__item, stls.item)}
								key={`Expert--${item.name}`}
							>
								<div className={stls.card}>
									<Image
										className={stls.item__image}
										src={item.portrait.url}
										alt={item.name}
										width={318}
										height={416}
										style={{
											objectFit: 'cover'
										}}
									/>
									{/* <div
										className={cn(stls.item__details, stls.details, {
											[stls.active]: idx === activeIdx
										})}
									>
										<Image
											className={stls.details__image}
											src={item.portrait.url}
											alt={item.name}
											width={92}
											height={120}
										/>
										<div className={stls.details__text}>
											<div className={stls.details__nameWrapper}>
												<p className={stls.details__name}>{item.name}</p>
												<button
													className={stls.details__close}
													onClick={closeDetailsHandler}
												>
													<IconNext />
												</button>
											</div>
											<p className={stls.details__desc}>{item.desc}</p>
											<ul className={stls.details__list}>
												{item.list.map(item => (
													<li key={`item-${item}`}>{item}</li>
												))}
											</ul>
										</div>
									</div> */}
								</div>
								<p className={stls.item__name}>{item.name}</p>
								<p className={stls.item__desc}>{item.description}</p>
							</div>
						))}
					</Slider>
				</div>
			</Wrapper>
		</section>
	)
}
