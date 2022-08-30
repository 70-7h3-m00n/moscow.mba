import {
  TypeLibPicture,
  TypeLibTypename,
  TypeLibJournalArticleParagraphBody,
  TypeLibJournalArticleTitleBody,
  TypeLibJournalArticlePicture,
  TypeLibJournalArticleTitle,
  TypeLibJournalArticleEmphasisBody,
  TypeLibJournalArticleAuthorName,
  TypeLibJournalArticleAuthorPosition,
  TypeLibJournalArticleBody,
  TypeLibJournalArticleListItem,
  TypeLibJournalArticleProgram,
  TypeLibJournalArticleItem
} from '@/types/index'

type TypeLibJournalArticle = {
  title: string | null
  slug: string | null
  journalCategory: {
    title: string | null
    slug: string | null
  }
  picture: TypeLibPicture | null
  shortDescription?: string | null
  createdAt?: string | null
  articleBody?:
    | {
        __typename: TypeLibTypename
        paragraphBody?: TypeLibJournalArticleParagraphBody | null
        titleBody?: TypeLibJournalArticleTitleBody | null
        picture?: TypeLibJournalArticlePicture | null
        title?: TypeLibJournalArticleTitle | null
        emphasisBody?: TypeLibJournalArticleEmphasisBody | null
        athorPosition?: TypeLibJournalArticleAuthorPosition | null
        authorName?: TypeLibJournalArticleAuthorName | null
        body?: TypeLibJournalArticleBody | null
        listItem?: TypeLibJournalArticleListItem | null
        program?: TypeLibJournalArticleProgram | null
        item?: TypeLibJournalArticleItem | null
      }[]
    | null
}

export default TypeLibJournalArticle
