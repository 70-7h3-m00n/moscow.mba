import stls from '@/styles/components/general/GeneralJournalArticleCreatedAt.module.sass'

import { TypeClassNames } from '@/types/index'

type TypeGeneralJournalArticleCreatedAtProps = TypeClassNames & {
  time: string
  createdAt: string
}

const GeneralJournalArticleCreatedAt = ({
  time,
  createdAt
}: TypeGeneralJournalArticleCreatedAtProps) => {
  if (!time) return null
  return (
    <time className={stls.date} dateTime={createdAt}>
      {time}
    </time>
  )
}

export default GeneralJournalArticleCreatedAt
