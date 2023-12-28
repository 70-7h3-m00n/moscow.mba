import stls from './StudyCostPayment.module.sass'
import cn from 'classnames'
import { StudyCostPaymentProps } from './types'
import { FormBeta } from '@/components/forms/FormBeta/FormBeta'
import useAt from '@/hooks/useAt'
import { useContext, useState } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import Image from 'next/image'

export const StudyCostPayment = ({ className }: StudyCostPaymentProps) => {
	const at = useAt()
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const [open, setOpen] = useState(false)
	const [openLoader, setOpenLoader] = useState(false)

	const firstHandler = () => {
		console.log('Оставить заявку на бесплатную консультацию')
	}

	const secondHandler = () => {
		console.log(
			'Оплатить всю сумму сразу с дополнительной скидкой 5% — 8 957 Рф'
		)
	}

	const thirdHandler = () => {
		console.log('В рассрочку в Тинькофф')
	}

	const fourthHandler = () => {
		console.log('Купить в подарок')
	}

	const paymentMethods = [
		{
			name: 'Оставить заявку на бесплатную консультацию',
			image: <></>,
			handler: firstHandler
		},
		{
			name: 'Оплатить всю сумму сразу с дополнительной скидкой 5% — 8 957 Р',
			image: (
				<div className={stls.paymentType}>
					<Image
						src={'/assets/images/program/visa.svg'}
						alt='Visa'
						width={49}
						height={16}
					/>
					<Image
						src={'/assets/images/program/mir.svg'}
						alt='Mir'
						width={56}
						height={16}
					/>
					<Image
						src={'/assets/images/program/master-card.svg'}
						alt='Master card'
						width={25}
						height={16}
					/>
				</div>
			),
			handler: secondHandler
		},
		{
			name: 'В рассрочку в Тинькофф',
			image: (
				<Image
					src={'/assets/images/program/tinkoff.svg'}
					alt='Тинькофф'
					width={121}
					height={32}
				/>
			),
			handler: thirdHandler
		},
		{
			name: 'Купить в подарок',
			image: (
				<Image
					src={'/assets/images/program/gift.svg'}
					alt='Купить в подарок'
					width={41}
					height={42}
				/>
			),
			handler: fourthHandler
		}
	]

	return (
		<div className={cn(className, stls.content)}>
			<ul className={stls.list}>
				{paymentMethods.map(paymentMethod => (
					<li className={stls.item} key={paymentMethod.name}>
						<button
							className={stls.item__btn}
							onClick={() => paymentMethod.handler()}
						>
							<p className={stls.paymentText}>{paymentMethod.name}</p>
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
			/>
		</div>
	)
}
