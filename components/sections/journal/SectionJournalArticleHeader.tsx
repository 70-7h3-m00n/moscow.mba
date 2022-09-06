import cn from 'classnames'

import { getClassNames } from '@/helpers/index'

import {
    TypeLibJournalArticle,
    TypeLessThan,
    TypeLessThanLiniar,
    TypeClassNames
} from '@/types/index'

import { getRenderTime } from '@/helpers/index'

import { GeneralJournalArticleCreatedAt } from '@/components/general'

import stls from '@/styles/components/sections/journal/SectionJournalArticleHeader.module.sass'

type TypeJournalArticleProps = {
    journalArticle: TypeLibJournalArticle
} & TypeClassNames

const lessThan: TypeLessThan = [
    {
        type: 'liniar',
        sec: 10,
        label: 'Только что'
    },
    {
        type: 'liniar',
        sec: 60,
        label: 'Меньше минуты назад'
    },
    {
        type: 'liniar',
        sec: 60 * 5,
        label: 'Меньше пяти минут назад'
    },
    {
        type: 'liniar',
        sec: 3600,
        label: 'Меньше часа назад'
    },
    {
        type: 'liniar',
        sec: 3600 * 2,
        label: 'Меньше двух часов назад'
    },
    {
        type: 'liniar',
        sec: 3600 * 3,
        label: 'Меньше трех часов назад'
    },
    {
        type: 'nonLiniar',
        days: 0,
        label: 'Сегодня'
    },
    {
        type: 'nonLiniar',
        days: -1,
        label: 'Вчера'
    },
    {
        type: 'nonLiniar',
        days: -2,
        label: 'Меньше двух дней назад'
    },
]

const pageOptions = lessThan.filter(item => item.type === 'liniar') as Array<TypeLessThanLiniar>

const SectionJournalArticleHeader = ({
    journalArticle,
    classNames
}: TypeJournalArticleProps) => {
    const time = getRenderTime({ timestamp: journalArticle.createdAt, options: pageOptions })

    return (
        <header className={
            cn([stls.container], getClassNames({ classNames })) || undefined
        }>
            <button className={stls.category} disabled>{journalArticle.journalCategory.title}</button>
            <GeneralJournalArticleCreatedAt time={time} />
        </header>
    )
}

export default SectionJournalArticleHeader