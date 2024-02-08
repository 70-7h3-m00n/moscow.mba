import stls from './GetFullProgramBtn.module.sass'
import cn from 'classnames'
import { GetFullProgramBtnProps } from './types'
import { BtnBeta } from '@/components/btns'
import { PopupCTA } from '@/components/popups/PopupCTA/PopupCTA'

export const GetFullProgramBtn = ({
	className,
	program
}: GetFullProgramBtnProps) => {
	return (
		<div className={cn(className, stls.content)}>
			<PopupCTA
				title='Получить полную программу или бесплатную консультацию'
				btnText='Получить полную программу'
				program={program}
			/>
		</div>
	)
}
