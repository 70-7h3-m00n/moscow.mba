import stls from './StudyCost.module.sass'
import cn from 'classnames'
import { StudyCostProps } from './types'

import { Wrapper } from '@/components/layout'
import { StudyCostPrice } from './components/StudyCostPrice/StudyCostPrice'
import { StudyCostPayment } from './components/StudyCostPayment/StudyCostPayment'
import { StudyCostWarning } from './components/StudyCostWarning/StudyCostWarning'
import { useEffect, useState } from 'react'

export const StudyCostNew = ({ className, ...rest }: StudyCostProps) => {
	const [warning, setWarning] = useState(false)

	useEffect(() => {
		const payment = sessionStorage.getItem('payment')
		setWarning(payment === 'waiting_for_capture')
	}, [])

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<StudyCostPrice />
				<StudyCostPayment />
				{warning && <StudyCostWarning />}
			</Wrapper>
		</section>
	)
}
