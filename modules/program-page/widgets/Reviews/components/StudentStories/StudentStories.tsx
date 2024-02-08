import stls from './StudentStories.module.sass'
import cn from 'classnames'
import { StudentStoriesProps } from './types'

import { IconNext, Tag } from 'modules/program-page/widgets/components'
import { studentStoriesData } from './constants'
import { useState } from 'react'
import truncate from 'truncate'
import { PopupStudentStories } from '@/components/popups/PopupStudentStories/PopupStudentStories'
import { StudentStory } from './StudentStory/StudentStory'
import { AvatarList } from './AvatarList/AvatarList'

export const StudentStories = ({ className, ...rest }: StudentStoriesProps) => {
	const [selectedStory, setSelectedStory] = useState(0)

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
					<p className={stls.text}>
						{truncate(studentStoriesData[selectedStory].description[0], 70)}
					</p>
					<PopupStudentStories storyData={studentStoriesData[selectedStory]} />
					<AvatarList
						selectedStory={selectedStory}
						setSelectedStory={setSelectedStory}
					/>
					<div className={stls.mobileSlider}>
						<StudentStory storyData={studentStoriesData[selectedStory]} />
						<div className={stls.carousel__navigation}>
							<button className={stls.prev} onClick={previous}>
								<IconNext className={stls.svg} disabled={selectedStory === 0} />
							</button>
							<button className={stls.next} onClick={next}>
								<IconNext
									className={stls.svg}
									disabled={selectedStory === studentStoriesData.length - 1}
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={stls.right}>
				<StudentStory storyData={studentStoriesData[selectedStory]} />
			</div>
		</div>
	)
}
