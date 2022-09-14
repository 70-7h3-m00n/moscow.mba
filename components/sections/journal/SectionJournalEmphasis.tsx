import stls from '@/styles/components/sections/journal/SectionJournalEmphasis.module.sass'
import {
  TypeClassNames,
  TypeLibJournalArticleEmphasisBody
} from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContentJournalArticle } from '@/components/layout'

type TypeSectionJournalEmphasisProps = TypeClassNames & {
  body: TypeLibJournalArticleEmphasisBody | null
}

const SectionJournalEmphasis = ({
  classNames,
  body
}: TypeSectionJournalEmphasisProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <ContentJournalArticle>
        <p className={stls.p}>{body}</p>
      </ContentJournalArticle>
    </section>
  )
}

export default SectionJournalEmphasis
