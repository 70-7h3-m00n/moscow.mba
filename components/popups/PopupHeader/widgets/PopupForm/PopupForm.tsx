import stls from './PopupForm.module.sass'
import cn from 'classnames'
import { PopupFormProps } from './types'

import { BtnBeta, BtnClose } from '@/components/btns'
import { FormBeta } from 'modules/program-page/widgets'
import { FormHeader } from '@/components/forms/FormHeader/FormHeader'

export const PopupForm = ({ className, next, prev, close }: PopupFormProps) => {
	return (
		<div className={cn(className, stls.content)}>
			<p className={stls.title}>Обратный звонок</p>
			<FormHeader />
			<p className={stls.personalData}>
				Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и с
				правилами пользования платформой
			</p>
			<button className={stls.prev} onClick={prev}>
				Вернуться назад
			</button>
			<BtnClose className={stls.closeBtn} onClick={close} />
		</div>
	)
}
