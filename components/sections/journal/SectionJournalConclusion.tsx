import stls from '@/styles/components/sections/journal/SectionJournalConclusion.module.sass'
import { TypeClassNames, TypeLibJournalArticleConclusion } from '@/types/index'
import cn from 'classnames'
import parse from 'html-react-parser'
import { marked } from 'marked'
import { getClassNames } from '@/helpers/index'

type TypeSectionJournalConclusionProps = {
  item: TypeLibJournalArticleConclusion | null
} & TypeClassNames

const SectionJournalConclusion = ({
  classNames,
  item
}: TypeSectionJournalConclusionProps) => {
  if (!item || item?.length === 0) return null

  const itemFiltered = item.filter(part => part)

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <h2 className={stls.title}>
        <span>{'Резюмируем'}</span>
      </h2>
      <ol className={stls.list}>
        {itemFiltered.map((part, idx) => (
          <li key={`${part.title} ${idx}`} className={stls.item}>
            {itemFiltered.length > 1 && (
              <div className={stls.idx}>{idx + 1}</div>
            )}
            <div className={stls.subtitleBody}>
              <h3 className={stls.subTitle}>{part.title}</h3>
              <div>{parse(marked(part.body))}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default SectionJournalConclusion
