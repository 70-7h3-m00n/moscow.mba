import stls from './AvatarList.module.sass'
import cn from 'classnames'
import { AvatarListProps } from './types'

import { studentStoriesData } from '../constants'
import Image from 'next/image'

export const AvatarList = ({
	className,
	selectedStory,
	setSelectedStory,
	...rest
}: AvatarListProps) => {
	return (
		<ul className={cn(className, stls.content)} {...rest}>
			{studentStoriesData.map((item, idx) => (
				<li
					className={cn(stls.content__item, {
						[stls.disabled]: idx !== selectedStory
					})}
					key={`Avatar-${idx}-${item.avatar}`}
					onClick={() => setSelectedStory(idx)}
				>
					<Image
						className={stls.content__image}
						width={82}
						height={82}
						src={studentStoriesData[idx].avatar}
						alt={studentStoriesData[idx].name}
						quality={100}
					/>
				</li>
			))}
		</ul>
	)
}
