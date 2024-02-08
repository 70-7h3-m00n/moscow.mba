import stls from './StudyCostPayment.module.sass'
import cn from 'classnames'
import { StudyCostPaymentProps } from './types'

import { FormBeta } from '@/components/forms/FormBeta/FormBeta'
import useAt from '@/hooks/useAt'
import { useState } from 'react'
import { PAYMENT, PaymentType } from '@/types/payment/paymentTypes'
import { getFullPaymentPrice, toNumberWithSpaces } from '@/helpers/index'
import { paymentMethods } from './constants'
import { LeadLoaderThankyouAlt } from '@/components/general/LoaderThankyou/LoaderThankyou'

export const StudyCostPayment = ({
	className,
	program
}: StudyCostPaymentProps) => {
	const at = useAt()

	const [open, setOpen] = useState(false)
	const [openLoader, setOpenLoader] = useState(false)

	const [activePaymentMethod, setActivePaymentMethod] = useState<PaymentType>(
		PAYMENT.CONSULTATION
	)

	// const consultationHandler = () => {
	// 	setActivePaymentMethod(PAYMENT.CONSULTATION)
	// }

	// const fullpriceHandler = () => {
	// 	setActivePaymentMethod(PAYMENT.FULLPRICE)
	// }

	// const creditHandler = () => {
	// 	setActivePaymentMethod(PAYMENT.CREDIT)
	// }

	// const giftHandler = () => {
	// 	setActivePaymentMethod(PAYMENT.GIFT)
	// }

	const programType = at.profession
		? 'profession'
		: at.course
		? 'course'
		: at.mba
		? 'mba'
		: 'mini'

	const fullPrice = `${toNumberWithSpaces(
		getFullPaymentPrice({ price: +program?.price, type: programType })
	)} Р`

	return (
		<div className={cn(className, stls.content)}>
			<ul className={stls.list}>
				{paymentMethods.map(paymentMethod => (
					<li
						className={cn(stls.item, {
							[stls.active]: paymentMethod.type === activePaymentMethod
						})}
						key={paymentMethod.name}
					>
						<button
							className={stls.item__btn}
							onClick={() => setActivePaymentMethod(paymentMethod.type)}
						>
							<p className={stls.paymentText}>
								{paymentMethod.name}
								{paymentMethod.type === PAYMENT.FULLPRICE && fullPrice}
							</p>
							{paymentMethod.image}
						</button>
					</li>
				))}
			</ul>
			<FormBeta
				programTitle={program?.title}
				setOpenLoader={setOpenLoader}
				setOpen={setOpen}
				formName={`Заявка с формы 'Стоимость обучения'`}
				policyPrivacy
				variant='delta'
				paymentMethod={activePaymentMethod}
			/>
			<LeadLoaderThankyouAlt
				open={open}
				setOpen={setOpen}
				openLoader={openLoader}
				setOpenLoader={setOpenLoader}
				programId={program?.id}
				programTitle={program?.title}
			/>
		</div>
	)
}
