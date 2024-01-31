import stls from './PopupCTA.module.sass'
import cn from 'classnames'

import { PopupTeacherNewProps } from './types'
import Popup from 'reactjs-popup'
import { BtnBeta } from '@/components/btns'
import { FormBeta } from 'modules/program-page/widgets'
import { useContext, useState } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { IconCloseAlt } from '@/components/icons'
import { LeadLoaderThankyou } from '@/components/general'
import { PopupLoader, PopupThankyou } from '..'

export const PopupCTA = ({
	className,
	title,
	...rest
}: PopupTeacherNewProps) => {
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const [open, setOpen] = useState(false)
	const [openLoader, setOpenLoader] = useState(false)

	return (
		<>
			<Popup
				trigger={<BtnBeta variant='gamma'>Задать вопрос</BtnBeta>}
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
						<h3 className={stls.title}>{title}</h3>
						<FormBeta
							programTitle={program?.title}
							setOpenLoader={setOpenLoader}
							setOpen={setOpen}
							formName={`Заявка с формы 'Свяжитесь с нами'`}
							policyPrivacy
							variant={'alpha'}
						/>
						<PopupLoader closePopUp={() => setOpenLoader(false)} />

						<PopupThankyou
							closePopUp={() => setOpen(false)}
							programId={program?.id}
							programTitle={program?.title}
						/>
					</div>
				)}
			</Popup>
		</>
	)
}
