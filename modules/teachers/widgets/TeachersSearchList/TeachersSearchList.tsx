import { useTeachersSearch } from 'modules/teachers/fractals/context/context'
import {
	TeachersNotFound,
	TeachersRequestForm,
	TeachersButton
} from './components'
import useAt from '@/hooks/useAt'

export function TeachersSearchList({}) {
	const at = useAt()
	const { state } = useTeachersSearch()
	const { searchTerm, UITeachers } = state

	return (
		<>
			{UITeachers?.length === 0 && searchTerm && <TeachersNotFound />}
			{UITeachers?.length === 0 && !searchTerm && <TeachersRequestForm />}
			{UITeachers?.length > 0 && <TeachersButton />}
		</>
	)
}
