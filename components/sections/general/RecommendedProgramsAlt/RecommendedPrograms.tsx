import stls from './RecommendedPrograms.module.sass'
import cn from 'classnames'
import { RecommendedProgramsProps } from './types'

import { useRef } from 'react'
import Slider from 'react-slick'
import { IconNext } from 'modules/program-page/widgets/components'
import { Wrapper } from '@/components/layout'

import useAt from '@/hooks/useAt'
import { ProgramCard } from '@/components/cards/ProgramCard/ProgramCard'
import Link from 'next/link'
import routesFront from '@/config/routesFront'

export const RecommendedProgramsAlt = ({
	className,
	programs,
	...rest
}: RecommendedProgramsProps) => {
	const at = useAt()

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

	const title = at.programs
		? 'Вам может понравиться'
		: 'Рекомендуемые программы'

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.titleWrapper}>
					<h2 className={stls.title}>{title}</h2>
					<div className={cn(stls.carousel__navigation, stls.top)}>
						<button className={stls.prev} onClick={previousBtn}>
							<IconNext className={stls.svg} />
						</button>
						<button className={stls.next} onClick={nextBtn}>
							<IconNext className={stls.svg} />
						</button>
					</div>
				</div>

				<Slider ref={sliderRefRecommended} {...settings}>
					{programs.map((program, idx) => (
						<div
							className={cn(stls.carousel__post, stls.post)}
							key={`Carousel_post--${idx}`}
						>
							<Link
								href={`/programs/${program?.category.type}/${program?.studyFormat}/${program?.slug}`}
							>
								<ProgramCard program={program} variant='dark' idx={idx} />
							</Link>
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
			</Wrapper>
		</section>
	)
}
