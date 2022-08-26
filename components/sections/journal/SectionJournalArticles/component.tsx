import stls from './stls.module.sass'
import { Wrapper } from 'components/layout'
import { JournalArticlesTitle } from './components'

export const SectionJournalArticles = () => {
    return (
        <section>
            <Wrapper>
                <JournalArticlesTitle/>
            </Wrapper>
        </section>
    )
}