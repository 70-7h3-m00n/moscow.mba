import stls from '@/styles/components/sections/journal/SectionJournalRecommendedProgram.module.sass'
import { TypeClassNames, TypeLibJournalArticleProgram } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper, ContentJournalArticle } from '@/components/layout'

type TypeSectionJournalRecommendedProgramProps = TypeClassNames & {
  program: TypeLibJournalArticleProgram | null
}

const SectionJournalRecommendedProgram = ({
  classNames,
  program
}: TypeSectionJournalRecommendedProgramProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <ContentJournalArticle classNames={[stls.content]}>
          {program?.title}
        </ContentJournalArticle>
      </Wrapper>
    </section>
  )
}

export default SectionJournalRecommendedProgram
