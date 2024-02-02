import stls from '../Input/Input.module.sass'
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
		<div
			className={cn(className, stls.content, {
				[stls.errorWrapper]: errors.email,
				[stls.required]: isRequired
			})}
		>
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
					required: isRequired
						? 'Пожалуйста, введите электронную почту'
						: false,
					pattern: {
						value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i,
						message: 'Пожалуйста, введите корректную почту'
					}
				})}
				{...props}
			/>

			<p className={stls.error}>{errors.email && errors.email.message}</p>
		</div>
	)
}
