import stls from '@/styles/components/sections/VideoReviews.module.sass'
import { IconMoreThan } from '@/components/icons'
import { Wrapper } from '@/components/layout'
import Popup from 'reactjs-popup'
import cn from 'classnames'

/* 
YepZyc2QXiQ
91Cf9J5lvuA
Nd5j75rHEao
9mBEwFulTe0
h_O1YvDnDag
ACs29UKz45E
0-VNApWtm5c
qdALkFNAog4
*/

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
	return (
		<section
			className={cn(stls.container, {
				[stls.singleProgramPage]: darkBackground
			})}>
			<div className={stls.titleContainer}>
				<h2>{'Видеоотзывы'}</h2>
			</div>
			<Wrapper classNames={[stls.wrapper]}>
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
												[stls.singleProgramPage]: darkBackground
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
								<iframe
									height='728'
									width='410'
									src={`https://www.youtube.com/embed/${review.link}`}
									title='YouTube video player'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								/>
							)}
						</Popup>
					))}
				</div>
			</Wrapper>
		</section>
	)
}
