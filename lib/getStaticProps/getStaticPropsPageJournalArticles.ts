import { GetStaticPropsContext } from 'next'
import {
  TypePageJournalArticlesProps,
  TypePageJournalArticlesPropsQuery
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
  // const res = await apolloClient.query<TypePageJournalArticlesPropsQuery>({
  //   query: gql`
  //     query GetStaticPropsPageJournalArticles {
  //       programs: products {
  //         _id
  //         id
  //         title
  //         slug
  //         studyFormat
  //         category {
  //           type
  //           slug
  //         }
  //         study_field {
  //           id
  //           name
  //           slug
  //           description
  //         }
  //       }
  //       journalCategories {
  //         title
  //         slug
  //       }
  //       journalTags {
  //         title
  //         slug
  //       }
  //       journalArticles {
  //         title
  //         slug
  //         journal_tag {
  //           title
  //           slug
  //         }
  //         journal_category {
  //           title
  //           slug
  //         }
  //         picture {
  //           url
  //           width
  //           height
  //         }
  //         shortDescription
  //         createdAt
  //       }
  //     }
  //   `
  // })
  return {
    props: {
      ...data,
      programs: createBlended(data?.programs),
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageJournalArticles
