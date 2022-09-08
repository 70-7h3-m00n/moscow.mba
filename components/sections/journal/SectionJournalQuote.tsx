import stls from '@/styles/components/sections/journal/SectionJournalQuote.module.sass'
import {
  TypeClassNames,
  TypeLibJournalArticleEmphasisBody,
  TypeLibJournalArticleAuthorPosition,
  TypeLibJournalArticleAuthorName,
  TypeLibPicture
} from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper, ContentJournalArticle } from '@/components/layout'
import { IconQuote } from '@/components/icons'

type TypeSectionJournalQuoteProps = TypeClassNames & {
  body: TypeLibJournalArticleEmphasisBody | null
  authorPosition: TypeLibJournalArticleAuthorPosition | null
  authorName: TypeLibJournalArticleAuthorName | null
  portrait: TypeLibPicture | null
}

const SectionJournalQuote = ({
  classNames,
  body,
  authorPosition,
  authorName
}: TypeSectionJournalQuoteProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <ContentJournalArticle classNames={[stls.content]}>
          <IconQuote classNames={[stls.icon]} />
          <blockquote className={stls.blockquote}>{body}</blockquote>
          <div className={stls.credit}>
            <p className={stls.author}>— {authorName}</p>
            <p className={stls.position}>{authorPosition}</p>
          </div>
        </ContentJournalArticle>
      </Wrapper>
    </section>
  )
}

export default SectionJournalQuote
