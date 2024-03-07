import stls from './FilterTags.module.sass'
import cn from 'classnames'
import { FilterTagsProps } from './types'

import { Tag } from 'modules/program-page/widgets'
import { IconCloseAlt, IconRefresh } from '@/components/icons'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'
import { SortingEnum } from 'modules/programs-page-alt/fractals'
import { useContext } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'

const array = ['курс', 'продолжительность', 'с трудоустройством', 'four']

export const FilterTags = ({ className, ...rest }: FilterTagsProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	const handlerClearFilters = () => {
		dispatch({ type: ACTION.SET_SORTING, payload: SortingEnum.popular })
		dispatch({ type: ACTION.SET_DIRECTION, payload: null })
		dispatch({ type: ACTION.SET_PRICING, payload: null })
		dispatch({ type: ACTION.SET_DURATION, payload: null })
		dispatch({ type: ACTION.SET_EMPLOYMENT, payload: null })
	}

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<ul className={stls.list}>
				{array.map(el => (
					<li className={stls.item} key={el}>
						<Tag variant='theta'>
							<span className={stls.item__text}>{el}</span>
							<IconCloseAlt className={stls.item__close} />
						</Tag>
					</li>
				))}
				<li>
					<button className={stls.clearBtn} onClick={handlerClearFilters}>
						Очистить фильтры <IconRefresh />
					</button>
				</li>
			</ul>
		</div>
	)
}
