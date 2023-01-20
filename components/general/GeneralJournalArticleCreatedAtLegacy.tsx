import stls from '@/styles/components/general/GeneralJournalArticleCreatedAtLegacy.module.sass'

import { TypeClassNames } from '@/types/index'

type TypeGeneralJournalArticleCreatedAtLegacyProps = TypeClassNames & {
	time: string
	timestamp: string
}

const GeneralJournalArticleCreatedAtLegacy = ({
	time,
	timestamp
}: TypeGeneralJournalArticleCreatedAtLegacyProps) => {
	if (!time) return null
	return (
		<time className={stls.date} dateTime={timestamp}>
			{time}
		</time>
	)
}

export default GeneralJournalArticleCreatedAtLegacy
