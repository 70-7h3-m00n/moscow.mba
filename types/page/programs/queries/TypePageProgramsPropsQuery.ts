import { TypeLibPrograms, TypeLibUntil } from '@/types/index'

type TypePageProgramsPropsQuery = {
	readonly programs: TypeLibPrograms | null
	readonly until: TypeLibUntil | null
}

export default TypePageProgramsPropsQuery
