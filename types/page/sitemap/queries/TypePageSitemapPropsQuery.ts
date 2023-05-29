import {
	TypeLibJournalArticles,
	TypeLibPrograms,
	TypeLibTeachers
} from '@/types/index'

type TypePageSitemapPropsQuery = {
	readonly programs: TypeLibPrograms | null
	readonly journalArticles: TypeLibJournalArticles | null
	readonly teachers: TypeLibTeachers | null
}

export default TypePageSitemapPropsQuery
