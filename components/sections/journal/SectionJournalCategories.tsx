import { useContext } from 'react'
import cn from 'classnames'

import { TypeClassNames } from '@/types/index'

import { getClassNames } from '@/helpers/index'

import { ContextStaticPropsJournal } from '@/context/index'

import { Wrapper } from 'components/layout'

import stls from '@/styles/components/sections/journal/SectionJournalCategories.module.sass'

type TypeSectionJournalCategoriesProps = TypeClassNames

const SectionJournalCategories = ({ classNames }: TypeSectionJournalCategoriesProps) => {
    const { categories } = useContext(ContextStaticPropsJournal) 
    return (
        <section className={
            cn(stls.container, getClassNames({ classNames })) || undefined
        }>
            <Wrapper>
                <ul className={stls.categories}>
                    {categories?.map(category => (
                        <li
                            key={category.slug}
                            className={stls.categoryItem}>
                            <span className={cn(stls.category)}>{category.title}</span>
                        </li>
                    ))}
                </ul>
            </Wrapper>
        </section>
    )
}

export default SectionJournalCategories