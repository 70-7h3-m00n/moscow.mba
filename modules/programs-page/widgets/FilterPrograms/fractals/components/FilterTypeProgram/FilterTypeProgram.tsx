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
import useAt from '@/hooks/useAt'

const FilterTypeProgram = () => {
	const at = useAt()
	const { configPrograms, handlerSetConfigPrograms, router, setQueryURI } =
		useConfigProgramsContext()
	const [isShowFilter, setIsShowFilter] = useState(true)

	// if URI is loaded and there is 'filterTypeProgram' in it set configProgram
	useEffect(() => {
		if (at.programs && router.isReady) {
			const typeOfProgram = at.mba
				? FilterTypeProgramEnum.mba
				: at.mini
				? FilterTypeProgramEnum.mini
				: at.profession
				? FilterTypeProgramEnum.profession
				: at.course
				? FilterTypeProgramEnum.course
				: FilterTypeProgramEnum.all

			handlerSetConfigPrograms({
				[FiltersEnum.filterTypeProgram]: typeOfProgram
			})

			// if (router.query?.[FiltersEnum.filterTypeProgram]) {
			//  const isFilterInURL = Object.keys(FilterTypeProgramEnum).includes(
			//   router.query?.[FiltersEnum.filterTypeProgram]
			//  )

			//  isFilterInURL &&
			//   handlerSetConfigPrograms({
			//    [FiltersEnum.filterTypeProgram]:
			//     router.query?.[FiltersEnum.filterTypeProgram]
			//   })
			// }
		}
	}, [router.isReady])

	// if URI is loaded and there is 'filterDirection' set configPrograms
	useEffect(() => {
		if (router.isReady) {
			if (
				configPrograms?.[FiltersEnum.filterDirection] &&
				configPrograms?.[FiltersEnum.filterDirection] !== 'all'
			) {
				setQueryURI({
					...configPrograms,
					[FiltersEnum.filterDirection]: encodeURIComponent(
						configPrograms?.[FiltersEnum.filterDirection]
					)
				})
			} else {
				if (configPrograms.sorting === 'default') {
					setQueryURI(null)
				} else {
					setQueryURI({
						...configPrograms
					})
				}
			}
		}
	}, [configPrograms])

	// if type program radio button is clicked set configPrograms new type
	const handlerOnChange = e => {
		if (
			e.target.value === FilterTypeProgramEnum.course ||
			e.target.value === FilterTypeProgramEnum.profession
		) {
			router.push(
				{
					pathname: `/programs/${e.target.value}/online`
				},
				undefined,
				{ scroll: false }
			)
		} else if (e.target.value === FilterTypeProgramEnum.all) {
			router.push(
				{
					pathname: `/programs`
				},
				undefined,
				{ scroll: false }
			)
		} else {
			router.push(
				{
					pathname: `/programs/${e.target.value}/${configPrograms.filterTrainingFormat}`
				},
				undefined,
				{ scroll: false }
			)
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
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
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
