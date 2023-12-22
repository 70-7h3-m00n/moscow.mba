import stls from './PopupForm.module.sass'
import cn from 'classnames'
import { PopupFormProps } from './types'

import { BtnBeta, BtnClose } from '@/components/btns'

export const PopupForm = ({ className, next, prev, close }: PopupFormProps) => {
	return (
		<div className={cn(className, stls.content)}>
			<p className={stls.title}>Обратный звонок</p>
			<input type='text' />
			<input type='text' />
			<BtnBeta onClick={next} variant='alpha'>
				Жду звонка
			</BtnBeta>
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
