import stls from '@/styles/components/sections/VideoReviews.module.sass'
import { IconClose, IconMoreThan } from '@/components/icons'
import { Wrapper } from '@/components/layout'
import Popup from 'reactjs-popup'
import cn from 'classnames'
import useWindowWidth from '@/hooks/useWindowWidth'
import { useEffect, useState } from 'react'

const youtubeReviews = [
	{ link: 'YepZyc2QXiQ' },
	{ link: '91Cf9J5lvuA' },
	{ link: 'Nd5j75rHEao' },
	{ link: '9mBEwFulTe0' },
	{ link: 'h_O1YvDnDag' },
	{ link: 'ACs29UKz45E' },
	{ link: 'KimNAGChaUU' },
	{ link: '55sZv5I0Be0' },
	{ link: 'FECL7Mc6RPc' },
	{ link: 'GcXonkEFsSM' },
	{ link: 'O2j4j1HYMO4' },
	{ link: 'VUI16JgL2-w' },
	{ link: 'JQVbKUNg-3Q' }
]

export default function VideoReviews({
	darkBackground
}: {
	darkBackground?: boolean
}) {
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
			})}>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.titleContainer}>
					<h2
						className={cn(stls.title, {
							[stls.darkBackground]: darkBackground
						})}>
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
											})}>
											Смотреть отзыв
										</span>
										<IconMoreThan classNames={[stls.icon]} />
									</div>
								</div>
							}
							modal
							lockScroll
							nested
							closeOnDocumentClick>
							{/* @ts-expect-error  */}
							{close => (
								<>
									<iframe
										height={isMobile ? '568' : '728'}
										width={isMobile ? '320' : '410'}
										src={`https://www.youtube.com/embed/${review.link}`}
										title='YouTube video player'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									/>
									<button className='mfp-close' type='button' onClick={close}>
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
