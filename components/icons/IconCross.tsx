import stls from '@/styles/components/icons/IconCross.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

// TODO: improve structure
const IconCross = () => {
  return (
    <div className={stls.container}>
      <svg
        viewBox='0 0 27 27'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-label='Крест'>
        {/* <title>Крест</title> */}
        <circle opacity='0.1' cx='13.5' cy='13.5' r='13.5' fill='black' />
        <path
          d='M18.837 8.16211L8.1626 18.8365'
          stroke='white'
          strokeWidth='2'
        />
        <path
          d='M8.1626 8.16152L18.837 18.8359'
          stroke='white'
          strokeWidth='2'
        />
      </svg>
    </div>
  )
}

export default IconCross
