import cn from 'classnames'

import { getClassNames } from 'helpers'
import { TypeClassNames } from 'types'
import { Wrapper } from 'components/layout'
import { JournalCategoriesList } from './components'

type TSectionJournalCategoriesProps = TypeClassNames

export const SectionJournalCategories = ({classNames}) => {
    return (
        <section className={cn(getClassNames({classNames})) || undefined}>
            <Wrapper>
                <JournalCategoriesList />
            </Wrapper>
        </section>
    )
}