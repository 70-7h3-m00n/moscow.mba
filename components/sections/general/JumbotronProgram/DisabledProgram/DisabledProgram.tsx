import stls from './DisabledProgram.module.sass'
import cn from 'classnames'
import { DisabledProgramProps } from './types'

import Link from 'next/link'
import Popup from 'reactjs-popup'
import { PopupForm } from '@/components/popups'
import useAt from '@/hooks/useAt'
import { IconGear } from '@/components/icons'

export const DisabledProgram = ({ className }: DisabledProgramProps) => {
	const at = useAt()
	return (
		<div className={cn(className, stls.disabled)}>
			<div className={stls.description}>
				<IconGear />
				<p>Курс временно недоступен. Находится в разработке</p>
			</div>
			<div className={stls.buttonBoxBottom}>
				<Link className={stls.buttonBoxBottomLink} href='/programs/mini/online'>
					<button className={stls.homepageLink}>
						К&nbsp;ДОСТУПНЫМ&nbsp;КУРСАМ
					</button>
				</Link>
				<Popup
					trigger={<a className={stls.link}>ОБРАТНЫЙ&nbsp;ЗВОНОК</a>}
					modal
					lockScroll
					nested
					closeOnDocumentClick
				>
					{/* @ts-expect-error  */}
					{close => (
						<PopupForm
							title={at.en ? 'Get consultation' : 'Получите консультацию'}
							closePopUpForm={close}
							formName='Заявка со страницы недоступного курса'
						/>
					)}
				</Popup>
			</div>
		</div>
	)
}
