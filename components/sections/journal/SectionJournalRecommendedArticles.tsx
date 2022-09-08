import Link from 'next/link'
import cn from 'classnames'

import {
    TypeClassNames,
    TypeLibJournalArticleRecommendedArticles
} from '@/types/index'

import { getClassNames } from '@/helpers/index'

import routesFront from '@/config/routesFront'

import {
    Wrapper,
    ContentJournalArticle
} from '@/components/layout'

import stls from '@/styles/components/sections/journal/SectionJournalRecommendedArticles.module.sass'

type TypeSectionJournalRecommendedArticlesProps = {
    journalRecommendedArticles: TypeLibJournalArticleRecommendedArticles
} & TypeClassNames

const SectionJournalRecommendedArticles = ({
    journalRecommendedArticles,
    classNames
}: TypeSectionJournalRecommendedArticlesProps) => {
    return (
        <section className={cn(stls.container, getClassNames({ classNames })) || undefined}>
            <Wrapper column>
                <ContentJournalArticle classNames={[stls.SectionJournalRecommendedArticles]}>
                    <div className={stls.rowTitle}>
                        <p className={stls.title}>{journalRecommendedArticles.title}</p>
                    </div>
                    <div className={stls.rowArticlesLink}>
                        {
                            journalRecommendedArticles?.articles.map(article =>
                                <>
                                    <Link href={`${routesFront.root}${routesFront.journal}/${article.slug}`}>
                                        <a className={stls.link}>
                                            <span className={stls.line}></span>
                                            <span className={stls.linkText}>{article.title}</span>
                                        </a>
                                    </Link>
                                </>
                            )
                        }
                    </div>
                </ContentJournalArticle>
            </Wrapper>
        </section>
    )
}

export default SectionJournalRecommendedArticles