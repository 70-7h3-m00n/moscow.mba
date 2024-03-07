import stls from './CardsHeading.module.sass'
import cn from 'classnames'
import { CardsHeadingProps } from './types'

import { Tag } from 'modules/program-page/widgets'
import { IconCloseAlt, IconRefresh } from '@/components/icons'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'
import { SortingEnum } from 'modules/programs-page-alt/fractals'
import { useContext } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { InfoTooltip } from '@/components/popups/InfoTooltip/InfoTooltip'

export const CardsHeading = ({ className, ...rest }: CardsHeadingProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	const counter = 27

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<div className={stls.titleWrapper}>
				<p className={stls.title}>{`MBA (${counter})`}</p>
				<InfoTooltip>sldkjflskdj</InfoTooltip>
			</div>
			<p className={stls.description}>
				На онлайн-курсах по маркетингу научитесь создавать эффективные
				маркетинговые стратегии, разрабатывать уникальные предложения для
				клиентов, работать с социальными сетями. Сможете обучаться в любое время
				и из любой точки мира в дистанционном формате. На выбор курсы для всех
				уровней подготовки: от начинающих до профессионалов
			</p>
		</div>
	)
}
