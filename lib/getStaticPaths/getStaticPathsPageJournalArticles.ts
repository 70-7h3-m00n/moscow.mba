import { TypePageJournalArticlesPaths } from '@/types/index'
import axios from 'axios'
import { fallback, routesBack } from '@/config/index'

const getStaticPathsPageJournalCategory = async (): Promise<{
  paths: TypePageJournalArticlesPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await axios.get(
    `${routesBack.root}${routesBack.getStaticPathsPageJournalArticles}`
  )

  const paths = res.data.paths

  return {
    paths,
    fallback: fallback.default
  }

  // return {
  //   paths,
  //   fallback: false
  // }

  // return {
  // paths: Array.from(
  //   new Set(
  //     res.data?.journalArticles?.map(article => ({
  //       params: {
  //         journalCategory:
  //           article?.journal_category?.slug || 'journalCategory'
  //       }
  //     }))
  //   )
  // ) || [{ params: { journalCategory: 'journalCategory' } }],
  // fallback: fallback.default
}

export default getStaticPathsPageJournalCategory
