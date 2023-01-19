import {
	useConfigProgramsContext,
	LIST_FILTER_TYPE_PROGRAM
} from 'modules/programs-page/fractals'
import stls from './FilterTypeProgram.module.sass'

const FilterTypeProgram = () => {
	const { configPrograms, setConfigPrograms } = useConfigProgramsContext()

	return (
		<div className={stls.filterTypeProgram}>
			<p className={stls.filterTitle}>Тип программы</p>
			{LIST_FILTER_TYPE_PROGRAM.map((item, index) => (
				<div key={item.value} className={stls.itemFilterTypeProgram}>
					<input
						type='radio'
						name='filterTypeProgram'
						value={item.value}
						id={item.value}
						onChange={e =>
							setConfigPrograms(configPrograms => ({
								...configPrograms,
								filterTypeProgram: e.target.value
							}))
						}
						checked={item.value === configPrograms.filterTypeProgram}
					/>
					<label className={stls.labelModalSorting} htmlFor={item.value}>
						{item.text}
					</label>
				</div>
			))}
		</div>
	)
}

export default FilterTypeProgram
