import stls from './InputName.module.sass'
import cn from 'classnames'
import { InputNameProps } from './types'

export const InputNameNew = ({
	className,
	register,
	errors,
	...rest
}: InputNameProps) => {
	return (
		<div className={cn(className, stls.content)}>
			<input
				className={stls.input}
				placeholder='Имя'
				type='text'
				aria-label='Имя'
				{...register('name', {
					required: '* введите имя',
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
