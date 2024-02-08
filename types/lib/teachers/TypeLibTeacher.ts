import { TypeLibPicture } from '@/types/index'

type TypeLibTeacher = {
	name: string | null
	description: string | null
	slug: string | null
	lead?: boolean | null
	portrait: TypeLibPicture | null
	descriptionItems:
		| {
				item: string | null
		  }[]
		| null
	programs: string[] | null
}

export default TypeLibTeacher
