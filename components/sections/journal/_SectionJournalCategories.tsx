import stls from '@/styles/components/sections/journal/SectionJournalCategories.module.sass'
import { TypeClassNames } from '@/types/index'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextJournalContext } from '@/context/index'
import { Wrapper } from '@/components/layout'

type TypeSectionJournalCategoriesProps = TypeClassNames

const SectionJournalCategories = ({
  classNames
}: TypeSectionJournalCategoriesProps) => {
  const {
    journalCategories,
  } = useContext(ContextJournalContext)

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <ul className={stls.categories}>
          <li className={stls.categoryItem}>
            {'categories' === gspContextParamsJournalCategory ||
            !gspContextParamsJournalCategory ? (
              <div className={cn(stls.category, stls.isActive)}>
                Все&nbsp;форматы
              </div>
            ) : (
              <Link href={routesFront.journal}>
                <a className={cn(stls.category)}>Все&nbsp;форматы</a>
              </Link>
            )}
          </li>
          {journalCategories
            ?.filter(category => category.title && category.slug)
            .map(category => (
              <li key={category.slug} className={stls.categoryItem}>
                <Link href={routesFront.journal}>
                  <a
                    className={cn(stls.category, {
                      [stls.isActive]:
                        category.slug === gspContextParamsJournalCategory
                    })}>
                    {category.title}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionJournalCategories
