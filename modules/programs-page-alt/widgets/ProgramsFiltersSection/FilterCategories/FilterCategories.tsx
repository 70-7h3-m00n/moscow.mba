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
import routesFront from '@/config/routesFront'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export const FilterCategories = ({ className }: FilterCategoriesProps) => {
	const router = useRouter()
	const { state, dispatch } = useContext(ProgramsPageContext)

	const handlerOnClick = (value: FilterTypeProgramEnum) => {
		// if (value === FilterTypeProgramEnum.executive) {
		// 	router.push(routesFront.programsExecutive)
		// 	return
		// }

		dispatch({ type: ACTION.SET_TYPE, payload: value })
		dispatch({
			type: ACTION.SET_EMPLOYMENT,
			payload:
				value === FilterTypeProgramEnum.mba ||
				value === FilterTypeProgramEnum.mini ||
				value === FilterTypeProgramEnum.all
		})
	}

	return (
		<ul className={cn(className, stls.list)}>
			{LIST_FILTER_TYPE_PROGRAM?.map((category, idx) => (
				<>
					<li className={stls.item} key={idx}>
						<button
							className={cn(stls.item__link, {
								[stls.active]: category.value === state.programsConfig.type
							})}
							onClick={() => handlerOnClick(category.value)}
						>
							<span className={cn(stls.item__name)}>{category.text}</span>
						</button>
						{category.tooltip && (
							<InfoTooltip
								className={stls.info}
								color='#18191A'
								textColor='#fff'
								programsPageActive={
									category.value === state.programsConfig.type
								}
							>
								<p className={stls.infoDescription}>{category.tooltip}</p>
							</InfoTooltip>
						)}
					</li>
				</>
			))}
			<li>
				<Link
					href={`${routesFront.root}${routesFront.programsExecutive}`}
					className={cn(stls.item__link)}
				>
					<span className={cn(stls.item__name)}>
						{'Executive MBA '}
						<span className={stls.premium}>Premium</span>
					</span>
				</Link>
			</li>
		</ul>
	)
}
