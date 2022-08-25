import stls from '@/styles/pages/PageJournal.module.sass'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageJournalArticlesProps } from '@/types/index'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { PageJournalArticles } from '@/components/pages'
import { SeoOrganizationJsonLd } from '@/components/seo'

const PageJournal: NextPage<TypePageJournalArticlesProps> = ({
  programs,
  journalCategories,
  journalArticles,
}) => {
  usePageHandleContext({
    programs,
    journalCategories,
    journalArticles,
  })
  return (
    <>
      <PageJournalArticles />
    </>
  )
}

export default PageJournal

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.journal, context })
