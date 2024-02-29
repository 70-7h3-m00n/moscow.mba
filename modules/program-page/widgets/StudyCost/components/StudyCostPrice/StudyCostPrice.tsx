import stls from './StudyCostPrice.module.sass'
import cn from 'classnames'
import { StudyCostPriceProps } from './types'

import { Tag } from 'modules/program-page/widgets/components'
import Image from 'next/image'
import { dataList, dataGrid } from '../../constants'
import { Loan, PlacesLeft, Until } from '@/components/costs'
import { useContext } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import useAt from '@/hooks/useAt'
import { Timer } from '../Timer/Timer'
import { CornerPhoto } from 'modules/program-page/widgets/components/CornerPhoto/CornerPhoto'

export const StudyCostPrice = ({ className, program }: StudyCostPriceProps) => {
	const at = useAt()

	const data =
		program?.frdo === false
			? dataList.professionAndCourseNoEployment
			: at.profession || at.course
			? dataList.professionAndCourse
			: dataList.mbaAndMini

	return (
		<div className={cn(className, stls.content)}>
			<CornerPhoto
				src='/assets/images/program/study-cost-corner-2.png'
				variant='top-right'
				size='l'
			/>
			<h2 className={stls.title}>Стоимость обучения</h2>
			{(at.profession || at.course) && <Timer />}
			<div className={stls.details}>
				<Tag className={stls.details__tag} variant='gamma'>
					Осталось мест: <PlacesLeft uniqueKey={+program?.id} />
				</Tag>
				<p className={stls.details__until}>
					Старт курса:{' '}
					<Until preposition={false} executive={at.executive && false} />
				</p>
			</div>
			<div className={stls.priceWrapper}>
				<Loan
					discount
					type={program?.category?.type}
					format={program?.studyFormat}
					programPrice={(at.profession || at.course) && +program?.price}
					variant='programPage'
				/>
			</div>
			<p className={stls.priceDesc}>* рассрочка на 12 месяцев</p>
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
