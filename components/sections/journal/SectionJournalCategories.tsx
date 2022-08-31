import { useContext } from 'react'
import cn from 'classnames'

import { TypeClassNames } from '@/types/index'

import { getClassNames } from '@/helpers/index'

import { ContextStaticPropsJournal } from '@/context/index'

import { Wrapper } from 'components/layout'

import stls from '@/styles/components/sections/journal/SectionJournalCategories.module.sass'

import { TypeContextJournalCategory } from '@/types/context/journal/TypeContextJournal'

type TypeSectionJournalCategoriesProps = {
    // handleFilterCategories: (category: TypeContextJournalCategory) => void
    handleFilterButtons: (category: TypeContextJournalCategory) => void
    handleFilterAllCategoriesButton: (category: TypeContextJournalCategory) => void
} & TypeClassNames

const SectionJournalCategories = ({ classNames, handleFilterButtons, handleFilterAllCategoriesButton }: TypeSectionJournalCategoriesProps) => {
    const { categories } = useContext(ContextStaticPropsJournal)
    const buttonAllArticles = {
        title: 'Все статьи',
        slug: 'vse_stati',
    }
    return (
        <section className={
            cn(stls.container, getClassNames({ classNames })) || undefined
        }>
            <Wrapper>
                <ul className={stls.categories}>
                    <li
                        className={stls.categoryItem}
                        onClick={() => handleFilterAllCategoriesButton(buttonAllArticles)}>
                        <span className={cn(stls.category)}>{buttonAllArticles.title}</span>
                    </li>
                    {categories?.map(category => (
                        <li
                            key={category.slug}
                            className={stls.categoryItem}
                            onClick={() => handleFilterButtons(category)}>
                            <span className={cn(stls.category)}>{category.title}</span>
                        </li>
                    ))}
                </ul>
            </Wrapper>
        </section>
    )
}

export default SectionJournalCategories