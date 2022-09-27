import cn from 'classnames'

import {
    TypeClassNames,
    TypeLibJournalArticle
} from '@/types/index'

import { getClassNames } from '@/helpers/index'

import { PopupToShare } from '@/components/popups'

import stls from '@/styles/components/sections/journal/SectionJournalToShare.module.sass'

type TypeSectionJournalToShareProps = {
    journalArticle: TypeLibJournalArticle
} & TypeClassNames

const SectionJournalToShare = ({
    classNames,
    journalArticle
}: TypeSectionJournalToShareProps) => {
    if (!journalArticle) return null

    return (
        <div className={cn(stls.container, getClassNames({ classNames })) || undefined}>
            <PopupToShare
                journalArticle={journalArticle}
                classNames={[stls.popupJournalToShare]} />
        </div>
    )
}

export default SectionJournalToShare