import stls from './CardsHeading.module.sass'
import cn from 'classnames'
import { CardsHeadingProps } from './types'

import { useContext } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { InfoTooltip } from '@/components/popups/InfoTooltip/InfoTooltip'
import { LIST_FILTER_TYPE_PROGRAM } from 'modules/programs-page-alt/fractals'

export const CardsHeading = ({ className, ...rest }: CardsHeadingProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	const programsType = LIST_FILTER_TYPE_PROGRAM.find(
		item => item.value === state.programsConfig.type
	)

	const counter = state.UIPrograms.length

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<div className={stls.titleWrapper}>
				<p className={stls.title}>{`${programsType.text} (${counter})`}</p>
				{programsType.tooltip && (
					<InfoTooltip>{programsType.tooltip}</InfoTooltip>
				)}
			</div>
			<p className={stls.description}>{programsType.description}</p>
		</div>
	)
}
