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

import {
    Wrapper,
    ContentJournalArticle
} from '@/components/layout'

const SectionJournalToShare = ({
    classNames,
    journalArticle
}: TypeSectionJournalToShareProps) => (
    <section className={cn(stls.container, getClassNames({ classNames })) || undefined}>
        <Wrapper column>
            <ContentJournalArticle>
                <PopupToShare journalArticle={journalArticle}/>
            </ContentJournalArticle>
        </Wrapper>
    </section>
)

export default SectionJournalToShare