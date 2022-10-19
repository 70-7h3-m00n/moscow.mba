import cn from 'classnames'
import parse from 'html-react-parser'

import {
  TypeClassNames,
  TypeLibJournalArticleHtmlTableBody
} from '@/types/index'

import { getClassNames } from '@/helpers/index'

import stls from '@/styles/components/sections/journal/SectionJournalTable.module.sass'

type TypeJournalArticleTables = {
  htmlTableBody: TypeLibJournalArticleHtmlTableBody
} & TypeClassNames

const SectionJournalTable = ({
  htmlTableBody,
  classNames
}: TypeJournalArticleTables) => {
  if (!htmlTableBody) return null

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <div
        className={
          cn(
            // TODO Если будет нужда в complicatedTable (усложненная таблица), то сделать
            // { [stls.complicatedTable]: complicatedTable },
            [stls.container, stls.regularTable],
            getClassNames({ classNames })
          ) || undefined
        }>
        {htmlTableBody?.table &&
          parse(
            htmlTableBody?.table
              .replace(/<link.*>/g, '')
              .replace(/<meta.*>/g, '')
              .replace(/<style.*<\/style>/, '')
          )}
      </div>
    </div>
  )
}
export default SectionJournalTable
