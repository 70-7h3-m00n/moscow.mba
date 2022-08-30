import { createContext, Dispatch } from 'react'

import { TypeContextJournal } from '@/types/context/journal/TypeContextJournal'
// TODO: figure out better types
const contextStaticPropsJournal = createContext<{
    categories: TypeContextJournal['categories']
    setCategories: TypeContextJournal['setCategories']
    articles: TypeContextJournal['articles']
    setArticles: TypeContextJournal['setArticles']
}>({
    categories: [],
    setCategories: () => {},
    articles: [],
    setArticles: () => {}
})

export default contextStaticPropsJournal
