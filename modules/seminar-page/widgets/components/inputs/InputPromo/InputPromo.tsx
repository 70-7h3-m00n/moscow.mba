import stls from './InputPromo.module.sass'
import cn from 'classnames'
import { useAt } from '@/hooks/index'

const InputPromo = ({ register, errors, width = '25' }) => {
	const at = useAt()
	return (
		<div className={`input-block width-${width}`}>
			<input
				className={stls.input}
				type='text'
				aria-label={at.en ? 'Promo code' : 'Промокод'}
				{...register('promo', {
					minLength: {
						value: 3,
						message: `*${
							at.en ? 'Promo code is too short' : 'Промокод слишком короткий'
						}`
					},
					maxLength: {
						value: 10,
						message: `*${
							at.en ? 'Promo code is too long' : 'Промокод слишком длинный'
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
				{at.en ? 'Promo code' : 'Промокод'}
			</div>
			<p className='inpt-err-msg'>{errors.promo && errors?.promo?.message}</p>
		</div>
	)
}

export default InputPromo
