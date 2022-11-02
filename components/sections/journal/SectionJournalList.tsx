import cn from 'classnames'

import { TypeClassNames, TypeLibJournalArticleList } from '@/types/index'

import { getClassNames } from '@/helpers/index'

import stls from '@/styles/components/sections/journal/SectionJournalList.module.sass'

type TypeSectionJournalListProps = {
  list: {
    items: TypeLibJournalArticleList | null
    tag: 'ul' | 'ol' | null
  }
} & TypeClassNames

const SectionJournalList = ({
  classNames,
  list
}: TypeSectionJournalListProps) => {
  if (!list.items) return null

  const tag = list.tag || 'ul'

  const List = tag

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <List className={cn(stls.list, stls[tag])}>
        {list.items
          ?.filter(item => item)
          .map((item, idx) => (
            <li
              key={`${item.body} ${idx}`}
              className={cn(stls.item, stls[tag])}>
              {item.body}
            </li>
          ))}
      </List>
    </div>
  )
}

export default SectionJournalList
