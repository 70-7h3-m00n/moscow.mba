



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
  // return { props: { data } }



  return {
    props: {
      ...data,
      programs: createBlended(data?.programs)
      
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageJournalArticle
