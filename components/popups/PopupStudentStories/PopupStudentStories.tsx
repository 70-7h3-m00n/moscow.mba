import stls from './PopupStudentStories.module.sass'
import { PopupStudentStoriesProps } from './types'

import Image from 'next/image'
import Popup from 'reactjs-popup'
import base64pixel from '@/config/base64pixel'
import { IconCloseAlt } from '@/components/icons'
import { Tag } from 'modules/program-page/widgets'

const contentStyle = {
	height: '100%',
	width: '50rem',
	margin: '0 0 0 auto',
	padding: '0',
	animation: 'sideModal 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards'
}
const overlayStyle = { background: 'rgba(0,0,0,0.5)' }
const arrowStyle = { color: '#000' } // style for an svg element

export const PopupStudentStories = ({
	storyData
}: PopupStudentStoriesProps) => {
	const popupBody: any = (close: () => void) => (
		<div className={stls.modal}>
			<Image
				className={stls.image}
				width={156}
				height={203}
				src={storyData.preview}
				alt={storyData.name}
				quality={100}
				placeholder='blur'
				blurDataURL={base64pixel}
			/>
			<div className={stls.content}>
				<Tag variant='gamma'>{storyData.profession}</Tag>
				<p className={stls.content__name}>{storyData.name}</p>
				<div className={stls.content__description}>
					{storyData.description.map((item, idx) => (
						<p className={stls.content__paragraph} key={idx}>
							{item}
						</p>
					))}
				</div>
			</div>
			<button
				className={stls.close}
				onClick={() => {
					close()
				}}
			>
				<IconCloseAlt crossColor='#000' />
			</button>
		</div>
	)

	return (
		<Popup
			trigger={<button className={stls.readMore}> Читать подробнее </button>}
			modal
			closeOnDocumentClick
			lockScroll
			{...{ contentStyle, overlayStyle, arrowStyle }}
		>
			{popupBody}
		</Popup>
	)
}
