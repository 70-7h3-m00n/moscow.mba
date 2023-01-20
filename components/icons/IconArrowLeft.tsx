import stls from '@/styles/components/icons/IconArrowLeft.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

type TypeIconArrowLeftProps = TypeClassNames & {
  color?: TypeColor
  title?: string
}

const IconArrowLeft = ({
  classNames,
  color,
  title
}: TypeIconArrowLeftProps) => {
  return (
    <IconContainer
      classNames={[
        cn(stls.container, getClassNames({ classNames })) || undefined
      ]}>
      <svg
        viewBox='0 0 10 17'
        fill={color || colors.omega}
        xmlns='http://www.w3.org/2000/svg'
        aria-label={title || 'Стрелка влево'}>
        {/* <title>{title || 'Стрелка влево'}</title> */}
        <path d='M9.65527 15.0647L2.84092 8.5L9.65527 1.93527C10.1149 1.49247 10.1149 0.77491 9.65527 0.332104C9.19563 -0.110701 8.45078 -0.110701 7.99114 0.332104L0.344732 7.69841C-0.114911 8.14122 -0.114911 8.85878 0.344732 9.30158L7.99114 16.6679C8.45078 17.1107 9.19563 17.1107 9.65527 16.6679C10.1149 16.2251 10.1149 15.5075 9.65527 15.0647Z' />
      </svg>
    </IconContainer>
  )
}

export default IconArrowLeft
