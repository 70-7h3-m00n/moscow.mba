import stls from './SortingPopup.module.sass'
import cn from 'classnames'
import { SortingPopupProps } from './types'

import { useEffect, useRef, useState } from 'react'
import Popup from 'reactjs-popup'
import useWindowWidth from '@/hooks/useWindowWidth'
import { IconInfo } from '@/components/icons'
import { LIST_SORTING, SortingsEnum } from 'modules/programs-page-alt/fractals'

export const SortingPopup = ({ className, ...rest }: SortingPopupProps) => {
	const ref = useRef(null)

	const [opened, setOpened] = useState(false)

	const widthWindow = useWindowWidth()
	const [modal, setModal] = useState(false)

	const contentStyle = {
		backgroundColor: '#fff',
		color: '#000',
		width: 'max-content',
		maxWidth: '22rem',
		borderRadius: '0.7rem',
		padding: '1.5rem'
	}
	// const overlayStyle = { background: 'rgba(0,0,0,0.5)' }
	const arrowStyle = { display: 'none' } // style for an svg element

	useEffect(() => {
		if (widthWindow <= 767) {
			setModal(true)
		} else {
			setModal(false)
		}
	}, [widthWindow])

	const handlerOnChange = e => {
		console.log('>>>>>>>>>>>>>>>>>>', e.target.value)
	}

	return (
		<div className={cn(className, stls.container)}>
			<Popup
				className={stls.popup}
				trigger={open => (
					<button className={stls.btn}>
						<IconInfo opened={opened} onClick={() => setOpened(o => !o)} />
					</button>
				)}
				position={['bottom center']}
				closeOnDocumentClick
				open={opened}
				onClose={() => setOpened(false)}
				ref={ref}
				modal={modal}
				lockScroll
				{...{
					contentStyle,
					// overlayStyle,
					arrowStyle
				}}
			>
				<div className={stls.modalSorting}>
					{LIST_SORTING.map(item => (
						<div key={item.value} className={stls.itemModalSorting}>
							<input
								type='radio'
								name={SortingsEnum.sorting}
								value={item.value}
								id={item.value}
								onChange={e => handlerOnChange(e)}
								// checked={configPrograms?.[SortingsEnum.sorting] === item.value}
							/>
							<label className={stls.labelModalSorting} htmlFor={item.value}>
								{item.text}
							</label>
						</div>
					))}
				</div>
			</Popup>
		</div>
	)
}
