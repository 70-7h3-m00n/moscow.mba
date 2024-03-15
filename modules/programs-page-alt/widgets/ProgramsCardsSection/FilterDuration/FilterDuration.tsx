import stls from './FilterDuration.module.sass'
import cn from 'classnames'
import { FilterDurationType } from './types'

import { ChangeEvent, useContext, use, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { countProgressRange } from 'modules/programs-page-alt/fractals/utils'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'
import { FiltersEnum } from 'modules/programs-page-alt/fractals'
import { ruCase } from '@/helpers/index'

export const FilterDuration = ({ className, ...rest }: FilterDurationType) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	const progress = countProgressRange(
		state.durationConfig,
		state.programsConfig?.duration
	)
	const styleInput = { '--progress': `${progress}%` }

	const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: ACTION.SET_DURATION,
			payload: +event.target.value
		})
	}

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<p className={stls.filterTitle}>Длительность</p>
			<div className={stls.filter}>
				<label htmlFor='volume' className={stls.labelFilter}>
					{`От ${state.durationConfig?.min} до ${
						state.programsConfig?.duration
					} ${ruCase(state.programsConfig?.duration, [
						'месяца',
						'месяцев',
						'месяцев'
					])}`}
				</label>
				<input
					className={stls.inputDuration}
					type='range'
					min={state.durationConfig?.min}
					max={state.durationConfig?.max}
					name={FiltersEnum.filterDuration}
					step={1}
					style={styleInput as React.CSSProperties}
					onChange={event => handlerOnChange(event)}
					value={state.programsConfig?.duration}
				/>
			</div>
		</div>
	)
}

export default FilterDuration
