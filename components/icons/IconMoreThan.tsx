import stls from '@/styles/components/icons/IconMoreThan.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

type TypeIconMoreThanProps = TypeClassNames

// TODO: improve structure
const IconMoreThan = ({ classNames }: TypeIconMoreThanProps) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg
        viewBox='0 0 8 11'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-label={'Стрелка вправо'}>
        {/* <title>Стрелка вправо</title> */}
        <path
          d='M2 1.5L6 5.5L2 9.5'
          stroke={colors.alpha}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconMoreThan
