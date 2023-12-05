import stls from './Switch.module.sass'
import cn from 'classnames'
import { SwitchProps } from './types'

export const Switch = ({ className }: SwitchProps) => {
	const toggleSwitch = true
	const handleToggleSwitch = () => {}

	return (
		<div className={cn(className, stls.wrapper)}>
			<div className={stls.container}>
				<input id='checkbox_toggle' type='checkbox' className={stls.check} />
				<div className={stls.checkbox}>
					<label className={stls.slide} htmlFor='checkbox_toggle'>
						<label className={stls.toggle} htmlFor='checkbox_toggle'></label>
						<label className={stls.text} htmlFor='checkbox_toggle'>
							MBA online
						</label>
						<label
							className={cn(stls.text, stls.mini)}
							htmlFor='checkbox_toggle'
						>
							Mini MBA
						</label>
					</label>
				</div>
			</div>
		</div>
	)
}
