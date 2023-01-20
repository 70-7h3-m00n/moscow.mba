import Link from 'next/link'
import { useConfigProgramsContext } from '../../fractals'
import {
	FilterDuration,
	FilterTrainingFormat,
	FilterTypeProgram,
	FilterDirection
} from './fractals'
import { FilterTypeProgramEnum } from 'modules/programs-page/fractals/enums'
import stls from './FilterPrograms.module.sass'
import { useState } from 'react'
import { SearchField } from '../SearchField'

const FilterPrograms = () => {
	const { configPrograms } = useConfigProgramsContext()
	const [isShowFilters, setIsShowFilters] = useState(false)

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
				onClick={() => setIsShowFilters(isShowFilters => !isShowFilters)}>
				<svg
					width='20'
					height='7'
					viewBox='0 0 20 7'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M11 6H1'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
						className={`${stls.pathFilterIsShow} ${
							isShowFilters ? stls.pathFilterShow : ''
						}`}
					/>
					<path
						d='M19 1H1'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
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
					}`}>
					<FilterTrainingFormat />
				</div>
				<div
					className={`${stls.filter} ${stls.filterMobile} ${
						isShowFilters ? stls.filterShowMobile : ''
					}`}>
					{(configPrograms.filterTypeProgram === FilterTypeProgramEnum.course ||
						configPrograms.filterTypeProgram ===
							FilterTypeProgramEnum.profession) && <FilterDuration />}
				</div>
				<div
					className={`${stls.filter} ${stls.filterMobile} ${
						isShowFilters ? stls.filterShowMobile : ''
					}`}>
					{(configPrograms.filterTypeProgram === FilterTypeProgramEnum.course ||
						configPrograms.filterTypeProgram ===
							FilterTypeProgramEnum.profession) && <FilterDirection />}
				</div>
			</div>
		</div>
	)
}

export default FilterPrograms
