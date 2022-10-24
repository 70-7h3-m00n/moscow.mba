import stls from '@/styles/components/sections/journal/SectionJournalParagraph.module.sass'
import cn from 'classnames'
import parse from 'html-react-parser'
import truncate from 'truncate'
import { marked } from 'marked'
import {
  TypeClassNames,
  TypeLibJournalArticleParagraphBody
} from '@/types/index'
import { getClassNames } from '@/helpers/index'

type TypeSectionJournalParagraphProps = TypeClassNames & {
  body: TypeLibJournalArticleParagraphBody | null
  idx: number
}

const SectionJournalParagraph = ({
  classNames,
  body,
  idx
}: TypeSectionJournalParagraphProps) => {
  if (!body) return null

  // console.log(body)
  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <div className={stls.p}>
        {body
          ?.filter(part => part)
          .map((part, idx2) => (
            <span
              key={`SectionJournalParagraph_${idx}-${idx2}`}
              className={cn({
                [stls.isHighlighted]: part.isHighlighted,
                [stls.isLarger]: part.isLarger
              })}>
              {part.text && parse(marked(part.text))}
            </span>
          ))}
      </div>
    </div>
  )
}

export default SectionJournalParagraph
