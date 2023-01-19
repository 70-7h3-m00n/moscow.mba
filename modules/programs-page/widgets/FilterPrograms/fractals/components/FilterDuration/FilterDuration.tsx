import { useEffect } from 'react'
import {
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
			filterDuration: minMaxDuration?.maxDuration
		}))
	}, [minMaxDuration?.maxDuration])

	return (
		<div className={stls.filterDuration}>
			<p className={stls.filterTitle}>Длительность</p>
			<div className={stls.filter}>
				<label htmlFor='volume'>{`От ${minMaxDuration?.minDuration} до ${configPrograms?.filterDuration} месяцев`}</label>
				<input
					type='range'
					min={minMaxDuration?.minDuration}
					max={minMaxDuration?.maxDuration}
					name='filterDuration'
					step={1}
					onChange={e =>
						setConfigPrograms(configPrograms => ({
							...configPrograms,
							filterDuration: e.target.value
						}))
					}
					value={configPrograms?.filterDuration}
				/>
			</div>
		</div>
	)
}

export default FilterDuration
