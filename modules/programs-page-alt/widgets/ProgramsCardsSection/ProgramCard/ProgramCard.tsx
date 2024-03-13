import stls from './ProgramCard.module.sass'
import cn from 'classnames'
import { ProgramCardProps } from './types'

import { IconStar, Tag } from 'modules/program-page/widgets'
import { IconDiscount } from '@/components/icons/IconDiscount/IconDiscount'
import { ruCase } from '@/helpers/index'
import { Loan, Price, Until } from '@/components/costs'
import useAt from '@/hooks/useAt'
import { useEffect } from 'react'
import { IconLightning } from '@/components/icons'
import TrainingPeriodHours from '@/components/costs/TrainingPeriodHours'
import { PriceTag } from './widgets/PriceMBA/PriceTag'

export const ProgramCard = ({
	className,
	program,
	...rest
}: ProgramCardProps) => {
	const at = useAt()

	const hitProgram = program?.hit
	const newProgram = program?.new && !hitProgram
	const type = program?.category.type
	const category =
		program?.category?.slug === 'mba'
			? 'MBA'
			: program?.category?.slug === 'mini'
			? 'Mini MBA'
			: program?.category?.slug === 'profession'
			? 'Профессия'
			: program?.category?.slug === 'course'
			? 'Курс'
			: ''

	return (
		<div className={cn(className, stls.content)} {...rest}>
			{/* <p>{program.studyFormat}</p> */}
			<div className={stls.tags}>
				<Tag className={stls.tag} variant='delta'>
					{category}
				</Tag>
				<Tag className={stls.tag} variant='gamma'>
					<IconDiscount className={stls.discount} /> Скидка -30%
				</Tag>
				{hitProgram && (
					<Tag className={stls.tag} variant='zeta'>
						<IconStar className={stls.star} />
						Хит продаж
					</Tag>
				)}
				{newProgram && (
					<Tag className={stls.tag} variant='iota'>
						<IconLightning className={stls.lightning} />
						Новинка
					</Tag>
				)}
			</div>
			<p className={stls.title}>{program.title}</p>
			<div className={stls.bottom}>
				<div className={stls.bottom__duration}>
					{`${program.duration.minStudyMonths} ${ruCase(
						+program.duration.minStudyMonths,
						['месяц', 'месяца', 'месяцев']
					)} · `}
					{program?.duration?.studyHours ? (
						`${program?.duration?.studyHours} ${
							at.en
								? 'hours'
								: ruCase(+program?.duration?.studyHours, [
										'час',
										'часа',
										'часов'
								  ])
						}`
					) : (
						<TrainingPeriodHours type={type} />
					)}
				</div>

				<PriceTag program={program} />
			</div>
		</div>
	)
}
