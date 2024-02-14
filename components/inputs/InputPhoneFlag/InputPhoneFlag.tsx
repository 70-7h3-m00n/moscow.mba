import stls from './InputPhoneFlag.module.sass'
import cn from 'classnames'
import { InputPhoneProps } from './types'
import PhoneInput from 'react-phone-input-2'
import ru from 'react-phone-input-2/lang/ru.json'
import 'react-phone-input-2/lib/style.css'
import { Controller } from 'react-hook-form'

export const InputPhoneFlag = ({
	className,
	errors,
	control,
	variant
}: InputPhoneProps) => {
	return (
		<div
			className={cn(className, stls.content, {
				[stls.errorWrapper]: errors.phone,
				[stls.required]: true,
				[stls.alpha]: variant === 'alpha',
				[stls.beta]: variant === 'beta',
				[stls.gamma]: variant === 'gamma',
				[stls.delta]: variant === 'delta'
			})}
		>
			<Controller
				name='phone'
				control={control}
				rules={{
					minLength: {
						value: 8,
						message: `Пожалуйста, введите корректный номер телефона`
					},
					required: `Пожалуйста, введите номер телефона`
				}}
				render={({ field: { onChange, value } }) => (
					<PhoneInput
						value={value}
						onChange={onChange}
						country='ru'
						placeholder='Номер телефона'
						aria-label='Телефон'
						localization={ru}
						containerClass={stls.containerInput}
						inputClass={cn(
							stls.input,
							{ [stls.alpha]: variant === 'alpha' },
							{ [stls.beta]: variant === 'beta' },
							{ [stls.gamma]: variant === 'gamma' },
							{ [stls.delta]: variant === 'delta' }
						)}
						buttonClass={stls.flagButton}
						dropdownClass={stls.dropdown}
						containerStyle={{
							marginBottom: `${errors.phone ? '5px' : '20px'}`
						}}
					/>
				)}
			/>
			<p className={stls.error}>{errors.phone && errors.phone.message}</p>
		</div>
	)
}
