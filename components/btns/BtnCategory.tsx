import stls from '@/styles/components/btns/BtnCategory.module.sass'

import { TypeClassNames } from '@/types/index'

type TypeBtnCategory = {
    children: string
}

const BtnCategory:React.FC<TypeBtnCategory> = ({ children }) => {
    return (
        <button className={stls.category}>{children}</button>
    )
}

export default BtnCategory