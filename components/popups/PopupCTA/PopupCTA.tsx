import stls from './PopupCTA.module.sass'
import cn from 'classnames'

import { PopupTeacherNewProps } from './types'
import Popup from 'reactjs-popup'
import { BtnBeta } from '@/components/btns'
import { useContext, useEffect, useState } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { IconCloseAlt } from '@/components/icons'
import { PopupLoader, PopupThankyou } from '..'
import { IconLoaderAlt } from '@/components/icons/IconLoaderAlt/IconLoaderAlt'
import Image from 'next/image'
import { FormBeta } from '@/components/forms/FormBeta/FormBeta'

export const PopupCTA = ({
	className,
	title,
	variant = 'alpha',
	btnText,
	...rest
}: PopupTeacherNewProps) => {
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const [stage, setStage] = useState<'form' | 'loader' | 'thanks'>('form')
	const [open, setOpen] = useState(false)
	const [openLoader, setOpenLoader] = useState(false)

	useEffect(() => {
		if (!open && !openLoader) setStage('form')
		if (!open && openLoader) setStage('loader')
		if (open && !openLoader) setStage('thanks')
	}, [open, openLoader])

	return (
		<>
			<Popup
				trigger={<BtnBeta variant={variant}>{btnText}</BtnBeta>}
				modal
				lockScroll
				nested
				closeOnDocumentClick
				onClose={() => setStage('form')}
			>
				{/* @ts-expect-error  */}
				{close => (
					<div className={cn(className, stls.content)} {...rest}>
						<button className={stls.close} onClick={close}>
							<IconCloseAlt fill='#fff' crossColor='#000' />
						</button>
						{stage === 'form' && (
							// {false && (
							<div className={stls.formWrapper}>
								<h3 className={stls.title}>{title}</h3>
								<FormBeta
									programTitle={program?.title}
									setOpenLoader={setOpenLoader}
									setOpen={setOpen}
									formName={`Заявка с формы 'Свяжитесь с нами'`}
									policyPrivacy
									variant={'alpha'}
								/>
							</div>
						)}
						{stage === 'loader' && (
							// {false && (
							<div className={stls.loader}>
								<Image
									src='/assets/images/Spinner.svg'
									width={82}
									height={82}
									alt='Фото клиента'
								/>
								<p>Ваша заявка отправляется, пожалуйста, подождите</p>
							</div>
						)}

						{stage === 'thanks' && (
							<div className={stls.thanks}>
								<p className={stls.thanks__title}>Спасибо!</p>
								<p className={stls.thanks__subtitle}>
									Наш менеджер свяжется с Вами в ближайшее время
								</p>
								<BtnBeta
									variant='beta'
									className={stls.thanks__btn}
									onClick={close}
								>
									Ок!
								</BtnBeta>
							</div>
						)}
					</div>
				)}
			</Popup>
		</>
	)
}
