import stls from '@/styles/components/sections/journal/SectionJournalArticleTitle.module.sass'

import {
    TypeLibJournalArticle,
    TypeClassNames
} from '@/types/index'

type TypeJournalArticleProps = {
    journalArticle: TypeLibJournalArticle
} & TypeClassNames

const SectionJournalArticleTitle = ({
    journalArticle,
    classNames
}) => (
    <section>
        <h2 className={stls.title}>{journalArticle.title}</h2>
        <div className={stls.footer}>
            <div className={stls.author}>
                <div className={stls.image}></div>
                <p className={stls.title}>{'Автор'}</p>
                <p className={stls.name}>{`${journalArticle.journalAuthors[0].firstName} ${journalArticle.journalAuthors[0].lastName}`}</p>
            </div>
        </div>
    </section>
)

export default SectionJournalArticleTitle