import cn from 'classnames'

import { TypeClassNames, TypeLibJournalArticleList } from '@/types/index'

import { getClassNames } from '@/helpers/index'

import stls from '@/styles/components/sections/journal/SectionJournalList.module.sass'

type TypeSectionJournalListProps = {
  list: TypeLibJournalArticleList | null
} & TypeClassNames

const SectionJournalList = ({
  classNames,
  list
}: TypeSectionJournalListProps) => {
  if (!list) return null

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <ul className={stls.list}>
        {list
          ?.filter(item => item)
          .map((item, idx) => (
            <li key={`${item.body} ${idx}`} className={stls.item}>
              {item.body}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default SectionJournalList
