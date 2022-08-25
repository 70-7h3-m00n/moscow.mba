import { useContext } from 'react'
import { ContextJournalContext } from '@/context/index'

import { ListButton } from '../../atoms'
import stls from './stls.module.sass'

export const List = () => {
    const { journalCategories } = useContext(ContextJournalContext)

    console.log(journalCategories)
    return (
        <ul className={stls.categories}>
            {journalCategories
            ?.filter(category => category.title && category.slug)
            .map(category => (
                <li className={stls.listItem}>
                    <ListButton key={category.slug} title={category.title}/>
                </li>
            ))}
        </ul>
    )
}