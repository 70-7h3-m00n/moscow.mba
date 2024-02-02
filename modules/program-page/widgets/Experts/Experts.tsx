import stls from './Experts.module.sass'
import cn from 'classnames'
import { ExpertsProps } from './types'

import { Wrapper } from '@/components/layout'
import Image from 'next/image'
import { useContext, useRef } from 'react'
import Slider from 'react-slick'
import { IconNext, Tag } from '../components'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { BtnBeta } from '@/components/btns'
import Popup from 'reactjs-popup'
import { PopupTeacherNew } from '@/components/popups'
import useDefaultTeachers from '@/hooks/useDefaultTeachers'

export const ExpertsNew = ({ className, ...rest }: ExpertsProps) => {
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const defaultTeachers = useDefaultTeachers()
	const teachers =
		program?.teachers && program?.teachers?.length > 0
			? program?.teachers
			: defaultTeachers

	const sliderRefExperts = useRef<Slider>(null)

	const nextBtn = () => {
		sliderRefExperts.current?.slickNext()
	}

	const previousBtn = () => {
		sliderRefExperts.current?.slickPrev()
	}

	const mainExpert = false

	const settings = {
		dots: false,
		speed: 500,
		slidesToScroll: 2,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		swipeToSlide: false,
		vertical: false,
		arrows: false,
		infinite: true,
		variableWidth: true,
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
						{teachers?.map(item => (
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
									{mainExpert && (
										<Tag className={stls.cardTag} variant='eta'>
											Ведущий автор программы
										</Tag>
									)}
									<Popup
										trigger={
											<BtnBeta
												className={stls.cardBtn}
												variant='alpha'
												size='s'
											>
												Подробнее
											</BtnBeta>
										}
										modal
										lockScroll
										nested
										closeOnDocumentClick
									>
										{/* @ts-expect-error  */}

										{close => <PopupTeacherNew close={close} teacher={item} />}
									</Popup>
								</div>
								<p className={stls.item__name}>{item.name}</p>
								<p className={stls.item__desc}>{item.description}</p>
							</div>
						))}
					</Slider>
					<div className={cn(stls.carousel__navigation, stls.bottom)}>
						<button className={stls.prev} onClick={previousBtn}>
							<IconNext className={stls.svg} />
						</button>
						<button className={stls.next} onClick={nextBtn}>
							<IconNext className={stls.svg} />
						</button>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
