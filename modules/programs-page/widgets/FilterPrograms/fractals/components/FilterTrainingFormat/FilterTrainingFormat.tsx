import { useEffect } from 'react'
import {
	LIST_FILTER_TRAINING_PROGRAM,
	useConfigProgramsContext,
	FilterFormatTrainingEnum,
	FilterTypeProgramEnum,
	FiltersEnum
} from 'modules/programs-page/fractals'
import stls from './FilterTrainingFormat.module.sass'

const FilterTrainingFormat = () => {
	const { configPrograms, handlerSetConfigPrograms, router } =
		useConfigProgramsContext()

	useEffect(() => {
		if (router.isReady) {
			if (router.query?.[FiltersEnum.filterTrainingFormat]) {
				const isFilterInURL = Object.keys(FilterFormatTrainingEnum).includes(
					router.query?.[FiltersEnum.filterTrainingFormat]
				)

				const isCourceAndProfession =
					router.query?.[FiltersEnum.filterTypeProgram] ===
						FilterTypeProgramEnum.course ||
					router.query?.[FiltersEnum.filterTypeProgram] ===
						FilterTypeProgramEnum.profession

				isFilterInURL &&
					handlerSetConfigPrograms({
						[FiltersEnum.filterTrainingFormat]: isCourceAndProfession
							? FilterFormatTrainingEnum.online
							: router.query?.[FiltersEnum.filterTrainingFormat]
					})
			}
		}
	}, [router.isReady])

	const handlerOnChange = e => {
		handlerSetConfigPrograms({
			[FiltersEnum.filterTrainingFormat]: e.target.value
		})
	}

	const isCourceAndProfession =
		configPrograms?.[FiltersEnum.filterTypeProgram] ===
			FilterTypeProgramEnum.course ||
		configPrograms?.[FiltersEnum.filterTypeProgram] ===
			FilterTypeProgramEnum.profession

	return (
		<div className={stls.FilterTrainingFormat}>
			<p className={stls.filterTitle}>Формат обучения</p>
			{LIST_FILTER_TRAINING_PROGRAM.map((item, index) => (
				<div
					key={item.value}
					className={`${stls.itemFilterTrainingFormat} ${
						!(item.value === FilterFormatTrainingEnum.online) &&
						isCourceAndProfession
							? stls.inputFilterTrainingDisabled
							: ''
					}`}>
					<input
						type='radio'
						name={FiltersEnum.filterTrainingFormat}
						value={item.value}
						id={item.value}
						onChange={e => handlerOnChange(e)}
						checked={item.value === configPrograms.filterTrainingFormat}
						disabled={
							!(item.value === FilterFormatTrainingEnum.online) &&
							isCourceAndProfession
						}
					/>
					<label
						className={`${stls.labelModalSorting} ${
							!(item.value === FilterFormatTrainingEnum.online) &&
							isCourceAndProfession
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