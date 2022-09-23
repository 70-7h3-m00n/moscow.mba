import cn from 'classnames'

import {
  TypeClassNames,
  TypeLibJournalArticleEmphasisBody
} from '@/types/index'

import { getClassNames } from '@/helpers/index'

import { ContentJournalArticle } from '@/components/layout'

import stls from '@/styles/components/sections/journal/SectionJournalEmphasis.module.sass'

type TypeSectionJournalEmphasisProps = TypeClassNames & {
  body: TypeLibJournalArticleEmphasisBody | null
}

const SectionJournalEmphasis = ({
  classNames,
  body
}: TypeSectionJournalEmphasisProps) => {
  if (!body) return null

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <ContentJournalArticle>
        <p className={stls.p}>{body}</p>
      </ContentJournalArticle>
    </div>
  )
}

export default SectionJournalEmphasis
