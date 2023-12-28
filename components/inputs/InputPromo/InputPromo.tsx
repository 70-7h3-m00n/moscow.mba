import stls from './InputPromo.module.sass'
import cn from 'classnames'
import { InputPromoProps } from './types'

export const InputPromoNew = ({
	className,
	register,
	errors,
	variant
}: InputPromoProps) => {
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
				type='text'
				placeholder='Промокод'
				aria-label='Промокод'
				{...register('promo', {
					minLength: {
						value: 3,
						message: `* промокод слишком короткий`
					},
					maxLength: {
						value: 10,
						message: `* промокод слишком длинный`
					}
				})}
			/>
			<p className={stls.error}>{errors.promo && errors?.promo?.message}</p>
		</div>
	)
}
