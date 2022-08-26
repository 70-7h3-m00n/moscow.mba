import { useContext } from 'react'
import { ContextJournalContext } from '@/context/index'

import { JournalCategoriesListButton } from '../../atoms'
import stls from './stls.module.sass'

export const JournalCategoriesList = () => {
    const { journalCategories } = useContext(ContextJournalContext)
    // Статьи
    // console.log(journalArticles)
    return (
        <ul className={stls.categories}>
            {journalCategories
            ?.filter(category => category.title && category.slug)
            .map(category => (
                <li className={stls.listItem} key={category.slug}>
                    <JournalCategoriesListButton title={category.title}/>
                </li>
            ))}
        </ul>
    )
}