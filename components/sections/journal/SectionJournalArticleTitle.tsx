import cn from 'classnames'

import stls from '@/styles/components/sections/journal/SectionJournalArticleTitle.module.sass'

import {
    TypeLibJournalArticle,
    TypeClassNames
} from '@/types/index'

import { getClassNames } from '@/helpers/index'

type TypeJournalArticleProps = {
    journalArticle: TypeLibJournalArticle
} & TypeClassNames

import { Wrapper, ContentJournalArticle } from '@/components/layout'
import { CardAuthor } from '@/components/cards'

const SectionJournalArticleTitle = ({
    journalArticle,
    classNames
}: TypeJournalArticleProps) => (
    <section className={cn(stls.container, getClassNames({ classNames })) || undefined}>
        <Wrapper column>
            <ContentJournalArticle>
                <h2 className={stls.title}>{journalArticle.title}</h2>
                <div className={stls.footer}>
                    {
                        journalArticle?.journalAuthors.map(author =>
                            <CardAuthor textAlign={'start'} fontWeightAuthorName={400} quote={author} />)
                    }
                </div>
            </ContentJournalArticle>
        </Wrapper>
    </section>
)

export default SectionJournalArticleTitle