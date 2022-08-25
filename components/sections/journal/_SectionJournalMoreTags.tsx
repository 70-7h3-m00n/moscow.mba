import stls from '@/styles/components/sections/journal/SectionJournalMoreTags.module.sass'
import { TypeClassNames } from '@/types/index'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextJournalContext } from '@/context/index'
import { GeneralJournalSectionTitle } from '@/components/general'
import { Wrapper } from '@/components/layout'

type TypeSectionJournalMoreTagsProps = TypeClassNames

const SectionJournalMoreTags = ({
  classNames
}: TypeSectionJournalMoreTagsProps) => {
  const { journalTags, gspContextParamsJournalCategory } = useContext(
    ContextJournalContext
  )

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <GeneralJournalSectionTitle>
          больше интересных <span className={stls.highlight}>#&nbsp;</span>тегов
        </GeneralJournalSectionTitle>

        <ul className={stls.tags}>
          {journalTags
            ?.filter(tag => tag.title && tag.slug)
            .map(tag => (
              <li key={tag.slug} className={stls.tagItem}>
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

export default SectionJournalMoreTags
