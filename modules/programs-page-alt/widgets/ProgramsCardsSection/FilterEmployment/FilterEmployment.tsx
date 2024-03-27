import stls from './FilterEmployment.module.sass'
import cn from 'classnames'
import { FilterEmploymentProps } from './types'

import { ChangeEvent, useContext } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { InputToggle } from '../ProgramsSearch/InputToggle/InputToggle'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'
import useAt from '@/hooks/useAt'
import { FilterTypeProgramEnum } from 'modules/programs-page/fractals'

export const FilterEmployment = ({
	className,
	...rest
}: FilterEmploymentProps) => {
	const at = useAt()
	const { state, dispatch } = useContext(ProgramsPageContext)

	const disabled =
		state.programsConfig.type === FilterTypeProgramEnum.mba ||
		state.programsConfig.type === FilterTypeProgramEnum.mini

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: ACTION.SET_EMPLOYMENT,
			payload: !state.programsConfig.employment
		})
	}

	return (
		<div
			className={cn(className, stls.content, {
				[stls.disabled]: disabled
			})}
			{...rest}
		>
			<p className={stls.text}>С трудоустройством</p>
			<InputToggle
				disabled={disabled}
				checked={state.programsConfig.employment}
				onChange={event => handleOnChange(event)}
			/>
		</div>
	)
}
