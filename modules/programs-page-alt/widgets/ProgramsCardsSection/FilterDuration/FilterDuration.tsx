import stls from './FilterDuration.module.sass'
import cn from 'classnames'
import { FilterDurationType } from './types'

import { ChangeEvent, useContext, use, useState } from 'react'
import { useRouter } from 'next/router'
import { countProgressRange } from 'modules/programs-page-alt/fractals/utils'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'
import { FiltersEnum } from 'modules/programs-page-alt/fractals'

export const FilterDuration = ({ className, ...rest }: FilterDurationType) => {
	const { state, dispatch } = useContext(ProgramsPageContext)
	// const router = useRouter()

	// useEffect(() => {
	// 	if (router.isReady) {
	// 		if (router.query?.[FiltersEnum.filterDuration]) {
	// 			const isDuration =
	// 				router.query?.[FiltersEnum.filterDuration] >=
	// 					minMaxDuration?.minDuration &&
	// 				router.query?.[FiltersEnum.filterDuration] <=
	// 					minMaxDuration?.maxDuration
	// 					? router.query?.[FiltersEnum.filterDuration]
	// 					: minMaxDuration?.maxDuration

	// 			handlerSetConfigPrograms({
	// 				[FiltersEnum.filterDuration]: +isDuration
	// 			})
	// 		} else {
	// 			handlerSetConfigPrograms({
	// 				[FiltersEnum.filterDuration]: +minMaxDuration?.maxDuration
	// 			})
	// 		}
	// 	}

	// 	return () => {
	// 		handlerDeleteConfigPrograms(FiltersEnum.filterDuration)
	// 	}
	// }, [router.isReady, minMaxDuration?.minDuration, minMaxDuration?.maxDuration])

	// useEffect(() => {
	// 	handlerSetConfigPrograms({
	// 		[FiltersEnum.filterDuration]: +minMaxDuration?.maxDuration
	// 	})
	// }, [minMaxDuration?.maxDuration])

	// const progress = 90

	const progress = countProgressRange(state.programsConfig?.duration)
	const styleInput = { '--progress': `${progress}%` }

	const [value, setValue] = useState(0)

	const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		// setValue(+event.target.value)
		dispatch({
			type: ACTION.SET_DURATION,
			payload: { ...state.programsConfig.duration, value: +event.target.value }
		})
	}

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<p className={stls.filterTitle}>Длительность</p>
			<div className={stls.filter}>
				<label htmlFor='volume' className={stls.labelFilter}>
					{`От ${state.programsConfig?.duration?.min} до ${state.programsConfig?.duration?.value} месяцев`}
				</label>
				<input
					className={stls.inputDuration}
					type='range'
					min={state.programsConfig.duration?.min}
					max={state.programsConfig.duration?.max}
					name={FiltersEnum.filterDuration}
					step={1}
					style={styleInput as React.CSSProperties}
					onChange={event => handlerOnChange(event)}
					value={state.programsConfig.duration?.value}
				/>
			</div>
		</div>
	)
}

export default FilterDuration
