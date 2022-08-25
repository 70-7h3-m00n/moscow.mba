import stls from '@/styles/components/sections/journal/SectionJournalTags.module.sass'
import { TypeClassNames } from '@/types/index'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextJournalContext } from '@/context/index'
import { GeneralJournalSectionTitle } from '@/components/general'
import { Wrapper } from '@/components/layout'

type TypeSectionJournalTagsProps = TypeClassNames

const SectionJournalTags = ({ classNames }: TypeSectionJournalTagsProps) => {
  const {
    journalTags,
    gspContextParamsJournalCategory,
    gspContextParamsJournalCategoryTag
  } = useContext(ContextJournalContext)

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <ul className={stls.tags}>
          {journalTags
            ?.filter(tag => tag.title && tag.slug)
            .map(tag => (
              <li
                key={tag.slug}
                className={cn(stls.tagItem, {
                  [stls.isActive]:
                    tag.slug === gspContextParamsJournalCategoryTag
                })}>
                <Link href={routesFront.journal}>
                  <a className={stls.tag}>#{tag.title}</a>
                </Link>
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionJournalTags
