import stls from './stls.module.sass'
import { Wrapper } from 'components/layout'
import {
    JournalArticlesTitle,
    JournalArticles
} from './components'

export const SectionJournalArticles = () => {
    return (
        <section>
            <Wrapper>
                <JournalArticlesTitle />
                <JournalArticles />
            </Wrapper>
        </section>
    )
}