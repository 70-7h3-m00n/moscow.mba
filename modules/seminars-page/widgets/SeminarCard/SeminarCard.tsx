import stls from './SeminarCard.module.sass'
import cn from 'classnames'
import { SeminarCardProps } from './types'

import Image from 'next/image'
import { IconBell } from '@/components/icons'
import routesFront from '@/config/routesFront'
import Link from 'next/link'
import { ruCase } from '@/helpers/index'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export const SeminarCard = ({ className, card }: SeminarCardProps) => {
	const hours = new Date(card.date).getHours()
	const minutes =
		new Date(card.date).getMinutes().toString().length === 1
			? `0${new Date(card.date).getMinutes()}`
			: `${new Date(card.date).getMinutes()}`

	const fullDate = format(new Date(card.date), 'dd MMM', { locale: ru })

	return (
		<Link
			href={`${routesFront.root}${routesFront.seminars}/${card.slug}`}
			className={cn(className, stls.container)}
			data-effect='mfp-zoom-in'
		>
			<div className={stls.bell}>
				<IconBell />
			</div>
			<div className={stls.date}>
				<strong>{fullDate},</strong> {hours}:{minutes}
			</div>
			<div className={stls.title}>{card.title}</div>
			<div className={stls.info}>
				<div className={stls.author}>
					<div className={stls.avatar}>
						<Image
							src={card.authors[0]?.portrait}
							alt={card.authors[0]?.name}
							width={50}
							height={50}
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div>
						Спикер: <span className={stls.name}>{card.authors[0]?.name}</span>
					</div>
				</div>
				<div className={stls.duration}>{`${card.duration} ${ruCase(
					card.duration,
					['час', 'часа', 'часов']
				)}`}</div>
			</div>
		</Link>
	)
}
