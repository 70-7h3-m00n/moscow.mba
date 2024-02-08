import stls from './FutureJobItem.module.sass'
import cn from 'classnames'
import { FutureJobItemProps } from './types'
import { CornerPhoto } from '../../components/CornerPhoto/CornerPhoto'
import { data } from '../constants'

export const FutureJobItem = ({
	className,
	idx,
	item,
	...rest
}: FutureJobItemProps) => {
	return (
		<div
			className={cn(className, stls.card, { [stls.redBg]: idx % 2 !== 0 })}
			{...rest}
		>
			<CornerPhoto
				className={stls.cornerPhoto}
				src={data[idx].src}
				variant='top-right'
				bgColor='#18191A'
				size='l'
			/>

			<h3 className={stls.card__title}>{item?.title}</h3>
			<p className={stls.card__description}>{item?.string}</p>
		</div>
	)
}
