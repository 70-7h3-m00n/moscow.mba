import stls from '@/styles/components/popups/PopupDuration.module.sass'
import { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import { useWindowWidth } from '@/hooks/index'
import { IconInfoDuration } from '@/components/icons'
import { ruCase } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type PopupDurationPropsType = {
	title: string
	duration?: number
	classNames?: string
}

const PopupDuration: React.FC<PopupDurationPropsType> = ({
	title,
	duration,
	classNames
}) => {
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
		<div className={`${stls.container} ${classNames}`}>
			<p>{title}</p>
			<Popup
				trigger={isOpen => (
					<a className={stls.trigger}>
						<IconInfoDuration active={isOpen} />
					</a>
				)}
				closeOnDocumentClick
				position={'top left'}
				offsetX={-150}
				offsetY={35}
				modal={modal}
				arrow={false}>
				<div className={stls.content}>
					<span className={stls.text}>Длительность:</span>
					<span className={stls.time}>
						{duration} {ruCase(duration, ['час', 'часа', 'часов'])}
					</span>
				</div>
			</Popup>
		</div>
	)
}

export default PopupDuration
