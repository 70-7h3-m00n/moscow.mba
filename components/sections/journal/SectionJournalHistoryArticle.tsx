import Link from 'next/link'
import cn from 'classnames'

import { getClassNames } from '@/helpers/index'

import stls from '@/styles/components/sections/journal/SectionJournalHistoryArticle.module.sass'

import {
    TypeClassNames,
    TypeLibJournalArticle
} from '@/types/index'

import {
    routesFront
} from '@/config/index'

type TypeJournalArticleProps = {
    journalArticle: TypeLibJournalArticle
} & TypeClassNames

const SectionJournalHistoryArticle = ({
    journalArticle,
    classNames
}: TypeJournalArticleProps) => (
    <div className={
        cn([stls.container], getClassNames({ classNames })) || undefined
    }>
        <div className={stls.row}>
            <Link href={routesFront.journal}>
                <a className={stls.title}>{'Журнал'}</a>
            </Link>
            <span className={stls.slug}>{journalArticle.title}</span>
        </div>
    </div>
)

export default SectionJournalHistoryArticle
