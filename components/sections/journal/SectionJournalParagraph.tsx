import stls from '@/styles/components/sections/journal/SectionJournalParagraph.module.sass'
import cn from 'classnames'
import {
  TypeClassNames,
  TypeLibJournalArticleParagraphBody
} from '@/types/index'
import { getClassNames, createSmartParagraph } from '@/helpers/index'

// todo: fix __typename types
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
  if (!body.length) return null

  const smartParagraph = createSmartParagraph<typeof body>({
    paragraph: body,
    className: stls.br
  })

  if (!smartParagraph) return null

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <p className={stls.p}>
        {smartParagraph.map((part, idx2) => (
          <span
            key={`SectionJournalParagraph_${idx}-${idx2}`}
            className={cn(stls.text, {
              [stls.isHighlighted]: part.isHighlighted,
              [stls.isLarger]: part.isLarger
            })}>
            {part.text}
          </span>
        ))}
      </p>
    </div>
  )
}

export default SectionJournalParagraph
