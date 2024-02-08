import stls from './PopupGift.module.sass'
import cn from 'classnames'
import { PopupGiftProps } from './types'

import Image from 'next/image'
import Popup from 'reactjs-popup'
import { IconCloseAlt, IconLogo, IconLogoTitle } from '@/components/icons'
import { useState } from 'react'

export const PopupGift = ({
	programTitle,
	studentName,
	untilDate,
	programType
}: PopupGiftProps) => {
	const [open, setOpen] = useState(false)
	const closeModal = () => setOpen(false)

	const popupBody: any = (close: () => void) => (
		<div className={stls.modal}>
			<p className={stls.modal__title}>
				Мы отправим на вашу почту письмо с подарочным сертификатом
			</p>
			<button className={stls.modal__printBtn}>
				<span>🖨</span>
				<span>Его можно переслать или распечатать</span>
			</button>

			<div className={cn(stls.modal__certificate, stls.certificate)}>
				<div className={stls.certificate__logo}>
					<IconLogo className={stls.logo__icon} />
					<IconLogoTitle className={stls.logo__name} />
				</div>
				<p className={stls.certificate__title}>Вам подарок</p>
				<p className={stls.certificate__format}>
					Онлайн-обучение <span>{programType}</span>
				</p>
				<p className={stls.certificate__student}>{studentName}</p>
				<p className={stls.certificate__program}>{programTitle}</p>
				<div className={cn(stls.certificate__until, stls.until)}>
					<p className={stls.until__title}>Ближайшее зачисление</p>
					<p className={stls.until__date}>{untilDate}</p>
				</div>
				<button className={stls.certificate__programBtn}>
					Подробнее о программе
				</button>
			</div>
			<button
				className={stls.close}
				onClick={() => {
					close()
				}}
			>
				<IconCloseAlt fill='#000' />
			</button>
		</div>
	)

	return (
		<div className={stls.content}>
			<button
				className={stls.giftBtn}
				onClick={event => {
					event.preventDefault()
					setOpen(o => !o)
				}}
			>
				Предпросмотр подарка
				<Image
					src='/assets/images/program/gift-btn.svg'
					width={24}
					height={24}
					alt='Искры'
					quality={100}
				/>
			</button>
			<Popup
				open={open}
				onClose={closeModal}
				modal
				closeOnDocumentClick
				lockScroll
			>
				{popupBody}
			</Popup>
		</div>
	)
}
