import stls from '../components/StudyCostPayment/StudyCostPayment.module.sass'

import { IconVisaAlt } from '@/components/icons'
import Image from 'next/image'
import React from 'react'

export const usePaymentData = () => {
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

	return [
		{
			name: 'Оставить заявку на бесплатную консультацию',
			image: <></>,
			handler: firstHandler
		},
		{
			name: 'Оплатить всю сумму сразу с дополнительной скидкой 5% — 8 957 Р',
			image: (
				<div className={stls.paymentType}>
					<IconVisaAlt />
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
}
