import { useContext } from 'react'
import cn from 'classnames'

import stls from '@/styles/components/sections/journal/SectionJournalAllArticles.module.sass'

import { TypeClassNames } from '@/types/index'

import { getClassNames } from '@/helpers/index'

import { ContextStaticPropsJournal } from '@/context/index'

import { GeneralJournalSectionTitle } from '@/components/general'
import { Wrapper } from '@/components/layout'
import { CardJournalArticle } from '@/components/cards'


type TypeSectionJournalAllArticlesProps = TypeClassNames

const SectionJournalAllArticles = ({ classNames }: TypeSectionJournalAllArticlesProps) => {
    const { articles } = useContext(ContextStaticPropsJournal) 

    return (
        <section
            className={
                cn(stls.container, getClassNames({ classNames })) || undefined
            }>
            <Wrapper column>
                <GeneralJournalSectionTitle>Все статьи</GeneralJournalSectionTitle>
                <ul className={stls.articles}>
                    {articles
                        ?.filter((article, idx) => idx <= 8)
                        .map(article => (
                            <li key={article.slug} className={stls.articleItem}>
                                <CardJournalArticle article={article} />
                            </li>
                        ))}
                </ul>
            </Wrapper>
        </section>
    )
}

export default SectionJournalAllArticles