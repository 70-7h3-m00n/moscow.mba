import stls from '@/styles/components/sections/journal/SectionJournalAllArticles.module.sass'
import { TypeClassNames } from '@/types/index'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextJournalContext } from '@/context/index'
import { GeneralJournalSectionTitle } from '@/components/general'
import { Wrapper } from '@/components/layout'
import { CardJournalArticle } from '@/components/cards'

type TypeSectionJournalAllArticlesProps = TypeClassNames

const SectionJournalAllArticles = ({
  classNames
}: TypeSectionJournalAllArticlesProps) => {
  const {
    journalCategories,
    gspContextParamsJournalCategoryTag,
    journalArticles
  } = useContext(ContextJournalContext)

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <GeneralJournalSectionTitle>Все материалы</GeneralJournalSectionTitle>
        <ul className={stls.articles}>
          {journalArticles
            ?.filter((article, idx) => idx < 4)
            .map(article => (
              <li key={article.slug} className={stls.articleItem}>
                <CardJournalArticle article={article} />
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionJournalAllArticles
