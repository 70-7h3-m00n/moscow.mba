import stls from './CardsHeading.module.sass'
import cn from 'classnames'
import { CardsHeadingProps } from './types'

import { useContext, useEffect } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { InfoTooltip } from '@/components/popups/InfoTooltip/InfoTooltip'
import { LIST_FILTER_TYPE_PROGRAM } from 'modules/programs-page-alt/fractals'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { Ruble } from '@/components/costs/Ruble/Ruble'

export const CardsHeading = ({ className, ...rest }: CardsHeadingProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	const programsType = LIST_FILTER_TYPE_PROGRAM.find(
		item => item.value === state.programsConfig.type
	)

	const counter = state.UIPrograms.length

	// const count = useMotionValue(0)
	// const rounded = useTransform(count, latest => Math.round(latest))

	// useEffect(() => {
	// 	const controls = animate(count, 100)

	// 	return controls.stop
	// }, [])

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<div className={stls.titleWrapper}>
				<h1 className={stls.title}>{`${programsType.text} (${counter})`}</h1>
				{programsType.tooltip && (
					<InfoTooltip>{programsType.tooltip}</InfoTooltip>
				)}
			</div>
		</div>
	)
}
