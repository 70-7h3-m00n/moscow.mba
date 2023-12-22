import stls from './StudyCostPayment.module.sass'
import cn from 'classnames'
import { StudyCostPaymentProps } from './types'

export const StudyCostPayment = ({ className }: StudyCostPaymentProps) => {
	return (
		<div className={cn(className, stls.content)}>
			<div className={stls.paymentBtns}>
				<button className={cn(stls.paymentBtns__btn)}>
					Оставить заявку на бесплатную консультацию
				</button>
				<button className={cn(stls.paymentBtns__btn)}>
					Оплатить всю сумму сразу с дополнительной скидкой 5% — 8 957 Р
				</button>
				<button className={cn(stls.paymentBtns__btn)}>
					В рассрочку в Тинькофф
				</button>
				<button className={cn(stls.paymentBtns__btn)}>Купить в подарок</button>
			</div>
		</div>
	)
}
