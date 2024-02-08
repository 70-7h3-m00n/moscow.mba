import stls from './StudentStory.module.sass'
import cn from 'classnames'
import { StudentStoryProps } from './types'

import Image from 'next/image'
import base64pixel from '@/config/base64pixel'

export const StudentStory = ({ className, storyData }: StudentStoryProps) => {
	return (
		<div className={cn(className, stls.content)}>
			<Image
				className={stls.content__image}
				width={318}
				height={438}
				src={storyData.preview}
				alt={storyData.name}
				quality={100}
				placeholder='blur'
				blurDataURL={base64pixel}
			/>
			<p className={stls.content__description}>{storyData.name}</p>
		</div>
	)
}
