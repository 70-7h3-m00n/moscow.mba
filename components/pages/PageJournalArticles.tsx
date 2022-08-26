import stls from '@/styles/components/pages/PageJournalArticles.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContextJournalContext } from '@/context/index'

import {
  SectionJournalCategories,
  SectionJournalArticles
} from '@/components/sections'

// type TypePageJournalArticlesProps = {}

const PageJournalArticles = () => {
  return (
    <>
      <SectionJournalCategories classNames={[stls.sectionJournalCategories]} />
      <SectionJournalArticles />
      {/* <SectionJournalTags />
      <SectionJournalCategories />
      <SectionJournalHeroArticle />
      <SectionJournalAllArticles />
      <SectionJournalNews />
      <SectionJournalTagsWithPictures />
      <SectionJournalTagedArticles />
      {journalTags?.map(tag => (
        <SectionJournalTagedArticles key={tag?.slug} tag={tag} />
      ))}
      <SectionJournalMoreTags /> */}
    </>
  )
}

export default PageJournalArticles
