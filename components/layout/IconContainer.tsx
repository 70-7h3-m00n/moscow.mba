import stls from '@/styles/components/layout/IconContainer.module.sass'
import { TypeClassNames, TypeChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import React from 'react'

type TIconContainerProps = TypeClassNames &
  TypeChildren & {
    ariaHidden?: 'true' | 'false' // TODO: figure out native types
  }

const IconContainer: React.FC<TIconContainerProps> = ({
  classNames,
  children,
  ariaHidden,
  ...props
}): JSX.Element => {
  return (
    <span
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={ariaHidden}
      {...props}>
      {children}
    </span>
  )
}

export default IconContainer
