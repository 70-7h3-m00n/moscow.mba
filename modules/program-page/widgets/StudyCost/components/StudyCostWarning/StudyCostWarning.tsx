import stls from './StudyCostWarning.module.sass'

import useContactInfo from '@/config/contactData'

export const StudyCostWarning = () => {
	const contactInfo = useContactInfo()

	return (
		<div className={stls.content}>
			<p className={stls.paragraph}>
				⚠️ Если у вас возникли проблемы с оплатой, напишите на почту{' '}
				<a href={contactInfo.ru.email.mailTo}>{contactInfo.ru.email.val}</a> —
				мы на связи с 10:00 до 21:00 каждый день
			</p>
		</div>
	)
}
