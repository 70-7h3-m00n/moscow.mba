import cn from 'classnames'

import {
  TypeClassNames,
  TypeLibJournalArticleListItem
} from '@/types/index'

import { getClassNames } from '@/helpers/index'

import { ContentJournalArticle } from '@/components/layout'

import stls from '@/styles/components/sections/journal/SectionJournalList.module.sass'

type TypeSectionJournalListProps = {
  listItem: TypeLibJournalArticleListItem | null
} & TypeClassNames

const SectionJournalList = ({
  classNames,
  listItem
}: TypeSectionJournalListProps) => {
  if (!listItem) return null

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}>
      <ContentJournalArticle>
        <ul className={stls.list}>
          {
            listItem
              ?.filter(item => item)
              .map((item, iidx) => (
                <li key={`${item.body} ${iidx}`} className={stls.item}>
                  {item.body}
                </li>
              ))
          }
        </ul>
      </ContentJournalArticle>
    </div>
  )
}

export default SectionJournalList
