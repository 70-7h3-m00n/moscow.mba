import stls from './StudyCost.module.sass'
import cn from 'classnames'
import { StudyCostProps } from './types'

import { Wrapper } from '@/components/layout'
import { StudyCostPrice } from './components/StudyCostPrice/StudyCostPrice'
import { StudyCostPayment } from './components/StudyCostPayment/StudyCostPayment'

export const StudyCostNew = ({ className, ...rest }: StudyCostProps) => {
	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<StudyCostPrice />
				<StudyCostPayment />
			</Wrapper>
		</section>
	)
}
