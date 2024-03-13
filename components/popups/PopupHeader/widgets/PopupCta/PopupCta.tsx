import stls from './PopupCta.module.sass'
import cn from 'classnames'
import { PopupCtaProps } from './types'

import useContactInfo from '@/config/contactData'
import { BtnBeta, BtnClose } from '@/components/btns'

export const PopupCta = ({ className, next, close }: PopupCtaProps) => {
	const contactInfo = useContactInfo()

	return (
		<div className={cn(className, stls.content)}>
			<p className={stls.title}>Приемная комиссия</p>
			<div className={stls.phone}>
				<a className={stls.phone__link} href={contactInfo.ru.tels[0].href}>
					{contactInfo.ru.tels[0].val}
				</a>
				<p className={stls.phone__desc}>{contactInfo.ru.tels[0].description}</p>
			</div>
			<div className={stls.phone}>
				<a className={stls.phone__link} href={contactInfo.ru.tels[1].href}>
					{contactInfo.ru.tels[1].val}
				</a>
				<p className={stls.phone__desc}>{contactInfo.ru.tels[1].description}</p>
			</div>
			<BtnBeta variant='alpha' size='s' onClick={next}>
				Обратный звонок
			</BtnBeta>
			<BtnClose className={stls.closeBtn} onClick={() => close()} />
		</div>
	)
}
