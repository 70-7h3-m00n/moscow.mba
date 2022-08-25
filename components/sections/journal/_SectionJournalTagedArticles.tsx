import stls from '@/styles/components/sections/journal/SectionJournalTagedArticles.module.sass'
import { TypeClassNames, TypeLibJournalTag } from '@/types/index'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextJournalContext } from '@/context/index'
import { GeneralJournalSectionTitle } from '@/components/general'
import { Wrapper } from '@/components/layout'
import { CardJournalArticle } from '@/components/cards'

type TypeSectionJournalTagedArticlesProps = TypeClassNames & {
  tag?: TypeLibJournalTag | null
  suggestions?: boolean
}

const SectionJournalTagedArticles = ({
  classNames,
  tag,
  suggestions
}: TypeSectionJournalTagedArticlesProps) => {
  const { journalArticles, gspContextParamsJournalCategoryTag } = useContext(
    ContextJournalContext
  )

  if (
    journalArticles?.filter(article =>
      tag ? article.journal_tag.slug === tag.slug : article
    ).length === 0
  )
    return null

  return (
    <section
      className={
        cn(
          stls.container,
          { [stls.default]: !tag, [stls.tag]: tag },
          getClassNames({ classNames })
        ) || undefined
      }>
      <Wrapper column>
        <GeneralJournalSectionTitle>
          {!tag && (
            <>
              {suggestions ? 'Возможно вам будет интересно' : 'Самое читаемое'}
            </>
          )}
          {tag && (
            <>
              <span className={stls.highlight}># </span>
              {tag.title}
            </>
          )}
        </GeneralJournalSectionTitle>
        <ul className={stls.articles}>
          {journalArticles
            ?.filter(article =>
              tag ? article.journal_tag.slug === tag.slug : article
            )
            .filter((_, idx) => idx < 4)
            .map(article => (
              <li key={article.slug} className={stls.articleItem}>
                <CardJournalArticle article={article} tag={!tag} />
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionJournalTagedArticles
