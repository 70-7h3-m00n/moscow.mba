import cn from 'classnames'

import { TypeClassNames } from '@/types/index'
import {
    TypeContextJournalFilterButtons,
    TypeContextJournalCategory
} from '@/types/context/journal/TypeContextJournal'

import { getClassNames } from '@/helpers/index'

import { Wrapper } from 'components/layout'

import stls from '@/styles/components/sections/journal/SectionJournalCategories.module.sass'

type TypeSectionJournalCategoriesProps = {
    filterCategoriesButtons: TypeContextJournalFilterButtons
    filterAllCategoriesButtons: boolean
    handleFilterButtons: (category: TypeContextJournalCategory) => void
    handlefilterAllCategoriesButtons: () => void
} & TypeClassNames

const SectionJournalCategories = ({
    classNames,
    handleFilterButtons,
    handlefilterAllCategoriesButtons,
    filterCategoriesButtons,
    filterAllCategoriesButtons,
}: TypeSectionJournalCategoriesProps) => {
    const buttonAllArticles = {
        title: `Все статьи`,
        slug: 'vse_stati',
    }

    if (!filterCategoriesButtons) return null
    
    return (
        <section className={
            cn(stls.container, getClassNames({ classNames })) || undefined
        }>
            <Wrapper>
                <ul className={stls.categories}>
                    <li
                        onClick={() => handlefilterAllCategoriesButtons()}>
                        <button className={
                            filterAllCategoriesButtons
                                ? `${stls.categoryItemIsActive} ${stls.categoryAllItemIsActive}`
                                : stls.categoryItem
                        }>{buttonAllArticles.title}</button>
                    </li>
                    {
                        filterCategoriesButtons?.map(category => (
                            <li
                                key={category.slug}
                                onClick={() => handleFilterButtons(category)}>
                                <button className={
                                    category.state && !filterAllCategoriesButtons
                                        ? stls.categoryItemIsActive
                                        : stls.categoryItem
                                }>{category.title}</button>
                            </li>
                        ))
                    }
                </ul>
            </Wrapper>
        </section>
    )
}

export default SectionJournalCategories