import stls from './ProgramCard.module.sass'
import cn from 'classnames'
import { ProgramCardProps } from './types'

import { IconStar, Tag } from 'modules/program-page/widgets'
import { IconDiscount } from '@/components/icons/IconDiscount/IconDiscount'
import { ruCase } from '@/helpers/index'
import useAt from '@/hooks/useAt'
import { IconLightning } from '@/components/icons'
import TrainingPeriodHours from '@/components/costs/TrainingPeriodHours'
import { PriceTag } from './widgets/PriceMBA/PriceTag'
import { TrainingPeriod } from '@/components/costs'

export const ProgramCard = ({
	className,
	program,
	variant = 'light',
	idx = null,
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
		<div
			className={cn(className, stls.content, {
				[stls.dark]: variant === 'dark'
			})}
			data-idx={String(idx % 3)}
			{...rest}
		>
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
					<TrainingPeriod type={type} />
					{` · `}
					<TrainingPeriodHours type={type} />
				</div>
				<PriceTag program={program} dark={variant === 'dark'} />
			</div>
		</div>
	)
}
