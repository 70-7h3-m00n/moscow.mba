import Link from 'next/link'
import cn from 'classnames'

import {
    TypeClassNames,
    TypeLibJournalArticleRecommendedArticles
} from '@/types/index'

import { getClassNames } from '@/helpers/index'

import routesFront from '@/config/routesFront'

import { ContentJournalArticle } from '@/components/layout'

import stls from '@/styles/components/sections/journal/SectionJournalRecommendedArticles.module.sass'

type TypeSectionJournalRecommendedArticlesProps = {
    journalRecommendedArticles: TypeLibJournalArticleRecommendedArticles
} & TypeClassNames

const SectionJournalRecommendedArticles = ({
    journalRecommendedArticles,
    classNames
}: TypeSectionJournalRecommendedArticlesProps) => {
    if (!journalRecommendedArticles) return null
    
    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined}>
            <ContentJournalArticle classNames={[stls.SectionJournalRecommendedArticles]}>
                <div className={stls.rowTitle}>
                    <p className={stls.title}>{journalRecommendedArticles.title}</p>
                </div>
                <div className={stls.rowArticlesLink}>
                    {
                        journalRecommendedArticles?.articles.map((article, idx) =>
                            <Link
                                href={`${routesFront.root}${routesFront.journal}/${article.slug}`}
                                key={`${article.title}_${idx}`}>
                                <a className={stls.link}>
                                    <span className={stls.line}></span>
                                    <span className={stls.linkText}>{article.title}</span>
                                </a>
                            </Link>
                        )
                    }
                </div>
            </ContentJournalArticle>
        </div>
    )
}

export default SectionJournalRecommendedArticles