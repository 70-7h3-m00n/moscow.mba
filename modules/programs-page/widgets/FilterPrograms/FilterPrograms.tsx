import stls from './FilterPrograms.module.sass'
import cn from 'classnames'

import { useState } from 'react'
import {
	FilterDuration,
	FilterTrainingFormat,
	FilterTypeProgram
} from './fractals'
import {
	useConfigProgramsContext,
	FilterTypeProgramEnum,
	FiltersEnum
} from '../../fractals'
import { SearchField } from '../SearchField'

const FilterPrograms = () => {
	const { configPrograms } = useConfigProgramsContext()
	const [isShowFilters, setIsShowFilters] = useState(false)

	const isCourseAndProfession =
		configPrograms?.[FiltersEnum.filterTypeProgram] ===
			FilterTypeProgramEnum.course ||
		configPrograms?.[FiltersEnum.filterTypeProgram] ===
			FilterTypeProgramEnum.profession

	return (
		<div className={stls.filters}>
			<div className={stls.search}>
				<SearchField />
			</div>
			<div className={`${stls.filter} ${stls.filterTypeProgram}`}>
				<FilterTypeProgram />
			</div>
			<button
				className={`${stls.handlerFilterIsShow} ${
					isShowFilters ? stls.handlerFilterShow : ''
				}`}
				onClick={() => setIsShowFilters(isShowFilters => !isShowFilters)}
			>
				<svg
					width='20'
					height='7'
					viewBox='0 0 20 7'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M11 6H1'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className={`${stls.pathFilterIsShow} ${
							isShowFilters ? stls.pathFilterShow : ''
						}`}
					/>
					<path
						d='M19 1H1'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className={`${stls.pathFilterIsShow} ${
							isShowFilters ? stls.pathFilterShow : ''
						}`}
					/>
				</svg>
				<span>Фильтры</span>
			</button>
			<div className={stls.filtersMobile}>
				<div
					className={`${stls.filter} ${stls.filterMobile} ${
						isShowFilters ? stls.filterShowMobile : ''
					}`}
				>
					<FilterTrainingFormat />
				</div>
				<div
				// className={`${stls.filter} ${stls.filterMobile} ${
				// 	isShowFilters ? stls.filterShowMobile : ''
				// }`}
				>
					{isCourseAndProfession && (
						<FilterDuration
							className={cn(stls.filter, stls.filterMobile, {
								[stls.filterShowMobile]: isShowFilters
							})}
						/>
					)}
				</div>
				{/* <div
					className={`${stls.filter} ${stls.filterMobile} ${
						isShowFilters ? stls.filterShowMobile : ''
					}`}
				>
					{isCourseAndProfession && <FilterDirection />}
				</div> */}
			</div>
		</div>
	)
}

export default FilterPrograms
