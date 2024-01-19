import stls from './PopupHeader.module.sass'
import cn from 'classnames'

import { useEffect, useRef, useState } from 'react'
import Popup from 'reactjs-popup'
import { useWindowWidth } from '@/hooks/index'
import { PopupHeaderProps } from './types'
import { PopupCta, PopupForm, PopupThanks } from './widgets'

export const PopupHeader = ({ className }: PopupHeaderProps) => {
	const ref = useRef(null)
	const widthWindow = useWindowWidth()
	const [open, setOpen] = useState(false)
	const [formStage, setFormStage] = useState(0)
	const [modal, setModal] = useState(false)

	const next = () => setFormStage(prev => (prev < 2 ? prev + 1 : prev))
	const prev = () => setFormStage(prev => (prev > 0 ? prev - 1 : prev))
	const close = () => setFormStage(0)

	const closePopup = () => ref.current.close()

	const formStages = [
		<PopupCta next={next} close={closePopup} key={'cta'} />,
		<PopupForm next={next} close={closePopup} prev={prev} key={'form'} />,
		<PopupThanks key={'thanks'} />
	]

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
					width: '27rem',
					borderRadius: '1rem'
				}}
				trigger={open => (
					<button
						className={cn(stls.btn, { [stls.opened]: open })}
						onClick={() => setOpen(o => !o)}
					>
						Позвонить
					</button>
				)}
				position={['bottom center', 'bottom left']}
				open={open}
				closeOnDocumentClick
				onClose={close}
				ref={ref}
				modal={modal}
				lockScroll
			>
				<div className={stls.content}>{formStages[formStage]}</div>
			</Popup>
		</div>
	)
}
