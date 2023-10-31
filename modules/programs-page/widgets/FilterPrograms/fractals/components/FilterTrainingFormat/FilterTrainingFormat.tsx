import { useEffect } from 'react'
import {
	LIST_FILTER_TRAINING_PROGRAM,
	useConfigProgramsContext,
	FilterFormatTrainingEnum,
	FilterTypeProgramEnum,
	FiltersEnum
} from 'modules/programs-page/fractals'
import stls from './FilterTrainingFormat.module.sass'
import useAt from '@/hooks/useAt'

const FilterTrainingFormat = () => {
	const at = useAt()
	const { configPrograms, handlerSetConfigPrograms, router } =
		useConfigProgramsContext()

	// if URL is loaded and query TrainingFormat is not empty change configPrograms
	useEffect(() => {
		if (router.isReady) {
			// console.log(`at =>>>>>>>>>>>>>>>>>>>`, at)
			const trainingFormat = at.blended
				? FilterFormatTrainingEnum.blended
				: FilterFormatTrainingEnum.online
			handlerSetConfigPrograms({
				[FiltersEnum.filterTrainingFormat]: trainingFormat
			})
		}
	}, [router.isReady])

	// if training format is changed set to configPrograms
	const handlerOnChange = e => {
		at.allPrograms
			? handlerSetConfigPrograms({
					[FiltersEnum.filterTrainingFormat]: e.target.value
			  })
			: router.push(
					`/programs/${configPrograms.filterTypeProgram}/${e.target.value}`
			  )
	}

	const isCourceAndProfession =
		configPrograms?.[FiltersEnum.filterTypeProgram] ===
			FilterTypeProgramEnum.course ||
		configPrograms?.[FiltersEnum.filterTypeProgram] ===
			FilterTypeProgramEnum.profession ||
		at.course ||
		at.profession

	return (
		<div className={stls.FilterTrainingFormat}>
			<p className={stls.filterTitle}>Формат обучения</p>
			{LIST_FILTER_TRAINING_PROGRAM.map((item, index) => (
				<div
					key={item.value}
					className={`${stls.itemFilterTrainingFormat} ${
						!(item.value === FilterFormatTrainingEnum.online && at.online) &&
						isCourceAndProfession
							? stls.inputFilterTrainingDisabled
							: ''
					}`}
				>
					<input
						type='radio'
						name={FiltersEnum.filterTrainingFormat}
						value={item.value}
						id={item.value}
						onChange={e => handlerOnChange(e)}
						checked={item.value === configPrograms.filterTrainingFormat}
						disabled={
							!(item.value === FilterFormatTrainingEnum.online && at.online) &&
							isCourceAndProfession
						}
					/>
					<label
						className={`${stls.labelModalSorting} ${
							!(item.value === FilterFormatTrainingEnum.online && at.online) &&
							isCourceAndProfession
								? stls.labelModalSortingDisable
								: ''
						}`}
						htmlFor={item.value}
					>
						{item.text}
						{item.value === FilterFormatTrainingEnum.online && (
							<span className={stls.sale}>-45%</span>
						)}
					</label>
				</div>
			))}
		</div>
	)
}

export default FilterTrainingFormat
