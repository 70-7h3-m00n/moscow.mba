import stls from './PopupForm.module.sass'
import cn from 'classnames'
import { PopupFormProps } from './types'

import { BtnClose } from '@/components/btns'
import { FormHeader } from '@/components/forms/FormHeader/FormHeader'
import { useState } from 'react'

export const PopupForm = ({ className, next, prev, close }: PopupFormProps) => {
	const [open, setOpen] = useState(false)
	const [openLoader, setOpenLoader] = useState(false)

	return (
		<div className={cn(className, stls.content)}>
			<p className={stls.title}>Обратный звонок</p>
			<FormHeader
				next={next}
				setOpen={setOpen}
				setOpenLoader={setOpenLoader}
				programTitle='Форма из шапки сайта'
				formName='Форма из шапки сайта'
			/>
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
