import { Wrapper } from '@/components/layout'
import stls from './ReviewsSource.module.sass'
import * as logos from './logos'
import { createImgsArr } from '../../../utils'
import { ImgTemplate } from '@/components/images'
import { Reducer, useReducer } from 'react'
import cn from 'classnames'
import { BtnArticlesShowMore } from '@/components/btns'
import { Star } from './star'

const ReviewsSource = () => {
	const sourceRatings = [
		4.5, 5, 5, 4.2, 4, 5, 4.3, 5, 4.8, 5, 5, 5, 5, 4.8, 5, 5
	]
	const logosArr = createImgsArr(logos)
		.map((logo, idx) => ({
			...logo,
			rating: sourceRatings[idx]
		}))

	const [shownSources, showMoreSources] = useReducer<Reducer<number, void>>(
		prev => {
			const countLast = logosArr.length - prev
			return (countLast >= 3 && prev + 3) || (countLast > 0 && countLast + prev)
		},
		3
	)

	return (
		<section className={stls.sectionContainer}>
			<Wrapper column>
				<h2 className={stls.title}>Больше отзывов о нас</h2>
				<div className={stls.logosContainer}>
					{logosArr.map(({ alt, src, rating }, idx) => (
						<div
							key={alt}
							className={cn(
								stls.logosWrapp,
								shownSources < idx + 1 && stls.hidden
							)}>
							<ImgTemplate
								src={src}
								alt={alt}
								classNames={[stls.logos, stls[`logo${idx + 1}`]]}
							/>
							<div className={stls.ratingWrapp}>
								{Array.from({ length: 5 }, (_v, starIdx) => (
									<Star
										key={`star${starIdx + 1}`}
										rating={
											(starIdx < Math.trunc(rating) && 1) ||
											(starIdx === Math.trunc(rating) && rating % 1)
										}
										id={`star_${idx + 1}_${starIdx + 1}`}
									/>
								))}
								<p className={stls.rating}>{rating}</p>
							</div>
						</div>
					))}
					{logosArr.length % 4 !== 0 && (
						<div className={cn(stls.logosWrapp, stls.hidden, stls.emptyItem)} />
					)}
				</div>
				<div
					className={cn(
						stls.button,
						logosArr.length === shownSources && stls.hidden
					)}>
					<BtnArticlesShowMore onClick={showMoreSources} />
				</div>
			</Wrapper>
		</section>
	)
}

export default ReviewsSource
