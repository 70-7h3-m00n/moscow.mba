import useAt from '@/hooks/useAt'
import useDefaultTeachers from '@/hooks/useDefaultTeachers'
import { TypeLibTeachers } from '@/types/index'
import { useUITeachersProps } from './props'

export const useUITeachers = ({
	teachers,
	searchTerm,
	shownTeachersCount
}: useUITeachersProps): TypeLibTeachers => {
	const at = useAt()
	const defaultTeachers = useDefaultTeachers()

	return (
		teachers
			?.filter(teacher =>
				searchTerm
					? teacher?.programs?.some(program => program.includes(searchTerm))
					: teacher
			)
			.filter(
				(teacher, idx) =>
					teacher && (searchTerm ? teacher : idx < shownTeachersCount)
			) ||
		defaultTeachers?.filter(
			(teacher, idx) =>
				teacher && (at.programChunk ? teacher : idx < shownTeachersCount)
		)
	)
}
