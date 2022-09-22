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

import { ContentJournalArticle } from '@/components/layout'
import { CardAuthor } from '@/components/cards'
import { PopupToShare } from '@/components/popups'

const SectionJournalArticleTitle = ({
    journalArticle,
    classNames
}: TypeJournalArticleProps) => (
    <section className={cn(stls.container, getClassNames({ classNames })) || undefined}>
        <ContentJournalArticle>
            <h2 className={stls.title}>{journalArticle.title}</h2>
            <div className={stls.footer}>
                <div className={stls.authors}>
                    {
                        journalArticle?.journalAuthors.map((author, idx) =>
                            <CardAuthor
                                textAlign={'start'}
                                fontWeightAuthorName={400}
                                quote={author}
                                key={`${author.authorName}_${idx}`} />)
                    }
                </div>
                <div className={stls.toShare}>
                    <PopupToShare
                        journalArticle={journalArticle}
                        classNames={[stls.popupJournalArticleTitle]}
                    />
                </div>
            </div>
        </ContentJournalArticle>
    </section>
)

export default SectionJournalArticleTitle