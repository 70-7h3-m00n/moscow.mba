import stls from './InputToggle.module.sass'
import cn from 'classnames'
import { InputToggleProps } from './types'

export const InputToggle = ({}: InputToggleProps) => {
	return (
		<div className={stls.toggle}>
			<input
				className={stls.toggle__input}
				id='toggle-switch'
				type='checkbox'
			/>
			<label className={stls.toggle__label} htmlFor='toggle-switch'></label>
		</div>
	)
}
