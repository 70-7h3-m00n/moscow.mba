import stls from '@/styles/components/icons/IconBell.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

// TODO: improve structure
const IconBell = () => {
  return (
    <div className={stls.container}>
      <svg
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-label='Звонок'>
        {/* <title>Звонок</title> */}
        <g>
          <path
            d='M9.99878 3.57731C10.8126 3.57731 11.5941 3.72091 12.3192 3.9838V3.89447C12.3192 2.66596 11.3198 1.6665 10.0913 1.6665H9.90667C8.67817 1.6665 7.67871 2.66596 7.67871 3.89447V3.98267C8.4035 3.72055 9.18471 3.57731 9.99878 3.57731V3.57731Z'
            fill='black'
          />
          <path
            d='M17.3233 17.0218H2.6766C2.3995 17.0218 2.14568 16.835 2.08805 16.5639C2.031 16.2955 2.15331 16.0306 2.40146 15.916C2.46034 15.8778 2.90357 15.5679 3.34731 14.6302C4.16229 12.9082 4.33335 10.4825 4.33335 8.75084C4.33335 5.62636 6.87532 3.08447 9.99976 3.08447C13.1168 3.08447 15.6541 5.61411 15.6661 8.72835C15.6664 8.73582 15.6666 8.74333 15.6666 8.75084C15.6666 10.4825 15.8376 12.9082 16.6526 14.6302C17.0963 15.5679 17.5395 15.8778 17.5985 15.916C17.8466 16.0306 17.969 16.2955 17.9119 16.5639C17.8542 16.8349 17.6005 17.0218 17.3233 17.0218ZM17.605 15.9201H17.6054H17.605Z'
            fill='black'
          />
          <ellipse
            cx='10.0003'
            cy='16.2502'
            rx='3.33333'
            ry='2.91667'
            fill='black'
          />
        </g>
      </svg>
    </div>
  )
}

export default IconBell
