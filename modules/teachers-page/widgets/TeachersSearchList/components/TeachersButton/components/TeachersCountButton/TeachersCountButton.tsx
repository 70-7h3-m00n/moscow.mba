import stls from './TeachersCountButton.module.sass'
import cn from 'classnames'

import useAt from '@/hooks/useAt'
import { useTeachersSearch } from 'modules/teachers-page/fractals/context/context'
import { ACTION } from 'modules/teachers-page/fractals/context/reducer'
import { TeachersCountButtonProps } from './types'

export const TeachersCountButton = ({
	className,
	...rest
}: TeachersCountButtonProps) => {
	const at = useAt()
	const { state, dispatch } = useTeachersSearch()
	const { shownTeachersCount, teachers, showMoreTeachersAddedNum, searchTerm } =
		state

	const handleOnClick = () => {
		dispatch({
			type: ACTION.SET_SHOWN_TEACHERS_COUNT,
			payload: shownTeachersCount + showMoreTeachersAddedNum
		})
	}

	const remainingTeachersCount = searchTerm
		? Math.max(teachers?.length - shownTeachersCount, 0)
		: showMoreTeachersAddedNum

	const getTotalTeachersCountText = () => {
		const totalTeachersCount = teachers?.length || 0
		return at.en
			? 'Show more'
			: `Ещё ${remainingTeachersCount} преподавателей${
					totalTeachersCount ? ` из ${totalTeachersCount}` : ''
			  }`
	}

	return (
		<button
			className={cn('button', className, stls.btnShowMore, {
				[stls.atTeachers]: at.teachers
			})}
			onClick={handleOnClick}
			{...rest}
		>
			{getTotalTeachersCountText()}
		</button>
	)
}
