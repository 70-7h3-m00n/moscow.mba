import stls from '@/styles/components/icons/IconClose.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'
import React from 'react'

type TIconCloseProps = TypeClassNames & {
  stroke?: TypeColor
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler
}

// TODO: improve structure
const IconClose: React.FC<TIconCloseProps> = ({
  classNames,
  stroke,
  style = {},
  ...props
}): JSX.Element => {
  return (
    <IconContainer
      classNames={[
        cn(stls.container, getClassNames({ classNames })) || undefined
      ]}
      {...props}>
      <svg
        style={style}
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <title>Закрыть</title>
        <path
          d='M1 1L13 13'
          stroke={stroke || colors.omega}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13 1L1 13'
          stroke={stroke || colors.omega}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </IconContainer>
  )
}

export default IconClose
