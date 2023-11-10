import stls from './VideoReviews.module.sass'
import { IconClose, IconMoreThan } from '@/components/icons'
import { Wrapper } from '@/components/layout'
import Popup from 'reactjs-popup'
import cn from 'classnames'
import useWindowWidth from '@/hooks/useWindowWidth'
import { useEffect, useState } from 'react'
import { VideoReviewsProps } from './types'
import { youtubeReviews } from './constants'

export default function VideoReviews({ darkBackground }: VideoReviewsProps) {
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
		<section
			className={cn(stls.container, {
				[stls.darkBackground]: darkBackground
			})}
		>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.titleContainer}>
					<h2
						className={cn(stls.title, {
							[stls.darkBackground]: darkBackground
						})}
					>
						{'Видеоотзывы'}
					</h2>
				</div>
				<div className={stls.reviewsList}>
					{youtubeReviews.map((review, idx) => (
						<Popup
							key={idx}
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
								<>
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
								</>
							)}
						</Popup>
					))}
				</div>
			</Wrapper>
		</section>
	)
}
