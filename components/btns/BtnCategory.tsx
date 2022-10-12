import cn from 'classnames'

import { TypeClassNames } from '@/types/index'

import { getClassNames } from '@/helpers/index'

import stls from '@/styles/components/btns/BtnCategory.module.sass'

type TypeBtnCategory = {
    children: string
    onClick: () => void
} & TypeClassNames

const BtnCategory: React.FC<TypeBtnCategory> = ({ children, classNames }) => {
    return (
        <button className={
            cn(stls.category, getClassNames({ classNames })) || undefined
        }>{children}</button>
    )
}

export default BtnCategory