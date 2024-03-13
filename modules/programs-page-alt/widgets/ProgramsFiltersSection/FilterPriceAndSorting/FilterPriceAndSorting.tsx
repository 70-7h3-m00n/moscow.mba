import stls from './FilterPriceAndSorting.module.sass'
import cn from 'classnames'
import { FilterPriceAndSortingProps } from './types'

import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { useContext } from 'react'
import { FilterPricingProgramEnum } from 'modules/programs-page-alt/fractals/enums'
import { LIST_FILTER_PRICE_PROGRAM } from 'modules/programs-page-alt/fractals/constants'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'
import { SortingPopup } from './SortingPopup/SortingPopup'

export const FilterPriceAndSorting = ({
	className,
	...rest
}: FilterPriceAndSortingProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	const handlerOnClick = (priceFilter: FilterPricingProgramEnum) => {
		const newPricing =
			priceFilter === state.programsConfig.pricing ? null : priceFilter
		dispatch({ type: ACTION.SET_PRICING, payload: newPricing })
	}

	return (
		<div className={cn(className, stls.list)} {...rest}>
			<ul className={stls.list}>
				{LIST_FILTER_PRICE_PROGRAM.map(priceFilter => (
					<li className={stls.item} key={priceFilter.value}>
						<button
							className={cn(stls.item__btn, {
								[stls.active]:
									state.programsConfig.pricing === priceFilter.value
							})}
							onClick={() => handlerOnClick(priceFilter.value)}
						>
							<span className={stls.item__name}> {priceFilter.text} </span>
							{/* <span className={stls.item__counter}>{164}</span> */}
						</button>
					</li>
				))}
			</ul>
			<SortingPopup />
		</div>
	)
}
