import stls from './FilterDirections.module.sass'
import cn from 'classnames'
import { FilterDirectionsProps } from './types'

import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { useContext } from 'react'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'

export const FilterDirections = ({
	className,
	directions
}: FilterDirectionsProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	const uniqueDirections = Object.keys(directions)

	const handlerOnClick = (fieldName: string) => {
		if (fieldName === state.direction) {
			dispatch({
				type: ACTION.SET_UI_PROGRAMS,
				payload: state.programs
			})
			dispatch({ type: ACTION.SET_DIRECTION, payload: null })
			return
		}

		const filteredByDirection = state.programs?.filter(
			program => program.study_field.name === fieldName
		)
		dispatch({
			type: ACTION.SET_UI_PROGRAMS,
			payload: filteredByDirection
		})
		dispatch({ type: ACTION.SET_DIRECTION, payload: fieldName })
	}

	return (
		<ul className={cn(className, stls.list)}>
			{uniqueDirections?.map(fieldName => (
				<li className={stls.item} key={fieldName}>
					<button
						className={cn(stls.item__btn, {
							[stls.active]: state.direction === fieldName
						})}
						onClick={() => handlerOnClick(fieldName)}
					>
						<span className={stls.item__name}> {fieldName} </span>
						<span className={stls.item__counter}>
							{directions[fieldName].length}
						</span>
					</button>
				</li>
			))}
		</ul>
	)
}
