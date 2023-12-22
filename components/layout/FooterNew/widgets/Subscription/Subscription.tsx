import stls from './Subscription.module.sass'
import cn from 'classnames'
import { SubscriptionProps } from './types'

import { BtnBeta } from '@/components/btns'

export const Subscription = ({ className, ...rest }: SubscriptionProps) => {
	return (
		<div className={cn(className, stls.content)} {...rest}>
			<p className={stls.title}>Подписаться на рассылку</p>
			<p className={stls.description}>
				Узнавайте первыми последние новости из мира бизнеса и всегда будте в
				курсе специальных предложений
			</p>
			<form action='POST' className={stls.form}>
				<input
					className={stls.form__input}
					type='email'
					placeholder='Электронная почта'
				/>
				<BtnBeta className={stls.form__btn} variant='alpha'>
					Отправить
				</BtnBeta>
			</form>
			<p className={stls.form__desc}>
				Получайте только полезную информацию от Moscow Business Academy
			</p>
		</div>
	)
}
