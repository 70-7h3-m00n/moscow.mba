import stls from './Experts.module.sass'
import cn from 'classnames'
import { ExpertsProps } from './types'

import { Wrapper } from '@/components/layout'
import Image from 'next/image'
import { useId, useRef, useState } from 'react'
import Slider from 'react-slick'
import { IconNext } from '../components'
import { log } from 'console'

const data = [
	{
		name: 'Анна Адреева',
		desc: 'Креативный директор DADA Agency, нейрохудожник и автор канала Ai molodca',
		image: '/assets/images/program/experts-1.png',
		list: [
			'Практикующий экономист в ВТБ',
			'Работает с крупнейшими международными компаниями в области финансового консалтинга, аудита, банковского дела',
			'Дипломированный финансовый советник',
			'Аспирант Финансового университета при правительстве РФ'
		]
	},
	{
		name: 'Анна Семёнова',
		desc: 'Креативный директор DADA Agency, нейрохудожник и автор канала Ai molodca',
		image: '/assets/images/teacher_4.jpg',
		list: [
			'Практикующий экономист в ВТБ',
			'Работает с крупнейшими международными компаниями в области финансового консалтинга, аудита, банковского дела',
			'Дипломированный финансовый советник',
			'Аспирант Финансового университета при правительстве РФ'
		]
	},
	{
		name: 'Виктор Соколов',
		desc: 'Креативный директор DADA Agency, нейрохудожник и автор канала Ai molodca',
		image: '/assets/images/teacher_1.jpg',
		list: [
			'Практикующий экономист в ВТБ',
			'Работает с крупнейшими международными компаниями в области финансового консалтинга, аудита, банковского дела',
			'Дипломированный финансовый советник',
			'Аспирант Финансового университета при правительстве РФ'
		]
	},
	{
		name: 'Надежда Петровна',
		desc: 'Креативный директор DADA Agency, нейрохудожник и автор канала Ai molodca',
		image: '/assets/images/teacher_2.jpg',
		list: [
			'Практикующий экономист в ВТБ',
			'Работает с крупнейшими международными компаниями в области финансового консалтинга, аудита, банковского дела',
			'Дипломированный финансовый советник',
			'Аспирант Финансового университета при правительстве РФ'
		]
	}
]

export const ExpertsNew = ({ className }: ExpertsProps) => {
	const [activeIdx, setActiveIdx] = useState<number>(0)
	const id = useId()

	const sliderRefRecommended = useRef<Slider>(null)

	const nextBtn = () => {
		setActiveIdx(null)
		sliderRefRecommended.current?.slickNext()
	}

	const previousBtn = () => {
		setActiveIdx(null)
		sliderRefRecommended.current?.slickPrev()
	}

	const openDetailsHandler = idx => {
		setActiveIdx(idx)
	}

	const closeDetailsHandler = idx => {
		console.log('close')
		setActiveIdx(null)
	}

	const settings = {
		dots: false,
		speed: 500,
		// slidesToShow: 2,
		// slidesToScroll: 3,
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
		<section className={cn(className, stls.container)}>
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
					<Slider ref={sliderRefRecommended} {...settings}>
						{data.map((item, idx) => (
							<div
								className={cn(stls.carousel__item, stls.item)}
								key={`Carousel_post--${idx}`}
							>
								<div className={stls.card}>
									<Image
										className={stls.item__image}
										src={item.image}
										alt={item.name}
										width={318}
										height={416}
										onClick={() => openDetailsHandler(idx)}
									/>
									<div
										className={cn(stls.item__details, stls.details, {
											[stls.active]: idx === activeIdx
										})}
									>
										<Image
											className={stls.details__image}
											src={item.image}
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
									</div>
								</div>
								<p className={stls.item__name}>{item.name}</p>
								<p className={stls.item__desc}>{item.desc}</p>
							</div>
						))}
					</Slider>
				</div>
			</Wrapper>
		</section>
	)
}
