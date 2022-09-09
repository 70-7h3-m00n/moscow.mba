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
  TypeLibJournalArticleConclusion,
  TypeLibJournalArticleRecommendedArticles,
  TypeLibJournalArticleRecommendedProgramsSection,
  TypeLibJournalArticleLabel,
  TypeLibJournalAuthors
} from '@/types/index'

type TypeLibJournalArticle = {
  title: string | null
  slug: string | null
  journalCategory: {
    title: string | null
    slug: string | null
  }
  journalAuthors: TypeLibJournalAuthors | null
  picture: TypeLibPicture | null
  shortDescription?: string | null
  createdAt?: string | null
  articleBody?:
  | {
    __typename: TypeLibTypename
    paragraphBodyParts?: TypeLibJournalArticleParagraphBody | null
    titleBodyParts?: TypeLibJournalArticleTitleBody | null
    picture?: TypeLibJournalArticlePicture | null
    title?: TypeLibJournalArticleTitle | null
    emphasisBody?: TypeLibJournalArticleEmphasisBody | null
    athorPosition?: TypeLibJournalArticleAuthorPosition | null
    authorName?: TypeLibJournalArticleAuthorName | null
    body?: TypeLibJournalArticleBody | null
    list?: TypeLibJournalArticleListItem | null
    recommendedProgram?: TypeLibJournalArticleProgram | null
    conclusion?: TypeLibJournalArticleConclusion | null
    journalRecommendedArticles?: TypeLibJournalArticleRecommendedArticles | null
    recommendedProgramsSection?: TypeLibJournalArticleRecommendedProgramsSection | null
    quote?: {
      body: TypeLibJournalArticleEmphasisBody | null
      label: TypeLibJournalArticleLabel | null
      authorPosition: TypeLibJournalArticleAuthorPosition | null
      authorName: TypeLibJournalArticleAuthorName | null
      portrait: TypeLibPicture | null
    }
  }[]
  | null
}

export default TypeLibJournalArticle
