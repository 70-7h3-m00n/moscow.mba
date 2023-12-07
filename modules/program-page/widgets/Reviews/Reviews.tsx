import stls from './Reviews.module.sass'
import cn from 'classnames'
import { ReviewsProps } from './types'

import { Wrapper } from '@/components/layout'
import { Rating } from './components/Rating/Rating'

export const Reviews = ({ className }: ReviewsProps) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>Отзывы</h2>
				<p className={stls.subtitle}>
					Нам важно, чтобы вы приняли взвешенное решение об обучении. Поэтому мы
					собрали для вас отзывы студентов и выпускников об обучении в Moscow
					Business Academy
				</p>
				<Rating />
			</Wrapper>
		</section>
	)
}