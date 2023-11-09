import stls from './TeachersCountButton.module.sass'
import cn from 'classnames'

import useAt from '@/hooks/useAt'
import { useTeachersSearch } from 'modules/teachers/fractals/context/context'
import { ACTION } from 'modules/teachers/fractals/context/reducer'
import { TeachersCountButtonProps } from './types'

export const TeachersCountButton = ({
	className,
	...rest
}: TeachersCountButtonProps) => {
	const at = useAt()
	const { state, dispatch } = useTeachersSearch()
	const {
		shownTeachersCount,
		teachers,
		showMoreTeachersAddedNum,
		searchTerm,
		atStandAlonePage
	} = state

	const handleOnClick = () => {
		dispatch({
			type: ACTION.SET_SHOWN_TEACHERS_COUNT,
			payload: shownTeachersCount + showMoreTeachersAddedNum
		})
	}

	console.log('searchTerm: ', searchTerm)
	console.log(
		'Math.max(teachers?.length - shownTeachersCount, 0): ',
		Math.max(teachers?.length - shownTeachersCount, 0)
	)
	console.log('showMoreTeachersAddedNum: ', showMoreTeachersAddedNum)

	const remainingTeachersCount =
		searchTerm || !atStandAlonePage
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
