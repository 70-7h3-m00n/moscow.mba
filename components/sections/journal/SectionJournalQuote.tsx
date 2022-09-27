import cn from 'classnames'

import {
  TypeClassNames,
  TypeLibJournalArticleQuote
} from '@/types/index'

import { getClassNames } from '@/helpers/index'

import { IconQuote } from '@/components/icons'
import { CardAuthor } from '@/components/cards'

import stls from '@/styles/components/sections/journal/SectionJournalQuote.module.sass'

type TypeSectionJournalQuoteProps = TypeClassNames & {
  quote: TypeLibJournalArticleQuote
}

const SectionJournalQuote = ({
  classNames,
  quote
}: TypeSectionJournalQuoteProps) => {
  if (!quote) return null

  return (
    <div className={cn(stls.container, getClassNames({ classNames })) || undefined}>
      <div className={stls.content}>
        <IconQuote classNames={[stls.icon]} />
        <blockquote className={stls.blockquote}>{quote.body}</blockquote>
        <div className={stls.credit}>
          <CardAuthor textAlign={'end'} fontWeightAuthorName={700} quote={quote} />
        </div>
      </div>
    </div>
  )
}

export default SectionJournalQuote
