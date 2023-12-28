import stls from './InputSubmit.module.sass'
import cn from 'classnames'

import { InputSubmitProps } from './types'

export const InputSubmitNew = ({
	className,
	errors,
	children,
	variant = 'alpha',
	...props
}: InputSubmitProps) => {
	return (
		<button
			className={cn(className, stls.button, {
				[stls.beta]: variant === 'beta',
				[stls.disabled]: errors.name || errors.phone || errors.email
			})}
			type='submit'
			disabled={errors.name || errors.phone || errors.email ? true : false}
			{...props}
		>
			{children}
		</button>
	)
}
