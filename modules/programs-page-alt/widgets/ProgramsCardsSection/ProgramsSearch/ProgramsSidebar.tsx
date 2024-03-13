import stls from './ProgramsSidebar.module.sass'
import cn from 'classnames'
import { ProgramsSidebarProps } from './types'

import { FilterEmployment } from '../FilterEmployment/FilterEmployment'
import { Search } from '../Search/Search'
import FilterDuration from '../FilterDuration/FilterDuration'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { useContext } from 'react'

export const ProgramsSidebar = ({
	className,
	...rest
}: ProgramsSidebarProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)
	return (
		<div className={cn(className, stls.content)} {...rest}>
			<Search />
			<FilterEmployment />
			<FilterDuration />
			<div>
				{' '}
				{JSON.stringify(state.programsConfig)
					.replace(/[{}]/g, '')
					.split(',')
					.map((el, idx) => (
						<p key={idx}>{el}</p>
					))}
			</div>
		</div>
	)
}
