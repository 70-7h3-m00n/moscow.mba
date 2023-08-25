import {
	TypeRoutesFront,
	TypePageProgramPaths,
	TypePageTeachersTeacherPaths,
	TypePageJournalArticlesPaths,
	TypePageSeminarPaths
} from '@/types/index'
import { routesFront, fallback } from '@/config/index'
import {
	getStaticPathsPageProgram,
	getStaticPathsPageTeachersTeacher,
	getStaticPathsPageJournalArticles,
	getStaticPathsPageSeminar
} from '@/lib/index'

type TypeHandleGetStaticPathsProps = {
	page: TypeRoutesFront[keyof TypeRoutesFront]
	format?: string
	type?: string
}

const handleGetStaticPaths = async ({
	page,
	format,
	type
}: TypeHandleGetStaticPathsProps): Promise<{
	paths:
		| TypePageProgramPaths
		| TypePageTeachersTeacherPaths
		| TypePageJournalArticlesPaths
		| TypePageSeminarPaths
		| []
	fallback: boolean | 'blocking'
}> => {
	try {
		switch (page) {
			case routesFront.program:
				return await getStaticPathsPageProgram({ format, type })

			case routesFront.teachersTeacher:
				return await getStaticPathsPageTeachersTeacher()

			case routesFront.seminar:
				return await getStaticPathsPageSeminar()

			case routesFront.journalArticles:
				return await getStaticPathsPageJournalArticles()

			case routesFront.seminar:
				return await getStaticPathsPageJournalArticles()

			default:
				return {
					paths: [],
					fallback: fallback.default
				}
		}
	} catch (err) {
		console.error(err)
		return {
			paths: [],
			fallback: fallback.default
		}
	}
}

export default handleGetStaticPaths
