import cn from 'classnames'

import { getClassNames } from '@/helpers/index'

import { TypeClassNames } from '@/types/index'

type TypeInputSubmitJournalProps = {
    children: React.ReactNode
    errors: any
} & TypeClassNames
const InputSubmitJournal = ({ children, errors, classNames }: TypeInputSubmitJournalProps) => {
    return (
        <button
            type='submit'
            className={cn(getClassNames({ classNames }))}
            disabled={errors.name || errors.phone || errors.email ? true : false}>
            {children}
        </button>
    )
}

export default InputSubmitJournal