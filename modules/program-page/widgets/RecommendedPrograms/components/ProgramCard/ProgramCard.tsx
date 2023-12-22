import stls from './ProgramCard.module.sass'
import cn from 'classnames'
import { ProgramCardProps } from './types'

import { Tag } from 'modules/program-page/widgets/components'

export const ProgramCard = ({ className }: ProgramCardProps) => {
	return (
		<div className={cn(className, stls.content)}>
			<div className={stls.tagsWrapper}>
				<Tag variant='delta'>MBA</Tag>
				<Tag variant='gamma'>Скидка -30%</Tag>
				<Tag variant='zeta'>Хит продаж</Tag>
			</div>
			<p className={stls.title}>
				Создание и обеспечение электронного архива с использованием
				it-технологий
			</p>
			<div className={stls.dateWrapper}>20 ноября · 4 месяца</div>
			<div className={stls.priceWrapper}>
				<Tag variant='alpha'>95 000 Р</Tag>
			</div>
		</div>
	)
}
