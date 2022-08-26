import React, { useContext } from 'react'

import { ContextJournalContext } from '@/context/index'
import { JournalArticle } from '../../molecules'

export const JournalArticles = () => {
    const { journalArticles } = useContext(ContextJournalContext)
    const sortJournalArticles = journalArticles
        ?.map((articles) => ({ ...articles, createdDate: new Date(articles.createdAt) }))
        .sort((prev, next) => next.createdDate.getTime() - prev.createdDate.getTime())

    return (
        <>
            {
                sortJournalArticles?.map((articleData) => (
                    <JournalArticle
                        title={articleData.title}
                        slug={articleData.slug}
                        picture={articleData.picture}
                        journal_category={articleData.journal_category}
                        journal_tag={articleData.journal_tag}
                        createdAt={articleData.createdAt}
                        createdDate={articleData.createdDate}
                    />
                ))
            }
        </>
    )
}