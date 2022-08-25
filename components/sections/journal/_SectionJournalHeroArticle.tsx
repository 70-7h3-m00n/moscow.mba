import stls from '@/styles/components/sections/journal/SectionJournalHeroArticle.module.sass'
import { TypeClassNames } from '@/types/index'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextJournalContext } from '@/context/index'
import { Wrapper } from '@/components/layout'

type TypeSectionJournalHeroArticleProps = TypeClassNames

const SectionJournalHeroArticle = ({
  classNames
}: TypeSectionJournalHeroArticleProps) => {
  const { journalCategories, gspContextParamsJournalCategoryTag } = useContext(
    ContextJournalContext
  )

  return null

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper>SectionJournalHeroArticle</Wrapper>
    </section>
  )
}

export default SectionJournalHeroArticle
