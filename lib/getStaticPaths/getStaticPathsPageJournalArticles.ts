import { fallback, routesBack } from '@/config/index'
import { TypePageJournalArticlesPaths } from '@/types/index'
import axios from 'axios'

const getStaticPathsPageJournalCategory = async (): Promise<{
  paths: TypePageJournalArticlesPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await axios.get(
    `${routesBack.root}${routesBack.getStaticPathsPageJournalArticles}`
  )

  const paths = res.data

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
