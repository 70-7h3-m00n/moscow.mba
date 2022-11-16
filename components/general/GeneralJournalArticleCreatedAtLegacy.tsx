import stls from '@/styles/components/general/GeneralJournalArticleCreatedAtLegacy.module.sass'

import { TypeClassNames } from '@/types/index'

type TypeGeneralJournalArticleCreatedAtLegacyProps = TypeClassNames & {
	time: string
}

const GeneralJournalArticleCreatedAtLegacy = ({
	time
}: TypeGeneralJournalArticleCreatedAtLegacyProps) => {
	if (!time) return null

	return <time className={stls.date}>{time}</time>
}

export default GeneralJournalArticleCreatedAtLegacy
