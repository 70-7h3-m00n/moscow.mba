import stls from './TeachersNotFound.module.sass'

import { contactData } from '@/config/index'

export const TeachersNotFound = () => {
	const contactInfo = contactData()
	return (
		<div className={stls.nothingFound}>
			<h3 className={stls.nothingFoundTitle}>Ничего не найдено</h3>
			<p className={stls.nothingFoundP}>
				Возможно, вы неправильно ввели запрос, свяжитесь со специалистами
				приемной комиссии по&nbsp;номеру{' '}
				<a className={stls.nothingFoundLink} href={contactInfo.ru.tels[0].href}>
					{contactInfo.ru.tels[0].val}
				</a>
				, они вам помогут!
			</p>
		</div>
	)
}
