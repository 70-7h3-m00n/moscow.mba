import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import {
  TypeRenederTimeProps,
  TypeLessThanLiniar,
  TypeLessThanNonLiniar
} from '@/types/index'

const getRenderTime = ({ timestamp, options, formatString }: TypeRenederTimeProps) => {
  const date = new Date(timestamp)
  const now = new Date()
  const ago = {
    days: Math.floor((date.getTime() - now.getTime()) / 1000 / 60 / 60 / 24),
    sec: (now.getTime() - date.getTime()) / 1000
  }
  const result = {
    liniar: options.find(item => item.type === 'liniar' && ago.sec < item.sec) as TypeLessThanLiniar,
    nonLiniar: options.find(
      item => item.type === 'nonLiniar' && item.days === ago.days
    ) as TypeLessThanNonLiniar
  }
  const renderDate = format(new Date(date), formatString || 'dd LLL', {
    locale: ru
  })

  return result.liniar?.label || result.nonLiniar?.label || renderDate
}

export default getRenderTime