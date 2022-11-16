import { TypeLibPicture } from '@/types/index'

export type TypeLibJournalReadMoreArticlesArticle = {
	title: string | null
	slug: string | null
	createdAt: string | null
	picture: TypeLibPicture | null
	journalCategory: {
		title: string | null
		slug: string | null
	}
}

export type TypeLibJournalReadMoreArticlesArticles =
	Array<TypeLibJournalReadMoreArticlesArticle>
