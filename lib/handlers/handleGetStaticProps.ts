import { GetStaticPropsContext } from 'next'
import {
  TypePageDefaultProps,
  TypePageHomeProps,
  TypeRoutesFront,
  TypePageJournalArticlesProps,
  TypePageProgramProps,
  TypePageProgramsProps,
  TypePagePromoProps,
  TypePageTeachersProps,
  TypePageTeacherProps
} from '@/types/index'
import { routesFront, revalidate } from '@/config/index'
import {
  getStaticPropsTeacher,
  getStaticPropsTeachers,
  getStaticPropsDefault,
  getStaticPropsPrograms,
  getStaticPropsProgram,
  getStaticPropsPagePromo,
  getStaticPropsPageJournalArticles,
  getStaticPropsPageJournalArticle
} from '@/lib/index'

type TypeHandleGetStaticPropsProps = {
  page?: TypeRoutesFront[keyof TypeRoutesFront]
  context: GetStaticPropsContext
  format?: string | null
  type?: string | null
  slug?: string | null
}

const handleGetStaticProps = async ({
  page,
  context,
  format,
  type,
  slug
}: TypeHandleGetStaticPropsProps): Promise<{
  props:
    | TypePageDefaultProps
    | TypePageHomeProps
    | TypePageJournalArticlesProps
    | TypePageProgramProps
    | TypePageProgramsProps
    | TypePagePromoProps
    | TypePageTeachersProps
    | TypePageTeacherProps
    | null
  revalidate: number | boolean
}> => {
  try {
    switch (page) {
      case routesFront.journal:
        return await getStaticPropsPageJournalArticles({ context })

      case routesFront.journalArticles:
        return await getStaticPropsPageJournalArticle({ context })

      case routesFront.programs:
        return await getStaticPropsPrograms({ context })

      case routesFront.program:
        return await getStaticPropsProgram({ context, format, type, slug })

      case routesFront.teachers:
        return await getStaticPropsTeachers({ context })

      case routesFront.teachersTeacher:
        return await getStaticPropsTeacher({ context })

      case routesFront.webinarsArchive:
        return await getStaticPropsDefault({ context })

      case routesFront.webinars:
        return await getStaticPropsDefault({ context })

      case routesFront.webinarsUpcoming:
        return await getStaticPropsDefault({ context })

      case routesFront.about:
        return await getStaticPropsTeachers({ context })

      case routesFront.contact:
        return await getStaticPropsDefault({ context })

      case routesFront.home:
        return await getStaticPropsDefault({ context })

      case routesFront.legal:
        return await getStaticPropsDefault({ context })

      case routesFront.payment:
        return await getStaticPropsDefault({ context })

      case routesFront.promo:
        return await getStaticPropsPagePromo({ context })

      default:
        return await getStaticPropsDefault({ context })
    }
  } catch (err) {
    console.error(err)
    return {
      props: {
        programs: []
      },
      revalidate: revalidate.default
    }
  }
}

export default handleGetStaticProps
