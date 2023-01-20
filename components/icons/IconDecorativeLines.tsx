import stls from '@/styles/components/icons/IconDecorativeLines.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

// TODO: improve structure
const IconDecorativeLines = () => {
  return (
    <div className={stls.container}>
      <svg
        viewBox='0 0 429 429'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-label='Декоративные линии'>
        {/* <title>Декоративные линии</title> */}
        <g opacity='0.44'>
          <path
            d='M214.053 214.5C214.053 96.4307 118.46 0.688474 0.446869 0.447332V214.5C0.446869 332.569 96.0403 428.312 214.053 428.553V214.5Z'
            stroke='#808080'
            strokeWidth='0.89375'
          />
          <path
            d='M428.5 0.5H215.001C215.27 118.292 310.708 213.73 428.5 213.999V0.5Z'
            stroke='#808080'
          />
          <path
            d='M214.22 215H427.719C427.45 332.792 332.012 428.23 214.22 428.499V215Z'
            stroke='#808080'
          />
        </g>
      </svg>
    </div>
  )
}

export default IconDecorativeLines
