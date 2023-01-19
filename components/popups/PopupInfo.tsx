import stls from '@/styles/components/popups/PopupInfo.module.sass'
import { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import { useWindowWidth } from '@/hooks/index'
import { IconInfoFRDO } from '@/components/icons'

type PopupInfoPropsType = {
	title: string
	classNames?: string
	content: {
		title: string
		subtitle: string
		description: string
		items: string[]
	}
}

const PopupInfo: React.FC<PopupInfoPropsType> = ({
	title,
	content,
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
				trigger={() => (
					<a className={stls.trigger}>
						<IconInfoFRDO />
					</a>
				)}
				closeOnDocumentClick
				position={'top right'}
				offsetX={-180}
				offsetY={35}
				modal={modal}
				arrow={false}>
				<div className={stls.content}>
					<div className={stls.icon}>
						<IconInfoFRDO color={'#000'} />
					</div>
					<div className={stls.title}>
						<p className={stls.text}>
							{content.title}
							<span className={stls.strong}>{content.subtitle}</span>
						</p>
						<p className={stls.text}>{content.description}</p>
						<ul className={stls.list}>
							{content.items.map((item, i) => {
								return (
									<li className={stls.item} key={i}>
										{item}
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</Popup>
		</div>
	)
}

export default PopupInfo
