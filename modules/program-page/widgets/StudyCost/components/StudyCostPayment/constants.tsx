import stls from './StudyCostPayment.module.sass'

import { IconVisaAlt } from '@/components/icons'
import { PAYMENT } from '@/types/payment'
import Image from 'next/image'

export const paymentMethods = [
	{
		type: PAYMENT.CONSULTATION,
		name: 'Оставить заявку на бесплатную консультацию',
		image: <></>
	},
	{
		type: PAYMENT.FULLPRICE,
		// name: `Оплатить всю сумму сразу с дополнительной скидкой 5% — `,
		name: `Оплатить всю сумму сразу — `,
		image: (
			<span className={stls.paymentType}>
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
			</span>
		)
	},
	{
		type: PAYMENT.CREDIT,
		name: 'В рассрочку Тинькофф на 12 месяцев',
		image: (
			<Image
				src={'/assets/images/program/tinkoff.svg'}
				alt='Тинькофф'
				width={121}
				height={32}
			/>
		)
	},
	{
		type: PAYMENT.GIFT,
		name: 'Купить в подарок',
		image: (
			<Image
				src={'/assets/images/program/gift.svg'}
				alt='Купить в подарок'
				width={41}
				height={42}
			/>
		)
	}
]
