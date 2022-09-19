import cn from 'classnames'
import parse from 'html-react-parser'

import { TypeClassNames, TypeLibJournalArticleTables } from '@/types/index'

import { getClassNames } from '@/helpers/index'

import {
    Wrapper,
    ContentJournalArticle
} from '@/components/layout'

import stls from '@/styles/components/sections/journal/SectionJournalTable.module.sass'

type TypeJournalArticleTables = {
    journalArticleTables: TypeLibJournalArticleTables
} & TypeClassNames

const SectionJournalTable = ({ journalArticleTables, classNames }) => {
    return (
        <section className={cn(stls.container, getClassNames({ classNames })) || undefined}>
            <ContentJournalArticle>
                <div
                    className={
                        cn(
                            [stls.container, stls.regularTable],
                            // { [stls.complicatedTable]: complicatedTable },
                            getClassNames({ classNames })
                        ) || undefined
                    }>
                    {journalArticleTables[0] &&
                        parse(
                            journalArticleTables[0]
                                .replace(/<link.*>/g, '')
                                .replace(/<meta.*>/g, '')
                                .replace(/<style.*<\/style>/, '')
                        )}
                </div>
            </ContentJournalArticle>
        </section>
    )
}

export default SectionJournalTable