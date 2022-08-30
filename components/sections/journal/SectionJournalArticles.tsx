import {
    useContext,
    useState
} from 'react'
import cn from 'classnames'

import stls from '@/styles/components/sections/journal/SectionJournalAllArticles.module.sass'

import { TypeClassNames } from '@/types/index'

import { getClassNames } from '@/helpers/index'

import { ContextStaticPropsJournal } from '@/context/index'

import { GeneralJournalSectionTitle } from '@/components/general'
import { Wrapper } from '@/components/layout'
import { CardJournalArticle } from '@/components/cards'
import { BtnArticlesShowMore } from '@/components/btns'


type TypeSectionJournalAllArticlesProps = TypeClassNames

const SectionJournalAllArticles = ({ classNames }: TypeSectionJournalAllArticlesProps) => {
    const { articles } = useContext(ContextStaticPropsJournal)
    const [numberShowArticles, setNumberShowArticles] = useState(1)
    const numberTotalArticles = articles.length

    const changeShowMore = () => {
        setNumberShowArticles(countShowArticles => countShowArticles + 1)
    }

    return (
        <section
            className={
                cn(stls.container, getClassNames({ classNames })) || undefined
            }>
            <Wrapper column>
                <GeneralJournalSectionTitle>Все статьи</GeneralJournalSectionTitle>
                <ul className={stls.articles}>
                    {
                        articles
                            ?.filter((article, idx) => idx < numberShowArticles)
                            .map(article => (
                                <li key={article.slug} className={stls.articleItem}>
                                    <CardJournalArticle article={article} />
                                </li>
                            ))
                    }
                </ul>
                {
                    numberTotalArticles > numberShowArticles
                        ? <div className={stls.buttonWrapper}>
                            <BtnArticlesShowMore onClick={changeShowMore} />
                        </div>
                        : ''
                }
            </Wrapper>
        </section>
    )
}

export default SectionJournalAllArticles