import stls from './InfoTooltip.module.sass'
import cn from 'classnames'
import { InfoTooltipProps } from './types'

import { useEffect, useRef, useState } from 'react'
import Popup from 'reactjs-popup'
import { useAt, useWindowWidth } from '@/hooks/index'
import { IconInfo } from '@/components/icons'

export const InfoTooltip = ({
	className,
	children,
	color = '#fff',
	textColor = '#000'
}: InfoTooltipProps) => {
	const at = useAt()
	const ref = useRef(null)

	const widthWindow = useWindowWidth()
	const [modal, setModal] = useState(false)

	const contentStyle = {
		backgroundColor: color,
		color: textColor,
		width: 'max-content',
		maxWidth: '22rem',
		borderRadius: '0.7rem',
		padding: '1.5rem'
	}
	// const overlayStyle = { background: 'rgba(0,0,0,0.5)' }
	const arrowStyle = { color } // style for an svg element

	useEffect(() => {
		if (widthWindow <= 767) {
			setModal(true)
		} else {
			setModal(false)
		}
	}, [widthWindow])

	return (
		<div className={cn(className, stls.container)}>
			<Popup
				className={stls.popup}
				trigger={open => (
					<button className={stls.btn}>
						<IconInfo />
					</button>
				)}
				position={[
					'top center',
					'bottom center',
					'bottom left',
					'left center',
					'left bottom'
				]}
				closeOnDocumentClick
				ref={ref}
				{...{
					contentStyle,
					// overlayStyle,
					arrowStyle
				}}
			>
				{children}
			</Popup>
		</div>
	)
}
