import { useTeachersSearch } from 'modules/teachers-page/fractals/context/context'
import {
	TeachersNotFound,
	TeachersRequestForm,
	TeachersButton
} from './components'

export function TeachersSearchList({}) {
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
