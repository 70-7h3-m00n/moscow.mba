import truncate from 'truncate'
import slugify from 'slugify'
import cn from 'classnames'

import {
  TypeClassNames,
  TypeLibJournalArticleTitleBody
} from '@/types/index'

import { getClassNames } from '@/helpers/index'

import stls from '@/styles/components/sections/journal/SectionJournalTitle.module.sass'

type TypeSectionJournalTitleProps = TypeClassNames & {
  body: TypeLibJournalArticleTitleBody | null
  idx: number
}

const SectionJournalTitle = ({
  classNames,
  body,
  idx
}: TypeSectionJournalTitleProps) => {
  if (!body) return null

  const idSection = slugify(
    body
      ?.map(item => item.text)
      .join(' ')
  )
  return (
    <div id={idSection} className={cn(stls.container, getClassNames({ classNames })) || undefined}>
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
    </div>
  )
}

export default SectionJournalTitle
