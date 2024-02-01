import stls from './DiplomaPopup.module.sass'
import cn from 'classnames'
import { DiplomaPopupProps } from './types'

import Popup from 'reactjs-popup'
import { BtnBeta } from '@/components/btns'
import { IconCloseAlt } from '@/components/icons'
import { IconArrowAlt } from '../../components/icons/IconArrowAlt/IconArrowAlt'
import Image from 'next/image'

export const DiplomaPopup = ({ className, ...rest }: DiplomaPopupProps) => {
	return (
		<>
			<Popup
				trigger={
					<BtnBeta className={stls.btn} variant='beta'>
						Посмотреть дипломы
					</BtnBeta>
				}
				modal
				lockScroll
				nested
				closeOnDocumentClick
			>
				{/* @ts-expect-error  */}
				{close => (
					<div className={cn(className, stls.content)} {...rest}>
						<button className={stls.close} onClick={close}>
							<IconCloseAlt fill='#fff' crossColor='#000' />
						</button>
						<Image
							className={stls.image}
							src='/assets/diplomas/profession/certificate-profession-new.jpg'
							fill
							alt='Фото клиента'
						/>

						<div className={stls.navigation}>
							<IconArrowAlt
								className={cn(stls.iconModules)}
								// status='active'
								direction='left'
								variant='beta'
							/>
							<p className={stls.navigation__name}>Сертификат</p>
							<IconArrowAlt
								className={cn(stls.iconModules)}
								// status='active'
								direction='right'
								variant='beta'
							/>
						</div>
					</div>
				)}
			</Popup>
		</>
	)
}
