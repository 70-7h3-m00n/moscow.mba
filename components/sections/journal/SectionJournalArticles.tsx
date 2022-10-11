import { useState } from 'react'

import cn from 'classnames'

import { TypeClassNames } from '@/types/index'

import {
    TypeContextJournalArticles,
    TypeContextJournalCategory,
    TypeContextJournalFilterButtons
} from '@/types/context/journal/TypeContextJournal'

import { getClassNames } from '@/helpers/index'

import { GeneralJournalSectionTitle } from '@/components/general'
import { Wrapper } from '@/components/layout'
import { CardJournalArticle } from '@/components/cards'
import { BtnArticlesShowMore } from '@/components/btns'

import stls from '@/styles/components/sections/journal/SectionJournalAllArticles.module.sass'

type TypeSectionJournalAllArticlesProps = {
    filteredArticles: TypeContextJournalArticles
    filterCategoriesButtons: TypeContextJournalFilterButtons
    handleFilterActiclesButtons: (category: TypeContextJournalCategory) => void
    sizeArticles: number
} & TypeClassNames

const defaultSizeShowArticles = 2
const defaultSizeShowMore = 1

const SectionJournalAllArticles = ({
    classNames,
    filteredArticles,
    sizeArticles,
    handleFilterActiclesButtons,
    filterCategoriesButtons
}: TypeSectionJournalAllArticlesProps) => {
    if (!filteredArticles) return null

    const [sizeShowArticles, setSizeShowArticles] = useState(defaultSizeShowArticles)

    const changeShowMore = () => {
        setSizeShowArticles(sizeShowArticles => sizeShowArticles + defaultSizeShowMore)
    }

    return (
        <section
            className={cn(stls.container, getClassNames({ classNames })) || undefined}>
            <Wrapper column>
                <GeneralJournalSectionTitle>Все статьи</GeneralJournalSectionTitle>
                <ul className={stls.articles}>
                    {
                        filteredArticles
                            ?.filter((_, idx) => idx < sizeShowArticles)
                            ?.map(article => (
                                <li key={article?.slug} className={stls.articleItem}>
                                    <CardJournalArticle
                                        handleFilterActiclesButtons={handleFilterActiclesButtons}
                                        filterCategoriesButtons={filterCategoriesButtons}
                                        article={article} />
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