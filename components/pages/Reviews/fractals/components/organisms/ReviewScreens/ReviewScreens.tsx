import stls from './ReviewScreens.module.sass'
import { ImgTemplate } from '@/components/images'
import { Wrapper } from '@/components/layout'
import { reviewScreens } from '../../..'
import { createImgsArr } from '../../../utils'
import cn from 'classnames'
import { createRef, useRef, useState } from 'react'
import useScrollObserver from '@/hooks/useScrollObserver'

const ReviewScreens = () => {
	const [activeReview, setActiveReview] = useState(0)

	const reviewsArr = createImgsArr(reviewScreens)

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
				if (entry.isIntersecting) {
					const targetAlt = entry.target
						.getElementsByTagName('img')
						.item(1)
						.getAttribute('alt')
					setActiveReview(reviewsArr.findIndex(({ alt }) => alt === targetAlt))
				}
			}),
		{ threshold: 0.5 }
	)

	return (
		<Wrapper classNames={[stls.container]}>
			<div className={stls.reviewsWrapp}>
				{reviewsDoubleArr.map((reviews, idx) => (
					<div
						key={`reviews__column_${idx + 1}`}
						className={cn(stls.reviewsColumn, stls[`reviewsColumn${idx + 1}`])}>
						{reviews.map(({ alt, src }) => (
							<div
								className={stls.imgWrappers}
								key={alt}
								ref={
									imgWrappRefs.current[
										reviewsArr.findIndex(
											({ alt: flattenAlt }) => flattenAlt === alt
										)
									]
								}>
								<ImgTemplate src={src} alt={alt} classNames={[stls.reviews]} />
							</div>
						))}
					</div>
				))}
			</div>
			<div className={stls.dotsWrapp}>
				{Array.from({ length: reviewsArr.length }, (_v, idx) => (
					<div
						key={`dot${idx}`}
						className={cn(stls.dots, activeReview === idx && stls.activeDot)}
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
	)
}

export default ReviewScreens
