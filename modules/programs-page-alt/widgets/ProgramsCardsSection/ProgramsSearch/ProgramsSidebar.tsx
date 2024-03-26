import stls from './ProgramsSidebar.module.sass'
import cn from 'classnames'
import { ProgramsSidebarProps } from './types'

import { FilterEmployment } from '../FilterEmployment/FilterEmployment'
import { Search } from '../../../../../components/inputs/Search/Search'
import FilterDuration from '../FilterDuration/FilterDuration'

import { IconCloseAlt } from '@/components/icons'
import { useContext, useEffect, useState } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'
import useDebounce from '@/hooks/useDebounce'
import useDecodedInput from '@/hooks/useDecodedInput'

export const ProgramsSidebar = ({
	className,
	...rest
}: ProgramsSidebarProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	const [searchTerm, setSearchTerm] = useState('')

	const debouncedSearchTerm = useDebounce(searchTerm, 300)

	useEffect(() => {
		dispatch({ type: ACTION.SET_SEARCH_TERM, payload: debouncedSearchTerm })
	}, [debouncedSearchTerm])

	const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
	}

	const handlerClearSearch = () => {
		setSearchTerm('')
	}

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<Search
				type='text'
				placeholder={'Какую программу вы ищете'}
				value={searchTerm}
				onChange={event => handlerOnChange(event)}
				autoComplete='off'
				handlerClearSearch={handlerClearSearch}
			/>
			<FilterEmployment />
			<FilterDuration />
			<div>
				{/* {' '}
				{JSON.stringify(state.programsConfig)
					.replace(/[{}]/g, '')
					.split(',')
					.map((el, idx) => (
						<p key={idx}>{el}</p>
					))}
				<br />
				{JSON.stringify(state.durationConfig)
					.replace(/[{}]/g, '')
					.split(',')
					.map((el, idx) => (
						<p key={idx}>{el}</p>
					))} */}
			</div>
		</div>
	)
}
