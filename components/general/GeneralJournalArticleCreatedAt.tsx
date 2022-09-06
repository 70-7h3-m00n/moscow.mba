import stls from '@/styles/components/general/GeneralJournalArticleCreatedAt.module.sass'

import { TypeClassNames } from '@/types/index'

type TypeGeneralJournalArticleCreatedAtProps = TypeClassNames & {
  time: string
}

const GeneralJournalArticleCreatedAt = ({
  time,
}: TypeGeneralJournalArticleCreatedAtProps) => (
  time ? <div className={stls.date}>
    {time}
  </div>
    : <></>
)


export default GeneralJournalArticleCreatedAt
