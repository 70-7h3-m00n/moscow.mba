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

const SectionJournalTable = ({ journalArticleTables, classNames }: TypeJournalArticleTables) => (
    <div className={cn(stls.container, getClassNames({ classNames })) || undefined}>
        <ContentJournalArticle>
            <div
                className={
                    cn(
                        // TODO Если будет нужда в complicatedTable (усложненная таблица), то сделать
                        // { [stls.complicatedTable]: complicatedTable },
                        [stls.container, stls.regularTable],
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
    </div>
)

export default SectionJournalTable