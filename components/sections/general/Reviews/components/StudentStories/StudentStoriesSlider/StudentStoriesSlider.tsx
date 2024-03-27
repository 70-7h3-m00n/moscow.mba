import stls from './StudentStoriesSlider.module.sass'
import cn from 'classnames'
import { StudentStoriesSliderProps } from './types'

import truncate from 'truncate'
import { useRef } from 'react'
import Slider from 'react-slick'
import { studentStoriesData } from '../constants'
import { PopupStudentStories } from '@/components/popups/PopupStudentStories/PopupStudentStories'
import { StudentStory } from '../StudentStory/StudentStory'
import { IconNext, Tag } from 'modules/program-page/widgets/components'

export const StudentStoriesSlider = ({}: StudentStoriesSliderProps) => {
	const sliderRef = useRef<Slider>(null)

	const next = () => {
		sliderRef.current?.slickNext()
	}

	const previous = () => {
		sliderRef.current?.slickPrev()
	}

	const settings = {
		dots: false,
		speed: 500,
		slidesToScroll: 1,
		adaptiveHeight: true,
		// autoplay: true,
		autoplaySpeed: 4000,
		swipeToSlide: false,
		vertical: false,
		arrows: false,
		infinite: true,
		variableWidth: true,
		className: cn(stls.carousel)
	}

	return (
		<>
			<div className={stls.container}>
				<Slider ref={sliderRef} {...settings}>
					{studentStoriesData.map(item => (
						<div
							className={cn(stls.carousel__post, stls.post)}
							key={`Carousel_post--${item.name}`}
						>
							<div>
								<Tag className={stls.tag} variant='gamma'>
									{item.profession}
								</Tag>
							</div>
							<p className={stls.text}>{truncate(item.description[0], 70)}</p>
							<PopupStudentStories storyData={item} />
							<StudentStory
								className={stls.studentStoryContent}
								storyData={item}
							/>
						</div>
					))}
				</Slider>
			</div>
			<div className={stls.carousel__navigation}>
				<button className={stls.prev} onClick={previous}>
					<IconNext
						className={stls.svg}
						// disabled={selectedStory === 0 }
					/>
				</button>
				<button className={stls.next} onClick={next}>
					<IconNext
						className={stls.svg}
						// disabled={selectedStory === studentStoriesData.length - 1}
					/>
				</button>
			</div>
		</>
	)
}
