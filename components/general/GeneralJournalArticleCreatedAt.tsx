import stls from '@/styles/components/general/GeneralJournalArticleCreatedAt.module.sass'

import { TypeClassNames } from '@/types/index'

import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

type TypeGeneralJournalArticleCreatedAtProps = TypeClassNames & {
  time: string | Date
  formatString?: string
}

const GeneralJournalArticleCreatedAt = ({
  time,
  formatString
}: TypeGeneralJournalArticleCreatedAtProps) => (
  time ? <div className={stls.date}>
    {
      format(new Date(time), formatString || 'dd LLL', {
        locale: ru
      })
    }
  </div>
    : <></>
)

export default GeneralJournalArticleCreatedAt
