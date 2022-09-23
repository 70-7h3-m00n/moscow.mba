import cn from 'classnames'

import {
    TypeLibJournalArticle,
    TypeClassNames
} from '@/types/index'

import { getClassNames } from '@/helpers/index'

import { ContentJournalArticle } from '@/components/layout'
import { CardAuthor } from '@/components/cards'
import { PopupToShare } from '@/components/popups'

import stls from '@/styles/components/sections/journal/SectionJournalArticleTitle.module.sass'

type TypeJournalArticleProps = {
    journalArticle: TypeLibJournalArticle
} & TypeClassNames

const SectionJournalArticleTitle = ({
    journalArticle,
    classNames
}: TypeJournalArticleProps) => {
    if (!journalArticle?.title || journalArticle?.journalAuthors) return null

    return (
        <section className={cn(stls.container, getClassNames({ classNames })) || undefined}>
            <ContentJournalArticle>
                <h2 className={stls.title}>{journalArticle?.title}</h2>
                <div className={stls.footer}>
                    <div className={stls.authors}>
                        {
                            journalArticle?.journalAuthors?.map((author, idx) =>
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
}

export default SectionJournalArticleTitle