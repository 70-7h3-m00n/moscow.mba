import stls from './PaymentInfo.module.sass'
import cn from 'classnames'
import { PaymentInfoProps } from './types'
import IconMir from '@/components/icons/IconMir'
import IconMasterCard from '@/components/icons/IconMasterCard'
import IconVisa from '@/components/icons/IconVisa'
import IconJCB from '@/components/icons/IconJCB'
import IconAmericanExpress from '@/components/icons/IconAmericanExpress'

export const PaymentInfo = ({ className, ...rest }: PaymentInfoProps) => {
	return (
		<div className={cn(className, stls.content)} {...rest}>
			<IconMir />
			<IconMasterCard />
			<IconVisa />
			<IconJCB />
			<IconAmericanExpress />
		</div>
	)
}
