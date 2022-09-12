import stls from '@/styles/components/sections/journal/SectionJournalTitle.module.sass'
import { TypeClassNames, TypeLibJournalArticleTitleBody } from '@/types/index'
import cn from 'classnames'
import truncate from 'truncate'
import { getClassNames } from '@/helpers/index'
import { Wrapper, ContentJournalArticle } from '@/components/layout'

type TypeSectionJournalTitleProps = TypeClassNames & {
  body: TypeLibJournalArticleTitleBody | null
  idx: number
}

const SectionJournalTitle = ({
  classNames,
  body,
  idx
}: TypeSectionJournalTitleProps) => {
  return (
    <section className={cn(stls.container, getClassNames({ classNames })) || undefined}>
      <Wrapper column>
        <ContentJournalArticle>
          <h2 className={stls.title}>
            {body
              ?.filter(part => part)
              .map((part, pidx) => (
                <span
                  key={
                    part.text
                      ? `${truncate(part.text, 21)} ${idx}-${pidx}`
                      : `SectionJournalTitle ${idx}-${pidx}`
                  }
                  className={cn({
                    [stls.isHighlighted]: part.isHighlighted
                  })}>
                  {part.text}{' '}
                </span>
              ))}
          </h2>
        </ContentJournalArticle>
      </Wrapper>
    </section>
  )
}

export default SectionJournalTitle
