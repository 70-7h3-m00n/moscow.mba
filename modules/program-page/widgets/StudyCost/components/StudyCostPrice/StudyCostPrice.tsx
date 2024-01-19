import stls from './StudyCostPrice.module.sass'
import cn from 'classnames'
import { StudyCostPriceProps } from './types'

import { Tag } from 'modules/program-page/widgets/components'
import Image from 'next/image'
import { dataList, dataGrid } from '../../constants'
import { PlacesLeft, Until } from '@/components/costs'
import { useContext } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import useAt from '@/hooks/useAt'
import { Timer } from '../Timer/Timer'

export const StudyCostPrice = ({ className }: StudyCostPriceProps) => {
	const at = useAt()
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const data =
		at.profession || at.course
			? dataList.professionAndCourse
			: dataList.mbaAndMini

	return (
		<div className={cn(className, stls.content)}>
			<div className={stls.cornerPhoto}>
				<Image
					src={'/assets/images/program/study-cost-corner-2.png'}
					width={82}
					height={82}
					alt='Фото клиента'
				/>
			</div>
			<h2 className={stls.title}>Стоимость обучения</h2>
			<Timer />
			<div className={stls.details}>
				<Tag className={stls.details__tag} variant='gamma'>
					Осталось мест: <PlacesLeft uniqueKey={program?.id} />
				</Tag>
				<p className={stls.details__until}>
					Старт курса:{' '}
					<Until preposition={false} executive={at.executive && false} />
				</p>
			</div>
			<div className={stls.priceWrapper}>
				<p>6 320 ₽ / мес</p>
			</div>
			<ul className={stls.list}>
				{data.map((item, idx) => (
					<li className={stls.list__item} key={idx}>
						{item}
					</li>
				))}
			</ul>
			<ul className={stls.grid}>
				{dataGrid.map((item, idx) => (
					<li className={stls.gridItem} key={idx}>
						<h3 className={stls.gridItem__title}>{item.title}</h3>
						<p className={stls.gridItem__desc}>{item.desc}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
