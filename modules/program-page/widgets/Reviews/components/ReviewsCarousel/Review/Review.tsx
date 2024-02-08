import stls from './Review.module.sass'
import cn from 'classnames'
import { ReviewProps } from './types'

import { useContext } from 'react'
import Image from 'next/image'
import { IconStar } from 'modules/program-page/widgets/components'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import Popup from 'reactjs-popup'
import truncate from 'truncate'
import { colors } from '../constants'
import { ReviewCard } from '../../ReviewCard/ReviewCard'
import { CornerPhoto } from 'modules/program-page/widgets/components/CornerPhoto/CornerPhoto'

export const Review = ({ className, item }: ReviewProps) => {
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const getRandomColor = (): string =>
		colors[Math.floor(Math.random() * colors.length)]

	return (
		<div
			className={cn(className, stls.carousel__post, stls.post)}
			key={`Carousel_post--${item?.studentName}`}
		>
			<p className={stls.post__title}>{item?.title || program?.title}</p>
			<div className={cn(stls.post__stars)}>
				{new Array(5).fill('_').map((_el, idx) => (
					<IconStar key={idx} filled={idx < item?.rating} />
				))}
			</div>
			<p className={stls.post__name}>{item?.studentName}</p>
			{item?.studentReview.length > 250 ? (
				<>
					<p className={cn(stls.post__description)}>
						{truncate(item?.studentReview, 251)}
					</p>
					<Popup
						trigger={
							<button className={stls.post__openLink}>Читать подробнее</button>
						}
						modal
						lockScroll
						nested
						closeOnDocumentClick
					>
						{/* @ts-expect-error  */}

						{close => (
							<ReviewCard
								close={close}
								item={item}
								title={item?.title || program?.title}
								avatar={
									item?.studentPhoto ? (
										<Image
											className={stls.cornerPhoto__image}
											src={item?.studentPhoto}
											width={44}
											height={44}
											style={{
												borderRadius: '100rem',
												objectFit: 'cover'
											}}
											alt='Фото клиента'
										/>
									) : (
										<div
											className={stls.noAvatar}
											style={{ backgroundColor: `${getRandomColor()}` }}
										>
											{item?.studentName?.at(0)}
										</div>
									)
								}
							/>
						)}
					</Popup>
				</>
			) : (
				<>
					<p className={cn(stls.post__description)}>{item?.studentReview}</p>
				</>
			)}

			<CornerPhoto
				className={stls.cornerPhoto}
				variant='top-right'
				size='s'
				src={item?.studentPhoto}
				bgColor='#E7EAED'
			/>

			{/* <div className={stls.cornerPhoto}>
				{item?.studentPhoto ? (
					<Image
						className={stls.cornerPhoto__image}
						src={item?.studentPhoto}
						fill
						style={{
							objectFit: 'cover'
						}}
						alt='Фото клиента'
					/>
				) : (
					<div
						className={stls.noAvatar}
						style={{ backgroundColor: `${getRandomColor()}` }}
					>
						{item?.studentName?.at(0)}
					</div>
				)}
			</div> */}
		</div>
	)
}
