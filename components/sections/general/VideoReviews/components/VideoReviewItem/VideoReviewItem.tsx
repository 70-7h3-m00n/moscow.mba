import stls from './VideoReviewItem.module.sass'
import cn from 'classnames'
import { VideoReviewItemProps } from './types'

import useWindowWidth from '@/hooks/useWindowWidth'
import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import { IconClose, IconMoreThan } from '@/components/icons'

export const VideoReviewItem = ({
	review,
	darkBackground
}: VideoReviewItemProps) => {
	const widthWindow = useWindowWidth()
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		if (widthWindow <= 767) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}, [widthWindow])

	return (
		<Popup
			trigger={
				<div className={stls.previewWrapper}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						className={stls.image}
						alt='youtube preview image'
						src={`//img.youtube.com/vi/${review.link}/hqdefault.jpg`}
						width='190'
						height='345'
					/>
					<div className={stls.openPopupLink}>
						<span
							className={cn(stls.openPopupText, {
								[stls.darkBackground]: darkBackground
							})}
						>
							Смотреть отзыв
						</span>
						<IconMoreThan classNames={[stls.icon]} />
					</div>
				</div>
			}
			modal
			lockScroll
			nested
			closeOnDocumentClick
		>
			{/* @ts-expect-error  */}
			{close => (
				<Popup>
					<iframe
						height={isMobile ? '568' : '728'}
						width={isMobile ? '320' : '410'}
						src={`https://www.youtube.com/embed/${review.link}/?autoplay=1`}
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					/>
					<button
						className={cn('mfp-close', stls.closeButton)}
						type='button'
						onClick={close}
					>
						<IconClose stroke='#fff' />
					</button>
				</Popup>
			)}
		</Popup>
	)
}
