import { TypeChildren, TypeLibJournalCategory } from '@/types/index'

import stls from './stls.module.sass'

type TProps = {
    slug: TypeLibJournalCategory['slug']
} & TypeChildren

export const JournalButton: React.FC<TProps> = ({ slug, children }) => {
    return (
        <button className={stls.button}>{children}</button>
    )
}