import { useEffect } from 'react'
import {
	countProgressRange,
	useConfigProgramsContext,
	usePrograms,
	FiltersEnum
} from 'modules/programs-page/fractals'
import stls from './FilterDuration.module.sass'

const FilterDuration = () => {
	const {
		configPrograms,
		handlerSetConfigPrograms,
		router,
		handlerDeleteConfigPrograms
	} = useConfigProgramsContext()
	const { minMaxDuration } = usePrograms()

	useEffect(() => {
		if (router.isReady) {
			if (router.query?.[FiltersEnum.filterDuration]) {
				const isDuration =
					router.query?.[FiltersEnum.filterDuration] >=
						minMaxDuration?.minDuration &&
					router.query?.[FiltersEnum.filterDuration] <=
						minMaxDuration?.maxDuration
						? router.query?.[FiltersEnum.filterDuration]
						: minMaxDuration?.maxDuration

				handlerSetConfigPrograms({
					[FiltersEnum.filterDuration]: isDuration
				})
			} else {
				handlerSetConfigPrograms({
					[FiltersEnum.filterDuration]: minMaxDuration?.maxDuration
				})
			}
		}

		return () => {
			handlerDeleteConfigPrograms(FiltersEnum.filterDuration)
		}
	}, [router.isReady, minMaxDuration?.minDuration, minMaxDuration?.maxDuration])

	const progres = countProgressRange(
		configPrograms?.[FiltersEnum.filterDuration],
		minMaxDuration?.minDuration,
		minMaxDuration?.maxDuration
	)

	const activeProgress = '#FB4D3E'
	const inactiveProgress = '#EFEFEF'
	const styleInput = {
		background: `linear-gradient(90deg, ${activeProgress} 0% ${
			progres + '%'
		},   ${inactiveProgress} ${progres + '%'} 100%)`
	}

	const handlerOnChange = e => {
		handlerSetConfigPrograms({
			[FiltersEnum.filterDuration]: +e.target.value
		})
	}

	return (
		<div className={stls.filterDuration}>
			<p className={stls.filterTitle}>Длительность</p>
			<div className={stls.filter}>
				<label htmlFor='volume' className={stls.labelFilter}>{`От ${
					minMaxDuration?.minDuration
				} до ${configPrograms?.[FiltersEnum.filterDuration]} месяцев`}</label>
				<input
					type='range'
					min={minMaxDuration?.minDuration}
					max={minMaxDuration?.maxDuration}
					name={FiltersEnum.filterDuration}
					step={1}
					className={stls.inputDuration}
					style={styleInput}
					onChange={e => handlerOnChange(e)}
					value={configPrograms?.[FiltersEnum.filterDuration]}
				/>
			</div>
		</div>
	)
}

export default FilterDuration
