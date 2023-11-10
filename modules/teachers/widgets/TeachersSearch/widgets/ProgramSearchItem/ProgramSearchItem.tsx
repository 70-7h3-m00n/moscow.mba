import stls from './ProgramSearchItem.module.sass'
import cn from 'classnames'
import { ProgramSearchItemProps } from './types'

import { useTeachersSearch } from 'modules/teachers/fractals/context/context'
import { ACTION } from 'modules/teachers/fractals/context/reducer'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const ProgramSearchItem = ({ program }: ProgramSearchItemProps) => {
	const router = useRouter()
	const { dispatch } = useTeachersSearch()

	const applySearchTermToUrl = (title: string | null = '') => {
		dispatch({
			type: ACTION.APPLY_SEARCH_TERM_TO_URL,
			payload: { searchTerm: title, searchTermIsApplied: !!title }
		})

		router.replace({ query: { q: encodeURIComponent(title) } }, undefined, {
			shallow: true,
			scroll: false
		})
	}

	const setSearchInputIsFocused = (status: boolean): void => {
		dispatch({
			type: ACTION.SET_SEARCH_TERM_INPUT_FOCUSED,
			payload: status
		})
	}

	return (
		<li className={stls.searchResult}>
			<button
				// href='#!'
				className={cn('Teachers_search_result', stls.searchResultLink)} // should be unique className and only used here for onBlur handler
				onClick={() => {
					applySearchTermToUrl(program?.title || null)
					setSearchInputIsFocused(false)
				}}
				onBlur={e =>
					!e.relatedTarget?.classList?.contains('Teachers_search_result') &&
					setSearchInputIsFocused(false)
				}
			>
				<p className={stls.searchResultTitle}>{program?.title}</p>
				<div className={stls.searchResultLabel}>
					{program?.category?.type === 'mini'
						? 'Mini MBA'
						: program?.category?.type === 'mba'
						? 'MBA'
						: program?.category?.type === 'profession'
						? 'Профессия'
						: 'MBA'}
				</div>
			</button>
		</li>
	)
}