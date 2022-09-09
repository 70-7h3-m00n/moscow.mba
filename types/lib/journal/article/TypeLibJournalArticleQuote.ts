import {
    TypeLibJournalArticleEmphasisBody,
    TypeLibJournalArticleAuthorPosition,
    TypeLibJournalArticleAuthorName,
    TypeLibPicture,
    TypeLibJournalArticleLabel
} from '@/types/index'

type TypeSectionJournalQuoteProps = {
    body: TypeLibJournalArticleEmphasisBody
    label: TypeLibJournalArticleLabel
    authorPosition: TypeLibJournalArticleAuthorPosition
    authorName: TypeLibJournalArticleAuthorName
    portrait: TypeLibPicture
}

export default TypeSectionJournalQuoteProps