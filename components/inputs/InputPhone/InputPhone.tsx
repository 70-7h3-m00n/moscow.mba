import stls from '../Input/Input.module.sass'
import cn from 'classnames'
import { InputPhoneProps } from './types'
import {
	handlePhoneInput,
	handlePhonePaste,
	hanleOnKeyDown
} from '@/helpers/general/handleForm'

export const InputPhoneNew = ({
	className,
	register,
	errors,
	variant
}: InputPhoneProps) => {
	return (
		<div
			className={cn(className, stls.content, {
				[stls.errorWrapper]: errors.phone,
				[stls.required]: true
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
				type='tel'
				placeholder='Номер телефона'
				aria-label={'Телефон'}
				{...register('phone', {
					required: 'Пожалуйста, введите номер телефона',
					minLength: {
						value: 17,
						message: 'Пожалуйста, введите корректный номер телефона'
					}
				})}
				onFocus={e => e.target.classList.add('texted')}
				onBlur={e =>
					e.target.value === '' ? e.target.classList.remove('texted') : ''
				}
				onInput={handlePhoneInput}
				onKeyDown={hanleOnKeyDown}
				onPaste={handlePhonePaste}
			/>
			<p className={stls.error}>{errors.phone && errors.phone.message}</p>
		</div>
	)
}
