import cn from 'classnames'
import parse from 'html-react-parser'
import truncate from 'truncate'
import { marked } from 'marked'

import {
  TypeClassNames,
  TypeLibJournalArticleParagraphBody
} from '@/types/index'

import { getClassNames } from '@/helpers/index'

import stls from '@/styles/components/sections/journal/SectionJournalParagraph.module.sass'

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

  return (
    <div className={cn(stls.container, getClassNames({ classNames })) || undefined}>
      <p className={stls.p}>
        {body
          ?.filter(part => part)
          .map(part => (
            <span
              key={
                part.text
                  ? truncate(part.text, 21)
                  : `SectionJournalParagraph_${idx}`
              }
              className={cn({
                [stls.isHighlighted]: part.isHighlighted,
                [stls.isLarger]: part.isLarger
              })}>
              {part.text && parse(
                marked(part.text).replace('<p>', '').replace('</p>', '')
              )}
            </span>
          ))}
      </p>
    </div>
  )
}

export default SectionJournalParagraph
