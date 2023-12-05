import stls from './Details.module.sass'
import cn from 'classnames'

import { data } from './constants'
import { DetailsProps } from './types'
import { Tag } from '../Tag/Tag'
import Image from 'next/image'
import { IconSynergy } from '../../HeroSection/components/IconSynergy/IconSynergy'

export const Details = ({ className }: DetailsProps) => {
	return (
		<div className={cn(className, stls.details)}>
			<div className={stls.details__banner}>
				<Image
					src={'/assets/images/program/synergy.png'}
					width={40}
					height={40}
					alt='Лого Синергия'
				/>
				<p>Программа разработана с&nbsp;Университетом “Синергия”</p>
			</div>
			<div>
				<p className={stls.details__title}>
					Участвует в&nbsp;распродаже <span className='red'>-45%</span> до 10
					ноября
				</p>
				<Tag className={stls.details__tag} variant='gamma'>
					Осталось мест: 24
				</Tag>
			</div>
			<ul className={stls.list}>
				{data.map((item, idx) => (
					<li className={stls.item} key={idx}>
						<p className={stls.item__title}>{item.title}</p>
						<p className={stls.item__description}>{item.description}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
