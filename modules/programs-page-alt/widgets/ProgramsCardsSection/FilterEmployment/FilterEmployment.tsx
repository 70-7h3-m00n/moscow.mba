import stls from './FilterEmployment.module.sass'
import cn from 'classnames'
import { FilterEmploymentProps } from './types'

import { ChangeEvent, useContext } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { InputToggle } from '../ProgramsSearch/InputToggle/InputToggle'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'

export const FilterEmployment = ({
	className,
	...rest
}: FilterEmploymentProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: ACTION.SET_EMPLOYMENT,
			payload: !state.programsConfig.employment
		})
	}

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<p className={stls.text}>С трудоустройством</p>
			<InputToggle
				checked={state.programsConfig.employment}
				onChange={event => handleOnChange(event)}
			/>
		</div>
	)
}
