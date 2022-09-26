import cn from 'classnames'

import { getClassNames } from '@/helpers/index'

import {
  TypeClassNames,
  TypeLibJournalArticleConclusion
} from '@/types/index'

import { ContentJournalArticle } from '@/components/layout'

import stls from '@/styles/components/sections/journal/SectionJournalConclusion.module.sass'

type TypeSectionJournalConclusionProps = {
  item: TypeLibJournalArticleConclusion | null
} & TypeClassNames

const SectionJournalConclusion = ({
  classNames,
  item
}: TypeSectionJournalConclusionProps) => {
  if (!item) return null

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}>
      <ContentJournalArticle>
        <h2 className={stls.title}>
          <span>{'Резюмируем'}</span>
        </h2>
        <ol className={stls.list}>
          {item
            ?.filter(part => part)
            .map((part, idx) => (
              <li key={`${part.title} ${idx}`} className={stls.item}>
                <div className={stls.idx}>{idx + 1}</div>
                <div>
                  <h3 className={stls.subTitle}>{part.title}</h3>
                  <p className={stls.p}>{part.body}</p>
                </div>
              </li>
            ))}
        </ol>
      </ContentJournalArticle>
    </div>
  )
}

export default SectionJournalConclusion
