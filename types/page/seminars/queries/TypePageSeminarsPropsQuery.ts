import {
	TypeLibPrograms,
	TypeLibSeminarCategories,
	TypeLibSeminars
} from '@/types/index'

type TypePageSeminarsProps = {
	readonly programs: TypeLibPrograms | null
	readonly seminarCategories: TypeLibSeminarCategories
	readonly seminars: TypeLibSeminars
}

export default TypePageSeminarsProps
