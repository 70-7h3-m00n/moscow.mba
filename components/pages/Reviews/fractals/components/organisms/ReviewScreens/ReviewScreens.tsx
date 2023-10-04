import stls from './ReviewScreens.module.sass'
import { ImgTemplate } from '@/components/images'
import { Wrapper } from '@/components/layout'
import * as reviewScreensImg from './reviewScreensImg'
import { createImgsArr } from '../../../utils'
import cn from 'classnames'
import { createRef, Reducer, useReducer, useRef } from 'react'
import useScrollObserver from '@/hooks/useScrollObserver'

const ReviewScreens = () => {
	const reviewsArr = createImgsArr(reviewScreensImg)

	const findReviewIndex = (targetAlt: string) =>
		reviewsArr.findIndex(({ alt }) => alt === targetAlt)

	const [activeReview, setActiveReview] = useReducer<
		Reducer<number, number | string>
	>(
		(_prev, newValue) =>
			typeof newValue === 'number' ? newValue : findReviewIndex(newValue),
		0
	)

	const imgWrappRefs = useRef(reviewsArr.map(() => createRef<HTMLDivElement>()))

	const reviewsDoubleArr = reviewsArr.reduce<
		Pick<Parameters<typeof ImgTemplate>[0], 'alt' | 'src'>[][]
	>(
		(reviewsAcc, review) => {
			if (reviewsAcc.at(-1).length === 2) reviewsAcc.push([])
			reviewsAcc.at(-1).push(review)
			return reviewsAcc
		},
		[[]]
	)

	useScrollObserver(
		imgWrappRefs.current,
		entries =>
			entries.map(entry => {
				if (window.innerWidth <= 768 && entry.isIntersecting) {
					const targetIdx = imgWrappRefs.current.findIndex(
						item => item.current === entry.target
					)
					setActiveReview(targetIdx)
				}
			}),
		{ threshold: 0.8 }
	)

	return (
		<section className={stls.sectionContainer}>
			<Wrapper classNames={[stls.container]}>
				<div className={stls.reviewsWrapp}>
					{reviewsDoubleArr.map((reviews, idx) => (
						<div
							key={`reviews__column_${idx + 1}`}
							className={cn(
								stls.reviewsColumn,
								stls[`reviewsColumn${idx + 1}`]
							)}>
							{reviews.map(({ alt, src }) => (
								<div
									className={stls.imgWrappers}
									key={alt}
									ref={imgWrappRefs.current[findReviewIndex(alt)]}>
									<ImgTemplate
										src={src}
										alt={alt}
										quality={100}
										objectFit='cover'
										classNames={[stls.reviews, stls[`review${idx + 1}`]]}
									/>
								</div>
							))}
						</div>
					))}
				</div>
				<div className={stls.dotsWrapp}>
					{Array.from({ length: reviewsArr.length }, (_v, idx) => (
						<div
							key={`dot${idx}`}
							className={cn(stls.dots, {
								[stls.activeDot]: activeReview === idx
							})}
							onClick={() => {
								setActiveReview(idx)
								imgWrappRefs.current[idx].current?.scrollIntoView({
									block: 'nearest',
									inline: 'center',
									behavior: 'smooth'
								})
							}}
						/>
					))}
				</div>
			</Wrapper>
		</section>
	)
}

export default ReviewScreens
