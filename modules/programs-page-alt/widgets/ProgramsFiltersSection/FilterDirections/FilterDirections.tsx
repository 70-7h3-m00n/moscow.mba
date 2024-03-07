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
		const newDirection =
			fieldName === state.programsConfig.direction ? null : fieldName
		dispatch({ type: ACTION.SET_DIRECTION, payload: newDirection })
	}

	return (
		<ul className={cn(className, stls.list)}>
			{uniqueDirections?.map(fieldName => (
				<li className={stls.item} key={fieldName}>
					<button
						className={cn(stls.item__btn, {
							[stls.active]: state.programsConfig.direction === fieldName
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
