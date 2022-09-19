import { GetStaticPropsContext } from 'next'
import {
  TypePageJournalArticlesProps,
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import { createBlended } from '@/helpers/index'
import { routesBack } from 'config'

const getStaticPropsPageJournalArticles = async ({
  context
}: {
  context: GetStaticPropsContext
}): Promise<{
  props: TypePageJournalArticlesProps
  revalidate: number | boolean
}> => {
  const gspContextParamsJournalArticle =
    context?.params?.journalArticle?.toString() || null
  const urlJournal = `${routesBack.root}${routesBack.journal}`
  const res = await fetch(urlJournal)
  const data = await res.json()
  return {
    props: {
      ...data,
      programs: createBlended(data?.programs),
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageJournalArticles
