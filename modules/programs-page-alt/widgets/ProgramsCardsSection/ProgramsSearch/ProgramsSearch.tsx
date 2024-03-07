import stls from './ProgramsSearch.module.sass'
import cn from 'classnames'
import { ProgramsSearchProps } from './types'

import { FilterEmployment } from '../FilterEmployment/FilterEmployment'
import { Search } from '../Search/Search'
import FilterDuration from '../FilterDuration/FilterDuration'

export const ProgramsSearch = ({ className, ...rest }: ProgramsSearchProps) => {
	return (
		<div className={cn(className, stls.content)} {...rest}>
			<Search />
			<FilterEmployment />
			<FilterDuration />
		</div>
	)
}
