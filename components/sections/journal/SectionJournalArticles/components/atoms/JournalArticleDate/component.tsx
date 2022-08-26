import { TypeLibJournalArticle } from '@/types/index'
import { getJournalPublicationDate } from '@/components/sections/journal/shared'

type TProps = {
    createdAt: TypeLibJournalArticle['createdAt']
    createdDate: Date
}

export const JournalArticleDate: React.FC<TProps> = ({ createdAt }) => {
    const publicationDate = getJournalPublicationDate(createdAt)
    return (
        <p>{publicationDate}</p>
    )
}