import stls from '@/styles/components/icons/IconCheck.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

type TypeIconCheck = TypeClassNames & { stroke?: string }

// TODO: improve structure
const IconCheck = ({ stroke = '#fff', classNames }: TypeIconCheck) => {
  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <svg
        viewBox='0 0 29 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-label='Галочка'>
        {/* <title>Галочка</title> */}
        <path
          d='M1.47119 13.7571L7.98548 20.2714L27.5283 0.728516'
          stroke={stroke}
          strokeWidth='2'
        />
      </svg>
    </div>
  )
}

export default IconCheck
