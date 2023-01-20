import stls from '@/styles/components/icons/IconLogo.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors, companyName } from '@/config/index'
import { useAt } from '@/hooks/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

// TODO: improve structure
const IconLogo = () => {
  const at = useAt()

  return (
    <div className={stls.container}>
      <svg
        viewBox='0 0 276 276'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-label={companyName}>
        <title>{at.en ? companyName : 'Московская Бизнес Академия'}</title>
        <path d='M275.9 0H0V275.1H275.9V0Z' fill='#FF3535' />
        <path
          d='M224.7 223.5H208V197.8L201.2 183.4L194.4 197.8V208.6H180V181.5H172.2L165.4 168.9L158.6 181.5H150.8V160.2L144.2 150V128.9C142.1 115.7 140 102.6 137.9 89.4C135.8 102.6 133.7 115.7 131.6 128.9V150L125 160.2V181.5H117.2L110.4 168.9L103.6 181.5H95.8V208.6H81.6V197.8L74.8 183.4L68 197.8V223.5C62.4 223.5 56.9 223.5 51.3 223.5'
          stroke='white'
          strokeWidth='7'
          strokeMiterlimit='10'
          strokeLinejoin='round'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M138.4 52.2L140.2 58.3H146.1C146.6 58.3 146.9 58.7 146.9 59.2C146.9 59.5 146.8 59.8 146.5 59.9L141.7 63.7L143.6 69.8C143.7 70.3 143.5 70.8 143.1 71C142.8 71.1 142.5 71 142.3 70.8L137.6 67L132.8 70.8C132.4 71.1 131.9 71 131.6 70.6C131.4 70.3 131.4 70 131.5 69.8L133.3 63.7L128.5 59.9C128.1 59.6 128 59 128.3 58.6C128.5 58.3 128.8 58.2 129.1 58.2H135L136.8 52.1C136.9 51.6 137.4 51.3 137.9 51.5C138.2 51.7 138.4 52 138.4 52.2Z'
          fill='white'
        />
      </svg>
    </div>
  )
}

export default IconLogo
