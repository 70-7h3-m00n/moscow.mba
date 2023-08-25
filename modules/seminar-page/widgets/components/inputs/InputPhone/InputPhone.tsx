import stls from './InputPhone.module.sass'
import cn from 'classnames'
import { useAt } from '@/hooks/index'

const InputPhone = ({ register, errors, width = '25' }) => {
	const at = useAt()
	return (
		<div className={`input-block width-${width}`}>
			<input
				className={stls.input}
				type='tel'
				aria-label={at.en ? 'Phone number' : 'Телефон'}
				{...register('phone', {
					required: `*${
						at.en
							? 'Phone number is required'
							: 'Пожалуйста, введите Ваш номер телефона'
					}`,
					minLength: {
						value: 5,
						message: `*${
							at.en
								? 'Phone number is too short'
								: 'Номер телефона слишком короткий'
						}`
					}
				})}
				onFocus={e => e.target.classList.add('texted')}
				onBlur={e =>
					e.target.value === '' ? e.target.classList.remove('texted') : ''
				}
			/>
			<div
				className={cn(stls.placeholder, {
					'input-placeholder': true
				})}>
				{at.en ? 'Phone number' : 'Телефон'}
			</div>
			<p className='inpt-err-msg'>{errors.phone && errors.phone.message}</p>
		</div>
	)
}

export default InputPhone
