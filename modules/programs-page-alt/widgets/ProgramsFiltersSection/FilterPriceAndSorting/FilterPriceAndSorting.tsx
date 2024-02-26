import stls from './FilterPriceAndSorting.module.sass'
import cn from 'classnames'
import { FilterPriceAndSortingProps } from './types'

import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { useContext } from 'react'
import { FilterPriceProgramEnum } from 'modules/programs-page-alt/fractals/enums'
import { LIST_FILTER_PRICE_PROGRAM } from 'modules/programs-page-alt/fractals/constants'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'
import { SortingPopup } from './SortingPopup/SortingPopup'

export const FilterPriceAndSorting = ({
	className,
	...rest
}: FilterPriceAndSortingProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	const handlerOnClick = (priceFilter: FilterPriceProgramEnum) => {
		console.log(state.price)

		if (priceFilter === state.price) {
			// dispatch({
			// 	type: ACTION.SET_UI_PROGRAMS,
			// 	payload: state.programs
			// })
			dispatch({ type: ACTION.SET_PRICE, payload: null })
			return
		}

		dispatch({ type: ACTION.SET_PRICE, payload: priceFilter })
	}

	return (
		<div className={cn(className, stls.list)} {...rest}>
			<ul className={stls.list}>
				{LIST_FILTER_PRICE_PROGRAM.map(priceFilter => (
					<li className={stls.item} key={priceFilter.value}>
						<button
							className={cn(stls.item__btn, {
								// [stls.active]: state.price === fieldName.value
							})}
							onClick={() => handlerOnClick(priceFilter.value)}
						>
							<span className={stls.item__name}> {priceFilter.text} </span>
							<span className={stls.item__counter}>{164}</span>
						</button>
					</li>
				))}
			</ul>
			<SortingPopup />
		</div>
	)
}
