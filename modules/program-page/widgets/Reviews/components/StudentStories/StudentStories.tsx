import stls from './StudentStories.module.sass'
import cn from 'classnames'
import { StudentStoriesProps } from './types'

import { Wrapper } from '@/components/layout'
import { Tag } from 'modules/program-page/widgets/components'
import { VideoComponent } from '../VideoReviewsCarousel/VideoComponent/VideoComponent'
import Link from 'next/link'
import { studentStoriesData } from './constants'
import { useState } from 'react'
import Image from 'next/image'

export const StudentStories = ({ className, ...rest }: StudentStoriesProps) => {
	const [selectedStory, setSelectedStory] = useState(0)

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.wrapper, stls.content]}>
				<div className={stls.left}>
					<h3 className={stls.left__title}>Истории выпускников</h3>
					<div className={stls.left__wrapper}>
						<Tag className={stls.tag} variant='gamma'>
							{studentStoriesData[selectedStory].profession}
						</Tag>
						<p className={stls.text}>
							{studentStoriesData[selectedStory].description}
						</p>
						<Link className={stls.link} href={'/'}>
							Читать подробнее
						</Link>
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
					</div>
				</div>
				<div className={stls.right}>
					<VideoComponent item={studentStoriesData[selectedStory]} />
				</div>
			</Wrapper>
		</section>
	)
}
