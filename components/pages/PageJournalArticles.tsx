import stls from '@/styles/components/pages/PageJournalArticles.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

import {
  SectionJournalCategories,
  SectionJournalArticles,
  SectionJournalHeroArticle
} from '@/components/sections'

const PageJournalArticles = () => {
  return (
    <>
      <SectionJournalCategories />
      <SectionJournalHeroArticle />
      <SectionJournalArticles />
    </>
  )
}

export default PageJournalArticles
