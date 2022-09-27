import cn from 'classnames'

import {
  TypeClassNames,
  TypeLibJournalArticleEmphasisBody
} from '@/types/index'

import { getClassNames } from '@/helpers/index'

import stls from '@/styles/components/sections/journal/SectionJournalEmphasis.module.sass'

type TypeSectionJournalEmphasisProps = {
  body: TypeLibJournalArticleEmphasisBody | null
} & TypeClassNames

const SectionJournalEmphasis = ({
  classNames,
  body
}: TypeSectionJournalEmphasisProps) => {
  if (!body) return null

  return (
    <div className={cn(stls.container, getClassNames({ classNames })) || undefined}>
      <p className={stls.p}>{body}</p>
    </div>
  )
}

export default SectionJournalEmphasis
