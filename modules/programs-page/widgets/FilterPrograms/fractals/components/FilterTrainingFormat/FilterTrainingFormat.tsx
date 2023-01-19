import { useEffect } from 'react'
import { FilterFormatTrainingEnum } from 'modules/programs-page/fractals/enums'
import {
	LIST_FILTER_TRAINING_PROGRAM,
	useConfigProgramsContext,
	usePrograms
} from 'modules/programs-page/fractals'
import stls from './FilterTrainingFormat.module.sass'

const FilterTrainingFormat = () => {
	const { isBlended } = usePrograms()
	const { configPrograms, setConfigPrograms } = useConfigProgramsContext()

	useEffect(() => {
		setConfigPrograms(configPrograms => ({
			...configPrograms,
			filterTrainingFormat: FilterFormatTrainingEnum.online
		}))
	}, [isBlended])

	return (
		<div className={stls.FilterTrainingFormat}>
			<p className={stls.filterTitle}>Формат обучения</p>
			{LIST_FILTER_TRAINING_PROGRAM.map((item, index) => (
				<div
					key={item.value}
					className={`${stls.itemFilterTrainingFormat} ${
						!(item.value === FilterFormatTrainingEnum.online || isBlended)
							? stls.inputFilterTrainingDisabled
							: ''
					}`}>
					<input
						type='radio'
						name='filterTrainingFormat'
						value={item.value}
						id={item.value}
						onChange={e =>
							setConfigPrograms(configPrograms => ({
								...configPrograms,
								filterTrainingFormat: e.target.value
							}))
						}
						checked={item.value === configPrograms.filterTrainingFormat}
						disabled={
							!(item.value === FilterFormatTrainingEnum.online || isBlended)
						}
					/>
					<label
						className={`${stls.labelModalSorting} ${
							!(item.value === FilterFormatTrainingEnum.online || isBlended)
								? stls.labelModalSortingDisable
								: ''
						}`}
						htmlFor={item.value}>
						{item.text}
					</label>
				</div>
			))}
		</div>
	)
}

export default FilterTrainingFormat
