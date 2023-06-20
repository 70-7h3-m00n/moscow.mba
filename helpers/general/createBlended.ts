import { TypePrograms } from '@/types/index'
import { categories, studyFormats } from '@/config/index'
import { v4 as uuidv4 } from 'uuid'

const createBlended = (programs: TypePrograms) => [
	...programs,
	...programs
		?.filter(
			program =>
				program?.category?.type === categories.mini ||
				program?.category?.type === categories.mba
		)
		?.map(program => {
			const id = uuidv4()
			return { ...program, studyFormat: studyFormats.blended, id, _id: id }
		})
]

export default createBlended
