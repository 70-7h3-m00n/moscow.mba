import stls from '../Input/Input.module.sass'
import cn from 'classnames'
import { InputNameProps } from './types'

export const InputNameNew = ({
	className,
	register,
	errors,
	variant,
	placeholder = 'Имя',
	isRequired = false,
	...rest
}: InputNameProps) => {
	return (
		<div
			className={cn(className, stls.content, {
				[stls.errorWrapper]: errors.name,
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
				placeholder={placeholder}
				type='text'
				aria-label='Имя'
				{...register('name', {
					required: isRequired ? '* введите имя' : false,
					maxLength: {
						value: 32,
						message: '* имя не может содержать более 32-х символов'
					}
				})}
				{...rest}
			/>
			<p className={stls.error}>{errors.name && errors.name.message}</p>
		</div>
	)
}
