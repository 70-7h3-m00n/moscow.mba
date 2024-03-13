import stls from './CardsHeading.module.sass'
import cn from 'classnames'
import { CardsHeadingProps } from './types'

import { useContext } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { InfoTooltip } from '@/components/popups/InfoTooltip/InfoTooltip'
import { headingData } from './constants'

export const CardsHeading = ({ className, ...rest }: CardsHeadingProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	const programsType = headingData[state.programsConfig.type]

	const counter = state.UIPrograms.length

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<div className={stls.titleWrapper}>
				<p className={stls.title}>{`${programsType.title} (${counter})`}</p>
				<InfoTooltip>{programsType.tooltip}</InfoTooltip>
			</div>
			<p className={stls.description}>{programsType.description}</p>
		</div>
	)
}
