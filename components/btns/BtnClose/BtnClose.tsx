import stls from './BtnClose.module.sass'
import cn from 'classnames'
import { BtnCloseProps } from './types'

import { IconCloseAlt } from '@/components/icons'

export const BtnClose = ({ className, ...rest }: BtnCloseProps) => {
	return (
		<button className={cn(className, stls.btn)} {...rest}>
			<IconCloseAlt />
		</button>
	)
}
