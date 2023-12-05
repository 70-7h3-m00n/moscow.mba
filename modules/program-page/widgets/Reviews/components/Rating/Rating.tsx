import stls from './Rating.module.sass'
import cn from 'classnames'
import { RatingProps } from './types'

import { Wrapper } from '@/components/layout'
import Image from 'next/image'

const ratings = [
	{
		rating: '10%',
		logo: 'logo.png',
		desc: '444 отзывов'
	},
	{
		rating: '10%',
		logo: 'logo.png',
		desc: '444 отзывов'
	},
	{
		rating: '10%',
		logo: 'logo.png',
		desc: '444 отзывов'
	},
	{
		rating: '10%',
		logo: 'logo.png',
		desc: '444 отзывов'
	}
]

export const Rating = ({ className }: RatingProps) => {
	return (
		<ul className={cn(className, stls.content)}>
			<li className={cn(stls.large, stls.left)}>
				<h3>Получите конкурентное преимущество на своем карьерном пути</h3>
				<p>test</p>
			</li>
			<li className={stls.large}>
				<Image
					src={'/assets/images/program/reviews-rating-photo.jpg'}
					alt='Спикер на конференции'
					width={432}
					height={432}
				/>
			</li>
			{ratings.map((item, idx) => (
				<li className={stls.item} key={idx}>
					<span className={stls.item__rating}>{item.rating}</span>
					{item.logo}
					<p className={stls.item__desc}>{item.desc}</p>
				</li>
			))}
		</ul>
	)
}
