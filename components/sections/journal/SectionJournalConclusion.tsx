import stls from '@/styles/components/sections/journal/SectionJournalConclusion.module.sass'
import { TypeClassNames, TypeLibJournalArticleConclusion } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper, ContentJournalArticle } from '@/components/layout'

type TypeSectionJournalConclusionProps = TypeClassNames & {
  item: TypeLibJournalArticleConclusion | null
}

const SectionJournalConclusion = ({
  classNames,
  item
}: TypeSectionJournalConclusionProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <ContentJournalArticle>
          <ol className={stls.list}>
            {item
              ?.filter(part => part)
              .map((part, idx) => (
                <li key={`${part.title} ${idx}`} className={stls.item}>
                  <div className={stls.idx}>{idx + 1}</div>
                  <div>
                    <h3 className={stls.title}>{part.title}</h3>
                    <p className={stls.p}>{part.body}</p>
                  </div>
                </li>
              ))}
          </ol>
        </ContentJournalArticle>
      </Wrapper>
    </section>
  )
}

export default SectionJournalConclusion
