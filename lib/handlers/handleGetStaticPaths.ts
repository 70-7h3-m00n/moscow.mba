import {
  TypeRoutesFront,
  TypePageProgramPaths,
  TypePageTeachersTeacherPaths,
  TypePageJournalArticlesPaths,
} from '@/types/index'
import { routesFront, fallback } from '@/config/index'
import {
  getStaticPathsPageProgram,
  getStaticPathsPageTeachersTeacher,
  getStaticPathsPageJournalArticles
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
    | []
  fallback: boolean | 'blocking'
}> => {
  try {
    switch (page) {
      case routesFront.program:
        return await getStaticPathsPageProgram({ format, type })

      case routesFront.teachersTeacher:
        return await getStaticPathsPageTeachersTeacher()

      case routesFront.journalArticles:
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
