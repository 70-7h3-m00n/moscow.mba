import { GetStaticPropsContext } from 'next'
import {
  TypePageJournalArticleProps
} from '@/types/index'
import {
  routesBack
} from '@/config/index'
import { revalidate } from '@/config/index'
import { createBlended } from '@/helpers/index'

const getStaticPropsPageJournalArticle = async ({
  context
}: {
  context: GetStaticPropsContext
}): Promise<{
  props: TypePageJournalArticleProps
  revalidate: number | boolean
}> => {
  const res = await fetch(`${routesBack.root}${routesBack.getStaticPropsPageJournalArticles}/${context?.params?.journalArticle}`)
  const data = await res.json()

  const getTables = async () => {
    const linkToTable = data.journalArticle.articleBody.filter(data => data.__typename === "ComponentJournalJournalTable")
    let tables = []
    for (let item of linkToTable) {
      const res = await fetch(item.htmlTableBody.url)
      const data = await res.text()
      tables.push(data)
    }
    return tables
  }

  const tables = await getTables()
  
  return {
    props: {
      ...data,
      programs: createBlended(data?.programs),
      journalArticleTables: tables

    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageJournalArticle
