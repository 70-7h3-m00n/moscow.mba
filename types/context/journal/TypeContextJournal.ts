import { Dispatch, SetStateAction } from 'react'

type TypeContextJournalArticle = {
    title: string | null
    slug: string | null
    createdAt: string | null
    shortDescription: string | null
    picture: TypeContextJournalArticlesPicture
    journalCategory: TypeContextJournalCategory
} | null

type TypeContextJournalArticles = Array<TypeContextJournalArticle>

type TypeContextJournalArticlesPicture = {
    url: string | null
    width: number | null
    height: number | null
    alt?: string | null
} | null

type TypeContextJournalCategories = Array<TypeContextJournalCategory>

type TypeContextJournalCategory = {
    title: string | null
    slug: string | null
    state?: boolean | null
} | null

type TypeContextJournalFilterButtons = Array<TypeContextJournalFilterButton>

type TypeContextJournalFilterButton = {
    title: string | null
    slug: string | null
    state?: boolean | null
} | null


type TypeContextJournal = {
    categories: TypeContextJournalCategories
    setCategories: Dispatch<SetStateAction<TypeContextJournalCategories>>
    articles: TypeContextJournalArticles
    setArticles: Dispatch<SetStateAction<TypeContextJournalArticles>>
}

export type {
    TypeContextJournalArticle,
    TypeContextJournalArticles,
    TypeContextJournalCategory,
    TypeContextJournalCategories,
    TypeContextJournal,
    TypeContextJournalFilterButton,
    TypeContextJournalFilterButtons
}