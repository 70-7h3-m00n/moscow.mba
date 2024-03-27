import stls from './NoResult.module.sass'
import cn from 'classnames'
import { NoResultProps } from './types'

import { FormBeta } from '@/components/forms/FormBeta/FormBeta'

export const NoResult = ({
	className,
	setOpen,
	setOpenLoader
}: NoResultProps) => {
	return (
		<div className={cn(className, stls.formAlphaContainer)}>
			<p className={stls.formAlphaTitle}>По Вашему запросу ничего не найдено</p>
			<p className={stls.formAlphaText}>
				Попробуйте ввести запрос по-другому или свяжитесь со специалистом. Вам
				помогут подобрать нужное направление и ответят на вопросы
			</p>
			<FormBeta
				programTitle={'Заявка с разводящей страницы'}
				setOpenLoader={setOpenLoader}
				setOpen={setOpen}
				formName={`Заявка с формы 'Свяжитесь с нами'`}
				policyPrivacy
				variant={'delta'}
			/>
		</div>
	)
}
