import stls from './ProgramCard.module.sass'
import cn from 'classnames'
import { ProgramCardProps } from './types'

import { IconStar, Tag } from 'modules/program-page/widgets'
import { IconCloseAlt, IconRefresh } from '@/components/icons'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'
import { SortingEnum } from 'modules/programs-page-alt/fractals'
import { useContext } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { InfoTooltip } from '@/components/popups/InfoTooltip/InfoTooltip'
import { IconDiscount } from '@/components/icons/IconDiscount/IconDiscount'

export const ProgramCard = ({
	className,
	program,
	...rest
}: ProgramCardProps) => {
	return (
		<div className={cn(className, stls.content)} {...rest}>
			<div className={stls.tags}>
				<Tag variant='gamma'>{program.category.slug}</Tag>
				<Tag variant='gamma'>
					<IconDiscount /> Скидка -30%
				</Tag>
				<Tag variant='zeta'>
					<IconStar className={stls.star} />
					Хит продаж
				</Tag>
			</div>
			<p>{program.title}</p>
			<div className={stls.bottom}>
				<div>20 ноября · 4 месяца</div>

				<div className={stls.price}>
					<Tag variant='theta'>95 000 ₽ 202 000 ₽</Tag>
					<p className={stls.price__description}>Рассрочка от 4 375 ₽/мес</p>
				</div>
			</div>
		</div>
	)
}
