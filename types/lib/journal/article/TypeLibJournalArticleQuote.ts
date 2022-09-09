import {
    TypeLibJournalArticleEmphasisBody,
    TypeLibJournalArticleAuthorPosition,
    TypeLibJournalArticleAuthorName,
    TypeLibPicture,
    TypeLibJournalArticleLabel
} from '@/types/index'

type TypeSectionJournalQuoteProps = {
    body: TypeLibJournalArticleEmphasisBody | null
    label: TypeLibJournalArticleLabel | null
    authorPosition: TypeLibJournalArticleAuthorPosition | null
    authorName: TypeLibJournalArticleAuthorName | null
    portrait: TypeLibPicture | null
}

export default TypeSectionJournalQuoteProps