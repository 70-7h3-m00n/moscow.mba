import stls from './InputEmail.module.sass'
import cn from 'classnames'
import { InputEmailProps } from './types'

export const InputEmailNew = ({
	className,
	register,
	errors,
	variant,
	isRequired = false,
	...props
}: InputEmailProps) => {
	return (
		<div className={cn(className, stls.content)}>
			<input
				className={cn(
					stls.input,
					{ [stls.alpha]: variant === 'alpha' },
					{ [stls.beta]: variant === 'beta' },
					{ [stls.gamma]: variant === 'gamma' },
					{ [stls.delta]: variant === 'delta' }
				)}
				type='email'
				placeholder='Электронная почта'
				aria-label='Электронная почта'
				{...register('email', {
					required: isRequired ? '* введите электронную почту' : false,
					pattern: {
						value:
							/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
						message: '* адрес почты введен неверно'
					}
				})}
				{...props}
			/>

			<p className={stls.error}>{errors.email && errors.email.message}</p>
		</div>
	)
}
