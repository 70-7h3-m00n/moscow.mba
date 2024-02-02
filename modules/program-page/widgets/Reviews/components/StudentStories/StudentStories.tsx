import stls from './StudentStories.module.sass'
import cn from 'classnames'
import { StudentStoriesProps } from './types'

import { IconNext, Tag } from 'modules/program-page/widgets/components'
import { VideoComponent } from '../VideoReviewsCarousel/VideoComponent/VideoComponent'
import { studentStoriesData } from './constants'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import truncate from 'truncate'

export const StudentStories = ({ className, ...rest }: StudentStoriesProps) => {
	const sliderRef = useRef<Slider>(null)
	const [selectedStory, setSelectedStory] = useState(0)

	const settings = {
		dots: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		// autoplay: true,
		autoplaySpeed: 4000,
		vertical: false,
		arrows: false,
		infinite: true,
		className: cn(stls.carousel)
	}

	const next = () => {
		if (selectedStory < studentStoriesData.length - 1)
			setSelectedStory(prev => prev + 1)
	}

	const previous = () => {
		if (selectedStory > 0) setSelectedStory(prev => prev - 1)
	}

	return (
		<div className={cn(stls.wrapper, stls.content)} {...rest}>
			<div className={stls.left}>
				<h3 className={stls.left__title}>Истории выпускников</h3>
				<div className={stls.left__wrapper}>
					<Tag className={stls.tag} variant='gamma'>
						{studentStoriesData[selectedStory].profession}
					</Tag>
					<div className={stls.text}>
						<p>
							{truncate(studentStoriesData[selectedStory].description[0], 70)}
						</p>
					</div>
					<button className={stls.readMore}>Читать подробнее</button>
					<ul className={stls.avatarList}>
						{studentStoriesData.map((item, idx) => (
							<li
								className={cn(stls.avatarList__item, {
									[stls.disabled]: idx !== selectedStory
								})}
								key={`Avatar-${idx}-${item.avatar}`}
								onClick={() => setSelectedStory(idx)}
							>
								<Image
									fill
									src={studentStoriesData[selectedStory].avatar}
									alt={studentStoriesData[selectedStory].name}
								/>
							</li>
						))}
					</ul>
					<div className={stls.mobileSlider}>
						<div className={stls.studentStories}>
							<VideoComponent
								className={stls.studentStories__video}
								item={studentStoriesData[selectedStory]}
								width={256}
								height={256}
							/>
						</div>
						<div className={stls.carousel__navigation}>
							<button className={stls.prev} onClick={previous}>
								<IconNext className={stls.svg} />
							</button>
							<button className={stls.next} onClick={next}>
								<IconNext className={stls.svg} />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={stls.right}>
				<VideoComponent item={studentStoriesData[selectedStory]} />
			</div>
		</div>
	)
}
