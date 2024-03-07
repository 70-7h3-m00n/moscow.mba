import stls from './FilterEmployment.module.sass'
import cn from 'classnames'
import { FilterEmploymentProps } from './types'

import { InputToggle } from '../ProgramsSearch/InputToggle/InputToggle'

export const FilterEmployment = ({
	className,
	...rest
}: FilterEmploymentProps) => {
	return (
		<div className={cn(className, stls.content)} {...rest}>
			<p className={stls.text}>С трудоустройством</p>
			<InputToggle />
		</div>
	)
}
