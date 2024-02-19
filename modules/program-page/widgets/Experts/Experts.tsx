import stls from './Experts.module.sass'
import cn from 'classnames'
import { ExpertsProps } from './types'

import { Wrapper } from '@/components/layout'
import { useContext, useRef } from 'react'
import Slider from 'react-slick'
import { IconNext } from '../components'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import useDefaultTeachers from '@/hooks/useDefaultTeachers'
import { ExpertsCard } from './ExpertsCard/ExpertsCard'

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
				slidesToScroll: 1
			}
		}
	]
}

export const ExpertsNew = ({ className, program, ...rest }: ExpertsProps) => {
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
						{teachers?.map(teacher => (
							<ExpertsCard
								expert={teacher}
								key={teacher.name}
								mainExpert={teacher?.lead}
							/>
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
