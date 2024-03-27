import stls from './ReviewCard.module.sass'
import cn from 'classnames'

import { IconCloseAlt } from '@/components/icons'
import { ReviewCardProps } from './types'
import { IconStar } from 'modules/program-page/widgets/components'

export const ReviewCard = ({
	className,
	item,
	title,
	avatar,
	close
}: ReviewCardProps) => {
	return (
		<div className={cn(className, stls.container)}>
			<button className={stls.close} onClick={close}>
				<IconCloseAlt fill='#000' />
			</button>
			<div className={stls.content}>
				{avatar}
				<p className={stls.post__title}>{title}</p>
				<div className={cn(stls.post__stars)}>
					{new Array(5).fill('_').map((_el, idx) => (
						<IconStar key={idx} filled={idx < item?.rating} />
					))}
				</div>
				<p className={stls.post__name}>{item?.studentName}</p>
				<p className={cn(stls.post__description)}>{item?.studentReview}</p>
			</div>
		</div>
	)
}
