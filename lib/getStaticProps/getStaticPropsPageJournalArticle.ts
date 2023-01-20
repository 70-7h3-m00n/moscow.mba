import { GetStaticPropsContext } from 'next'
import { TypePageJournalArticleProps } from '@/types/index'
import { routesBack } from '@/config/index'
import { revalidate } from '@/config/index'
import { createBlended } from '@/helpers/index'
import axios from 'axios'

const getStaticPropsPageJournalArticle = async ({
  context
}: {
  context: GetStaticPropsContext
}): Promise<{
  props: TypePageJournalArticleProps
  revalidate: number | boolean
}> => {
  const getData = async () => {
    try {
      const res = await axios.get(
        `${routesBack.root}${routesBack.getStaticPropsPageJournalArticles}/${context?.params?.journalArticle}`
      )

      const data = await res.data

      return data
    } catch (err) {
      console.error(`TYPE: ${err.type}. MESSAGE: ${err.message}`)
      return []
    }
  }

  const data = await getData()

  return {
    props: {
      ...data,
      programs: createBlended(data?.programs)
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageJournalArticle
