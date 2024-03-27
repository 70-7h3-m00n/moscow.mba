import stls from './SortingPopup.module.sass'
import cn from 'classnames'
import { SortingPopupProps } from './types'

import { ChangeEvent, useContext, useRef, useState } from 'react'
import Popup from 'reactjs-popup'
import {
	LIST_SORTING,
	SortingEnum,
	SortingsEnum
} from 'modules/programs-page-alt/fractals'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'
import { IconSorting } from '../../../../../../components/icons/IconSorting/IconSorting'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'

export const SortingPopup = ({ className, ...rest }: SortingPopupProps) => {
	const ref = useRef(null)
	const { state, dispatch } = useContext(ProgramsPageContext)

	const [opened, setOpened] = useState(false)

	const contentStyle = {
		backgroundColor: '#fff',
		color: '#000',
		width: 'max-content',
		maxWidth: '22rem',
		borderRadius: '0.7rem',
		padding: '1rem'
	}
	const arrowStyle = { display: 'none' } // style for an svg element

	const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		const sortingValue = event.target.value as SortingEnum // приводим значение к типу SortingEnum
		dispatch({ type: ACTION.SET_SORTING, payload: sortingValue })
	}
	return (
		<div className={cn(className, stls.container)}>
			<Popup
				className={stls.popup}
				trigger={open => (
					<button className={stls.btn}>
						<span className={stls.btn__text}>Сортировать</span>
						<IconSorting
							className={cn(stls.btn__icon, { [stls.opened]: open })}
						/>
					</button>
				)}
				position={['bottom center']}
				closeOnDocumentClick
				open={opened}
				onClose={() => setOpened(false)}
				ref={ref}
				lockScroll
				{...{ contentStyle, arrowStyle }}
			>
				<div className={stls.modal}>
					{LIST_SORTING.map(item => (
						<label key={item.value} className={stls.modal__label}>
							<input
								className={stls.modal__radio}
								type='radio'
								name={SortingsEnum.sorting}
								value={item.value}
								id={item.value}
								onChange={e => handlerOnChange(e)}
								checked={state?.programsConfig.sorting === item.value}
							/>
							{item.text}
						</label>
					))}
				</div>
			</Popup>
		</div>
	)
}
