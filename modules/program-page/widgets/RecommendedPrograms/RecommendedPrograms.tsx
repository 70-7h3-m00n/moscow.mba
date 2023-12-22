import stls from './RecommendedPrograms.module.sass'
import cn from 'classnames'
import { RecommendedProgramsProps } from './types'

import { useRef } from 'react'
import Slider from 'react-slick'
import { IconNext } from 'modules/program-page/widgets/components'

import { Wrapper } from '@/components/layout'
import { ProgramCard } from './components/ProgramCard/ProgramCard'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export const RecommendedProgramsNew = ({
	className
}: RecommendedProgramsProps) => {
	const sliderRefRecommended = useRef<Slider>(null)

	const nextBtn = () => {
		sliderRefRecommended.current?.slickNext()
	}

	const previousBtn = () => {
		sliderRefRecommended.current?.slickPrev()
	}

	const settings = {
		dots: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		vertical: false,
		arrows: false,
		infinite: true,
		className: cn(stls.carousel)
	}

	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.titleWrapper}>
					<h2>Рекомендуемые программы</h2>
					<div className={stls.carousel__navigation}>
						<button className={stls.prev} onClick={previousBtn}>
							<IconNext className={stls.svg} />
						</button>
						<button className={stls.next} onClick={nextBtn}>
							<IconNext className={stls.svg} />
						</button>
					</div>
				</div>

				<Slider ref={sliderRefRecommended} {...settings}>
					{data.map((program, idx) => (
						<div
							className={cn(stls.carousel__post, stls.post)}
							key={`Carousel_post--${idx}`}
						>
							<ProgramCard key={idx} />
						</div>
					))}
				</Slider>
			</Wrapper>
		</section>
	)
}
