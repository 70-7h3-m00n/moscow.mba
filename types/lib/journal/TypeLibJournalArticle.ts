import {
	TypeLibPicture,
	TypeLibTypename,
	TypeLibJournalArticleParagraphBody,
	TypeLibJournalArticleTitleBody,
	TypeLibJournalArticlePicture,
	TypeLibJournalRecommendedPrograms,
	TypeLibJournalArticleTitle,
	TypeLibJournalArticleEmphasisBody,
	TypeLibJournalArticleAuthorName,
	TypeLibJournalArticleAuthorPosition,
	TypeLibJournalArticleBody,
	TypeLibJournalArticleList,
	TypeLibJournalArticleRecommendedProgram,
	TypeLibJournalArticleConclusion,
	TypeLibJournalArticleRecommendedArticles,
	TypeLibJournalArticleRecommendedProgramsSection,
	TypeLibJournalArticleLabel,
	TypeLibJournalAuthors,
	TypeLibJournalArticleFormPdfMaterials,
	TypeLibJournalPdfMaterials,
	TypeLibJournalArticleHtmlTableBody,
	TypeLibJournalReadMoreArticles
} from '@/types/index'

type TypeLibJournalArticle = {
	title: string | null
	slug: string | null
	metaTitle: string | null
	metaDescription: string | null
	noindex: boolean | null
	nofollow: boolean | null
	journalCategory: {
		title: string | null
		slug: string | null
	}
	journalAuthors?: TypeLibJournalAuthors | null
	pdfMaterials?: TypeLibJournalPdfMaterials | null
	picture: TypeLibPicture | null
	shortDescription: string | null
	createdAt: string | null
	publicationDate?: string | null
	recommendedPrograms?: TypeLibJournalRecommendedPrograms
	articleBody?:
		| {
				__typename: TypeLibTypename
				paragraphBodyParts?: TypeLibJournalArticleParagraphBody | null
				title?: {
					titleBodyParts: TypeLibJournalArticleTitleBody | null
					hType: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | null
				}
				picture?: TypeLibJournalArticlePicture | null
				emphasisBody?: TypeLibJournalArticleEmphasisBody | null
				athorPosition?: TypeLibJournalArticleAuthorPosition | null
				authorName?: TypeLibJournalArticleAuthorName | null
				body?: TypeLibJournalArticleBody | null
				list?: {
					items: TypeLibJournalArticleList | null
					tag: 'ul' | 'ol' | null
				}
				recommendedProgram?: TypeLibJournalArticleRecommendedProgram | null
				conclusion?: TypeLibJournalArticleConclusion | null
				journalRecommendedArticles?: TypeLibJournalArticleRecommendedArticles | null
				recommendedProgramsSection?: TypeLibJournalArticleRecommendedProgramsSection | null
				formPdfMaterials?: TypeLibJournalArticleFormPdfMaterials | null
				htmlTableBody?: TypeLibJournalArticleHtmlTableBody | null
				quote?: {
					body: TypeLibJournalArticleEmphasisBody | null
					label: TypeLibJournalArticleLabel | null
					authorPosition: TypeLibJournalArticleAuthorPosition | null
					authorName: TypeLibJournalArticleAuthorName | null
					portrait: TypeLibPicture | null
				}
				journalReadAlsoArticles?: TypeLibJournalReadMoreArticles | null
		  }[]
		| null
}

export default TypeLibJournalArticle
