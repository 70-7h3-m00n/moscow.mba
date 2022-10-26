import stls from '@/styles/components/icons/IconTelegramAlt.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

// TODO: improve structure
const IconTelegram = ({ fill = '#fff' }) => {
  return (
    <div className={stls.container}>
      <svg
        viewBox='0 0 17 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-label={'Telegram'}>
        {/* <title>Telegram</title> */}
        <path
          d='M1.00575 5.54853L15.1951 0.0670872C15.8537 -0.17129 16.4289 0.228054 16.2155 1.2258L16.2167 1.22457L13.8007 12.6286C13.6217 13.4371 13.1422 13.6337 12.4713 13.2528L8.79213 10.536L7.01754 12.2489C6.82131 12.4455 6.65575 12.6114 6.27557 12.6114L6.53679 8.86001L13.3556 2.68801C13.6523 2.42628 13.2893 2.27883 12.8981 2.53933L4.47154 7.85489L0.838955 6.71953C0.0503826 6.46886 0.0332133 5.92944 1.00575 5.54853Z'
          fill={fill}
        />
      </svg>
    </div>
  )
}

export default IconTelegram
