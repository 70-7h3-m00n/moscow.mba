import stls from './StudyCostPayment.module.sass'
import cn from 'classnames'
import { StudyCostPaymentProps } from './types'

import { FormBeta } from '@/components/forms/FormBeta/FormBeta'
import useAt from '@/hooks/useAt'
import { useContext, useState } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import Image from 'next/image'
import { IconVisaAlt } from '@/components/icons'
import { PAYMENT, PaymentType } from '@/types/payment/paymentTypes'
import { LeadLoaderThankyou } from '@/components/general'
// import routesFront from '@/config/routesFront'
// import axios from 'axios'
import {
	getFullPaymentPrice,
	// handlePayment,
	// handlePaymentType,
	toNumberWithSpaces
} from '@/helpers/index'
import { useRouter } from 'next/router'
import { paymentMethods } from './constants'

export const StudyCostPayment = ({ className }: StudyCostPaymentProps) => {
	const at = useAt()
	// const router = useRouter()
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const [open, setOpen] = useState(false)
	const [openLoader, setOpenLoader] = useState(false)

	const [activePaymentMethod, setActivePaymentMethod] = useState<PaymentType>(
		PAYMENT.CONSULTATION
	)
	// console.log('activePaymentMethod: ', activePaymentMethod)

	const consultationHandler = () => {
		setActivePaymentMethod(PAYMENT.CONSULTATION)
	}

	const fullpriceHandler = () => {
		setActivePaymentMethod(PAYMENT.FULLPRICE)
	}

	const creditHandler = () => {
		setActivePaymentMethod(PAYMENT.CREDIT)
	}

	const giftHandler = () => {
		setActivePaymentMethod(PAYMENT.GIFT)
	}

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
			<LeadLoaderThankyou
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
