import stls from './Details.module.sass'
import cn from 'classnames'
import { DetailsProps } from './types'

import { useContext } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import useAt from '@/hooks/useAt'
import Image from 'next/image'
import { ruCase } from '@/helpers/index'
import { Tag } from '../Tag/Tag'
import { PlacesLeft, TrainingPeriod, Until } from '@/components/costs'
import { PopupDuration } from '@/components/popups'

export const Details = ({ className }: DetailsProps) => {
	const at = useAt()
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const durationMonths =
		program?.duration?.minStudyMonths || (at.mba ? '18' : at.mini ? '9' : null)

	const durationHours = at.mini
		? 1260
		: at.mba
		? 3420
		: program?.duration?.studyHours

	const data = [
		{
			title: 'Срок обучения',
			description: (
				<TrainingPeriod
					period={program?.duration?.minStudyMonths}
					type={program?.category?.type}
				/>
			)
		},
		{
			title: 'Форма обучения',
			description: `${at.blended ? 'С очными модулями' : 'Дистанционная'}`
		},
		{
			title: 'Ближайшее зачисление',
			description: (
				<Until preposition={false} executive={at.executive && false} />
			)
		},
		{
			title: 'Диплом',
			description: (
				<>
					Заносится в ФРДО <span></span>
				</>
			)
		}
	]

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
					Осталось мест: <PlacesLeft uniqueKey={program?.id} />
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
