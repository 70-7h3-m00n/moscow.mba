import stls from './FilterDuration.module.sass'
import cn from 'classnames'
import { FilterDurationType } from './types'

import { ChangeEvent, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

export const FilterDuration = ({ className, ...rest }: FilterDurationType) => {
	const router = useRouter()

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

	// const progres = countProgressRange(
	// 	configPrograms?.[FiltersEnum.filterDuration],
	// 	minMaxDuration?.minDuration,
	// 	minMaxDuration?.maxDuration
	// )
	const progres = 100

	const activeProgress = '#FB4D3E'
	const inactiveProgress = '#EFEFEF'
	const styleInput = {
		background: `linear-gradient(90deg, ${activeProgress} 0% ${progres +
			'%'},   ${inactiveProgress} ${progres + '%'} 100%)`
	}

	const [value, setValue] = useState(0)

	const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(+e.target.value)
	}

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<p className={stls.filterTitle}>Длительность</p>
			<div className={stls.filter}>
				<label
					htmlFor='volume'
					className={stls.labelFilter}
				>{`От 0 до 6 месяцев`}</label>
				{/* <label htmlFor='volume' className={stls.labelFilter}>{`От ${
					minMaxDuration?.minDuration
				} до ${configPrograms?.[FiltersEnum.filterDuration]} месяцев`}</label> */}
				<input
					type='range'
					min={0}
					max={6}
					name={'FiltersEnum.filterDuration'}
					step={1}
					className={stls.inputDuration}
					style={styleInput}
					onChange={e => handlerOnChange(e)}
					value={value}
				/>
			</div>
		</div>
	)
}

export default FilterDuration
