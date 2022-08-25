import stls from '@/styles/components/sections/journal/SectionJournalHeroTag.module.sass'
import { TypeClassNames } from '@/types/index'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextJournalContext } from '@/context/index'
import { Wrapper } from '@/components/layout'

type TypeSectionJournalHeroTagProps = TypeClassNames

const SectionJournalHeroTag = ({
  classNames
}: TypeSectionJournalHeroTagProps) => {
  const { journalCategories, gspContextParamsJournalCategoryTag } = useContext(
    ContextJournalContext
  )

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper>SectionJournalHeroTag</Wrapper>
    </section>
  )
}

export default SectionJournalHeroTag
