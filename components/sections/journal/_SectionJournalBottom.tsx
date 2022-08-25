import stls from '@/styles/components/sections/journal/SectionJournalBottom.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper, ContentJournalArticle } from '@/components/layout'

type TypeSectionJournalBottomProps = TypeClassNames

const SectionJournalBottom = ({
  classNames
}: TypeSectionJournalBottomProps) => {
  return null
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <ContentJournalArticle>
          <h2 className={stls.tagsTitle}>Теги</h2>
        </ContentJournalArticle>
      </Wrapper>
    </section>
  )
}

export default SectionJournalBottom
