import cn from 'classnames'

import { getClassNames } from 'helpers'
import stls from './stls.module.sass'
import { TypeClassNames } from 'types'
import { Wrapper } from 'components/layout'
import { List } from './components'

type TSectionJournalCategoriesProps = TypeClassNames

export const SectionJournalCategories = ({classNames}) => {
    return (
        <section className={cn(getClassNames({classNames})) || undefined}>
            <Wrapper>
                <List />
            </Wrapper>
        </section>
    )
}