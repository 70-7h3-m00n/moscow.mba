import { TypeLibPrograms, TypeLibUntil } from '@/types/index'

type TypePagePromoPropsQuery = {
	readonly until: TypeLibUntil | null
	readonly programs: TypeLibPrograms | null
}

export default TypePagePromoPropsQuery
