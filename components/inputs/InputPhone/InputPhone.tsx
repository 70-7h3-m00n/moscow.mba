import stls from './InputPhone.module.sass'
import cn from 'classnames'
import { InputPhoneProps } from './types'

export const InputPhoneNew = ({
	className,
	register,
	errors
}: InputPhoneProps) => {
	return (
		<div className={cn(className, stls.content)}>
			<input
				className={stls.input}
				type='tel'
				placeholder='Номер телефона'
				aria-label={'Телефон'}
				{...register('phone', {
					required: '* введите номер телефона',
					minLength: {
						value: 5,
						message: '* номер слишком короткий'
					}
				})}
				onFocus={e => e.target.classList.add('texted')}
				onBlur={e =>
					e.target.value === '' ? e.target.classList.remove('texted') : ''
				}
			/>
			<p className={stls.error}>{errors.phone && errors.phone.message}</p>
		</div>
	)
}
