import stls from './TeachersSearchLink.module.sass'
import cn from 'classnames'
import TeachersSearchLinkProps from './props'

import { useTeachersSearch } from 'modules/teachers-page/fractals/context/context'
import { ACTION } from 'modules/teachers-page/fractals/context/reducer'
import Link from 'next/link'

export const TeachersSearchLink = ({ teacher }: TeachersSearchLinkProps) => {
	const { dispatch } = useTeachersSearch()

	const setSearchInputIsFocused = (status: boolean): void => {
		dispatch({
			type: ACTION.SET_SEARCH_TERM_INPUT_FOCUSED,
			payload: status
		})
	}

	return (
		<li className={stls.searchResult}>
			<Link
				href={`/teachers/${teacher.slug}`}
				className={cn('Teachers_search_result', stls.searchResultLink)}>
				<p className={stls.searchResultTitle}>{teacher?.name}</p>
			</Link>
		</li>
	)
}
