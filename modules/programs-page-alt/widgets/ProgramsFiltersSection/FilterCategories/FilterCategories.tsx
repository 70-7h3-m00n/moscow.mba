import stls from './FilterCategories.module.sass'
import cn from 'classnames'
import { FilterCategoriesProps } from './types'

import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { useContext } from 'react'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'
import {
	FilterTypeProgramEnum,
	LIST_FILTER_TYPE_PROGRAM
} from 'modules/programs-page-alt/fractals'
import { InfoTooltip } from '@/components/popups/InfoTooltip/InfoTooltip'
import Link from 'next/link'

export const FilterCategories = ({ className }: FilterCategoriesProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	const handlerOnClick = (value: FilterTypeProgramEnum) => {
		dispatch({ type: ACTION.SET_TYPE, payload: value })
	}

	return (
		<ul className={cn(className, stls.list)}>
			{LIST_FILTER_TYPE_PROGRAM?.map((category, idx) => (
				<li className={stls.item} key={idx}>
					<Link
						// href={category.src}
						href={'#'}
						className={cn(stls.item__link, {
							[stls.active]: category.value === state.programsConfig.type
						})}
						onClick={() => handlerOnClick(category.value)}
					>
						<span className={cn(stls.item__name)}>
							{category.text}{' '}
							{category.value === FilterTypeProgramEnum.executive && (
								<span className={stls.premium}>Premium</span>
							)}
						</span>
					</Link>
					{category.description && (
						<InfoTooltip className={stls.info} color='#18191A' textColor='#fff'>
							<p className={stls.infoDescription}>{category.description}</p>
						</InfoTooltip>
					)}
				</li>
			))}
		</ul>
	)
}
