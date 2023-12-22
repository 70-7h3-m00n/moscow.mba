import stls from './Rating.module.sass'
import cn from 'classnames'
import { RatingProps } from './types'

import { Wrapper } from '@/components/layout'
import Image from 'next/image'

const ratings = [
	{
		name: 'Tutortop',
		rating: '4.8',
		src: '/assets/images/program/tutortop.svg',
		desc: '444 отзывов'
	},
	{
		name: 'Google Maps',
		rating: '4.6',
		src: '/assets/images/program/google-maps.svg',
		desc: '444 отзывов'
	},
	{
		name: 'Yandex Maps',
		rating: '4.6',
		src: '/assets/images/program/yandex-maps.svg',
		desc: '444 отзывов'
	},
	{
		name: 'Otzovik',
		rating: '78%',
		src: '/assets/images/program/otzovik.svg',
		desc: '444 отзывов'
	}
]

export const Rating = ({ className }: RatingProps) => {
	return (
		<ul className={cn(className, stls.content)}>
			<li className={cn(stls.large, stls.left)}>
				<Image
					src={'/assets/images/program/reviews-rating-photo-2.jpg'}
					alt='Студентка'
					width={90}
					height={90}
				/>
				<p className={stls.left__title}>
					Получите конкурентное преимущество на своем карьерном пути
				</p>
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

					<Image src={item.src} width={156} height={34} alt={item.name} />
					<p className={stls.item__desc}>{item.desc}</p>
				</li>
			))}
		</ul>
	)
}
