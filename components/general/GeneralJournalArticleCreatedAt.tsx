import stls from '@/styles/components/general/GeneralJournalArticleCreatedAt.module.sass'

import { TypeClassNames } from '@/types/index'

type TypeGeneralJournalArticleCreatedAtProps = TypeClassNames & {
  time: string
}

const GeneralJournalArticleCreatedAt = ({
  time,
}: TypeGeneralJournalArticleCreatedAtProps) => (
  time ? <time className={stls.date}>
    {time}
  </time>
    : <></>
)


export default GeneralJournalArticleCreatedAt
