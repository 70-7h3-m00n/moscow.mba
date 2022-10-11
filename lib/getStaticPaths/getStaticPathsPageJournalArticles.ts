import { fallback, routesBack } from '@/config/index'

import {
  TypePageJournalArticlesPaths,
} from '@/types/index'

const getStaticPathsPageJournalCategory = async (): Promise<{
  paths: TypePageJournalArticlesPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await fetch(`${routesBack.root}${routesBack.getStaticPropsPageJournalArticles}`)
  const articles = await res.json()
  const paths = articles.journalArticles.map(article => (
    {
      params: { journalArticle: article.slug }
    }
  ))
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
