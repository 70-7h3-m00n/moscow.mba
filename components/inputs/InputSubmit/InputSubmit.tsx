import stls from './InputSubmit.module.sass'
import cn from 'classnames'

import { InputSubmitProps } from './types'

export const InputSubmitNew = ({
	className,
	errors,
	variant,
	...props
}: InputSubmitProps) => {
	return (
		<button
			className={cn(className, stls.button, {
				[stls.disabled]: errors.name || errors.phone || errors.email
			})}
			type='submit'
			disabled={errors.name || errors.phone || errors.email ? true : false}
			{...props}
		>
			Записаться на курс
		</button>
	)
}
