import { useEffect } from 'react'
import {
	countProgressRange,
	useConfigProgramsContext,
	usePrograms
} from 'modules/programs-page/fractals'
import stls from './FilterDuration.module.sass'

const FilterDuration = () => {
	const { configPrograms, setConfigPrograms } = useConfigProgramsContext()
	const { minMaxDuration } = usePrograms()

	useEffect(() => {
		setConfigPrograms(configPrograms => ({
			...configPrograms,
			filterDuration: minMaxDuration.maxDuration
		}))
	}, [minMaxDuration.minDuration, minMaxDuration.maxDuration])

	const progres = countProgressRange(
		configPrograms.filterDuration,
		minMaxDuration.minDuration,
		minMaxDuration.maxDuration
	)

	const activeProgress = '#FB4D3E'
	const inactiveProgress = '#EFEFEF'
	const styleInput = {
		background: `linear-gradient(90deg, ${activeProgress} 0% ${
			progres + '%'
		},   ${inactiveProgress} ${progres + '%'} 100%)`
	}

	return (
		<div className={stls.filterDuration}>
			<p className={stls.filterTitle}>Длительность</p>
			<div className={stls.filter}>
				<label
					htmlFor='volume'
					className={
						stls.labelFilter
					}>{`От ${minMaxDuration.minDuration} до ${configPrograms.filterDuration} месяцев`}</label>
				<input
					type='range'
					min={minMaxDuration.minDuration}
					max={minMaxDuration.maxDuration}
					name='filterDuration'
					step={1}
					className={stls.inputDuration}
					style={styleInput}
					onChange={e =>
						setConfigPrograms(configPrograms => ({
							...configPrograms,
							filterDuration: +e.target.value
						}))
					}
					value={configPrograms?.filterDuration}
				/>
			</div>
		</div>
	)
}

export default FilterDuration
