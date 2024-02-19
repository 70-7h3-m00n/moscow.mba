import stls from './LoaderThankyou.module.sass'
import cn from 'classnames'

import Popup from 'reactjs-popup'
import Image from 'next/image'
import { IconCloseAlt } from '@/components/icons'
import { StageThanks } from '@/components/popups/PopupCTA/StageThanks/StageThanks'

export const LeadLoaderThankyouAlt = ({
	open,
	setOpen,
	openLoader,
	setOpenLoader,
	programId = null,
	programTitle = null
}) => {
	return (
		<>
			<Popup
				open={openLoader}
				modal
				lockScroll
				nested
				closeOnDocumentClick
				onClose={() => setOpenLoader(false)}
			>
				{/* @ts-expect-error  */}
				{close => (
					<div className={cn(stls.loader, stls.content)}>
						<button className={stls.close} onClick={close}>
							<IconCloseAlt fill='#fff' crossColor='#000' />
						</button>
						<Image
							src='/assets/images/Spinner.svg'
							width={82}
							height={82}
							alt='Фото клиента'
						/>
						<p>Ваша заявка отправляется, пожалуйста, подождите</p>
					</div>
				)}
				{/* <PopupLoader closePopUp={() => setOpenLoader(false)} /> */}
			</Popup>
			<Popup
				open={open}
				modal
				lockScroll
				nested
				closeOnDocumentClick
				onClose={() => setOpen(false)}
			>
				{/* @ts-expect-error  */}
				{close => <StageThanks close={close} />}
			</Popup>
		</>
	)
}
