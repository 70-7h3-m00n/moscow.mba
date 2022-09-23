import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { useState } from 'react'

import { TypePageJournalArticlesProps } from '@/types/index'

import { ContextStaticPropsJournal } from '@/context/index'

import { routesFront } from '@/config/index'

import { handleGetStaticProps } from '@/lib/index'

import { usePageHandleContext } from '@/hooks/index'

import { PageJournalArticles } from '@/components/pages'

const PageJournal: NextPage<TypePageJournalArticlesProps> = ({
  programs,
  journalCategories,
  journalArticles,
}) => {
  usePageHandleContext({
    programs
  })
  const [categories, setCategories] = useState(journalCategories || null)
  const [articles, setArticles] = useState(journalArticles || null)
  return (
    <ContextStaticPropsJournal.Provider value={{
      categories,
      setCategories,
      articles,
      setArticles
    }}>
      <PageJournalArticles />
    </ContextStaticPropsJournal.Provider>
  )
}

export default PageJournal

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.journal, context })
