import stls from './FilterCategory.module.sass'
import cn from 'classnames'
import { FilterCategoryType } from './types'

import { useEffect } from 'react'
import {
	useConfigProgramsContext,
	usePrograms,
	FiltersEnum
} from 'modules/programs-page/fractals'

const FilterCategory = ({}: FilterCategoryType) => {
	const { uniqueDirections, minMaxDuration } = usePrograms()
	const {
		handlerSetConfigPrograms,
		router,
		handlerDeleteConfigPrograms,
		configPrograms
	} = useConfigProgramsContext()

	const categories = uniqueDirections && ['all', ...uniqueDirections]

	const decodedFilterDirection = decodeURIComponent(
		router.query?.[FiltersEnum.filterDirection]
	)

	useEffect(() => {
		if (router.isReady) {
			if (router.query?.[FiltersEnum.filterDirection]) {
				const isFilterInURL = uniqueDirections?.includes(decodedFilterDirection)

				handlerSetConfigPrograms({
					[FiltersEnum.filterDirection]: isFilterInURL
						? decodeURIComponent(router.query?.[FiltersEnum.filterDirection])
						: 'all'
				})
			} else {
				handlerSetConfigPrograms({
					[FiltersEnum.filterDirection]: 'all'
				})
			}
		}

		return () => {
			handlerDeleteConfigPrograms(FiltersEnum.filterDirection)
		}
	}, [router.isReady, uniqueDirections?.[0]])

	const handlerOnClick = value => {
		handlerSetConfigPrograms({
			[FiltersEnum.filterDirection]: value
		})
	}

	return (
		<div className={cn(stls.categoriesWrapper)}>
			<ul className={stls.categoryList}>
				{categories
					?.filter(item => item)
					?.map(item => (
						<li key={item}>
							<button
								className={cn(stls.categoryBtn, {
									[stls.active]: item === configPrograms?.filterDirection
								})}
								onClick={() => handlerOnClick(item)}
							>
								{item === 'all' ? 'Все категории' : item}
							</button>
						</li>
					))}
			</ul>
		</div>
	)
}

export default FilterCategory
