import stls from './Search.module.sass'
import cn from 'classnames'
import { SearchProps } from './types'

import { IconSearch } from './assets/IconSearch/IconSearch'
import { IconCloseAlt } from '@/components/icons'
import { useContext, useEffect, useState } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'
import useDebounce from '@/hooks/useDebounce'
import useDecodedInput from '@/hooks/useDecodedInput'

export const Search = ({ className, ...rest }: SearchProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	// console.log(
	// 	'state.programsConfig.searchTerm =>>>>',
	// 	state.programsConfig.searchTerm
	// )

	// const { clearInput, handleInput, searchTerm, decodedEnInput } =
	// useDecodedInput('')

	const [searchTerm, setSearchTerm] = useState('')

	// Используем кастомный хук useDebounce для задержки обновления searchTerm
	const debouncedSearchTerm = useDebounce(searchTerm, 300)

	useEffect(() => {
		// В этом useEffect обновляем поисковый запрос при изменении debouncedSearchTerm
		dispatch({ type: ACTION.SET_SEARCH_TERM, payload: debouncedSearchTerm })
	}, [debouncedSearchTerm])

	const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
	}

	const handlerClearSearch = () => {
		setSearchTerm('')
	}

	const placeholder = 'Какую программу вы ищете'
	return (
		<div className={cn(className, stls.content)} {...rest}>
			<IconSearch className={stls.icon} />
			<input
				className={stls.input}
				type='text'
				placeholder={placeholder}
				value={searchTerm}
				onChange={event => handlerOnChange(event)}
				autoComplete='off'
			/>
			<button className={stls.clear} onClick={handlerClearSearch}>
				<IconCloseAlt className={stls.clear__icon} />
			</button>
		</div>
	)
}
