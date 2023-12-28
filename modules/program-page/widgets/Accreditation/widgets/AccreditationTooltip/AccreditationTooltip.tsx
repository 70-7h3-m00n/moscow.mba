import stls from './HeroTooltip.module.sass'
import cn from 'classnames'
import { HeroTooltipProps } from './types'

import { Suspense, useContext, useEffect, useRef, useState } from 'react'
import Popup from 'reactjs-popup'
import { useAt, useWindowWidth } from '@/hooks/index'
import { IconInfo } from '@/components/icons'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'

export const HeroTooltip = ({ className, children }: HeroTooltipProps) => {
	const at = useAt()
	const ref = useRef(null)

	const widthWindow = useWindowWidth()
	const [modal, setModal] = useState(false)

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
				contentStyle={{
					backgroundColor: '#fff',
					width: 'max-content',
					maxWidth: '22rem',
					borderRadius: '0.7rem',
					padding: '1.5rem'
				}}
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
			>
				{children}
			</Popup>
		</div>
	)
}
