import stls from './TeachersSearchItem.module.sass'
import cn from 'classnames'
import { TeachersSearchItemProps } from './types'

import { useTeachersSearch } from 'modules/teachers/fractals/context/context'
import Link from 'next/link'

export const TeachersSearchItem = ({ teacher }: TeachersSearchItemProps) => {
	return (
		<li className={stls.searchResult}>
			<Link
				href={`/teachers/${teacher.slug}`}
				className={cn('Teachers_search_result', stls.searchResultLink)}
			>
				<p className={stls.searchResultTitle}>{teacher?.name}</p>
			</Link>
		</li>
	)
}
