import {
    useContext,
    useState
} from 'react'

import cn from 'classnames'

import stls from '@/styles/components/sections/journal/SectionJournalAllArticles.module.sass'

import { TypeClassNames } from '@/types/index'
import { TypeContextJournalArticles, TypeContextJournalFilterButtons } from '@/types/context/journal/TypeContextJournal'

import { getClassNames } from '@/helpers/index'

import { ContextStaticPropsJournal } from '@/context/index'

import { GeneralJournalSectionTitle } from '@/components/general'
import { Wrapper } from '@/components/layout'
import { CardJournalArticle } from '@/components/cards'
import { BtnArticlesShowMore } from '@/components/btns'


type TypeSectionJournalAllArticlesProps = {
    filterCategoriesButton: TypeContextJournalFilterButtons
} & TypeClassNames

const defaultSizeShowArticles = 2
const defaultSizeShowMore = 1

const SectionJournalAllArticles = ({ classNames, filterCategoriesButton }: TypeSectionJournalAllArticlesProps) => {
    const { articles } = useContext(ContextStaticPropsJournal)
    const [sizeShowArticles, setSizeShowArticles] = useState(defaultSizeShowArticles)

    
    const appliedCategories = filterCategoriesButton.filter(category => category.state === true)
    const filteredArticles = articles.filter(article => appliedCategories.some(appliedCategory => appliedCategory.title === article.journalCategory.title))
    const sizeArticles = filteredArticles.length
    
    const changeShowMore = () => {
        setSizeShowArticles(sizeShowArticles => sizeShowArticles + defaultSizeShowMore)
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
                        filteredArticles
                            ?.filter((_, idx) => idx < sizeShowArticles)
                            ?.map(article => (
                                <li key={article?.slug} className={stls.articleItem}>
                                    <CardJournalArticle article={article} />
                                </li>
                            ))
                    }
                </ul>
                {
                    sizeArticles > sizeShowArticles
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