import stls from './Rating.module.sass'
import cn from 'classnames'
import { RatingProps } from './types'

import Image from 'next/image'
import { ratings } from './constants'

export const Rating = ({ className }: RatingProps) => {
	return (
		<ul className={cn(className, stls.content)}>
			<li className={cn(stls.large, stls.left)}>
				<Image
					className={stls.left__image}
					src={'/assets/images/program/reviews-rating-photo-2.jpg'}
					alt='Студентка'
					width={90}
					height={90}
				/>
				<p className={stls.left__title}>
					Получите конкурентное преимущество на своем карьерном пути
				</p>
			</li>
			<li className={cn(stls.large, stls.center)}>
				<Image
					className={stls.large__image}
					src={'/assets/images/program/reviews-rating-photo.jpg'}
					alt='Спикер на конференции'
					fill
				/>
			</li>
			{ratings.map((item, idx) => (
				<li className={stls.item} key={idx}>
					<span className={stls.item__rating}>{item.rating}</span>

					<Image
						className={stls.item__image}
						src={item.src}
						width={156}
						height={34}
						alt={item.name}
					/>
					<p className={stls.item__desc}>{item.desc}</p>
				</li>
			))}
		</ul>
	)
}
