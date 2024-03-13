import stls from './InputToggle.module.sass'
import cn from 'classnames'
import { InputToggleProps } from './types'

export const InputToggle = ({ className, ...rest }: InputToggleProps) => {
	return (
		<div className={cn(className, stls.toggle)}>
			<label className={stls.toggle__label}>
				<input className={stls.toggle__input} type='checkbox' {...rest} />
			</label>
		</div>
	)
}
