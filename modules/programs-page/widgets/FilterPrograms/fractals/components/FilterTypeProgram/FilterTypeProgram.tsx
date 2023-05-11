import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
	useConfigProgramsContext,
	LIST_FILTER_TYPE_PROGRAM,
	FilterFormatTrainingEnum,
	FilterTypeProgramEnum,
	FiltersEnum
} from 'modules/programs-page/fractals'
import stls from './FilterTypeProgram.module.sass'

const FilterTypeProgram = () => {
	const { configPrograms, handlerSetConfigPrograms, router, setQueryURI } =
		useConfigProgramsContext()
	const [isShowFilter, setIsShowFilter] = useState(true)

	useEffect(() => {
		if (router.isReady) {
			if (router.query?.[FiltersEnum.filterTypeProgram]) {
				const isFilterInURL = Object.keys(FilterTypeProgramEnum).includes(
					router.query?.[FiltersEnum.filterTypeProgram]
				)

				isFilterInURL &&
					handlerSetConfigPrograms({
						[FiltersEnum.filterTypeProgram]:
							router.query?.[FiltersEnum.filterTypeProgram]
					})
			}
		}
	}, [router.isReady])

	useEffect(() => {
		if (router.isReady) {
			if (configPrograms?.[FiltersEnum.filterDirection]) {
				setQueryURI({
					...configPrograms,
					[FiltersEnum.filterDirection]: encodeURIComponent(
						configPrograms?.[FiltersEnum.filterDirection]
					)
				})
			} else {
				setQueryURI({ ...configPrograms })
			}
		}
	}, [configPrograms])

	const handlerOnChange = e => {
		if (
			e.target.value === FilterTypeProgramEnum.course ||
			e.target.value === FilterTypeProgramEnum.profession
		) {
			handlerSetConfigPrograms({
				[FiltersEnum.filterTypeProgram]: e.target.value,
				[FiltersEnum.filterTrainingFormat]: FilterFormatTrainingEnum.online
			})
		} else {
			handlerSetConfigPrograms({
				[FiltersEnum.filterTypeProgram]: e.target.value
			})
		}
	}

	return (
		<div className={stls.filterTypeProgram}>
			<p
				className={stls.filterTitle}
				onClick={() => setIsShowFilter(isShowFilter => !isShowFilter)}>
				Тип программы <span className={stls.sale}>-45%</span>
				<span
					className={`${stls.circle} ${isShowFilter ? stls.isShowCircle : ''}`}>
					<svg
						width='14'
						height='8'
						viewBox='0 0 14 8'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M13 7L7 1L1 7'
							stroke='white'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</span>
			</p>
			<div className={isShowFilter ? stls.isShowFilter : ''}>
				{LIST_FILTER_TYPE_PROGRAM.map(item => (
					<div key={item.value} className={stls.itemFilterTypeProgram}>
						<input
							type='radio'
							name={FiltersEnum.filterTypeProgram}
							value={item.value}
							id={item.value}
							onChange={e => handlerOnChange(e)}
							checked={
								item.value === configPrograms?.[FiltersEnum.filterTypeProgram]
							}
						/>
						<label className={stls.labelModalSorting} htmlFor={item.value}>
							{item.text}
						</label>
					</div>
				))}
				<Link legacyBehavior href='/programs/executive'>
					<a className={stls.highlight}>
						Executive MBA <span className={stls.premium}>Premium</span>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default FilterTypeProgram
