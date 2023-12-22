import stls from './FooterBottom.module.sass'

export const FooterBottom = () => {
	return (
		<div className={stls.bottom}>
			<div className={stls.copyright}>&copy; Moscow Business Academy, 2023</div>
			<a
				href='/legaldocuments/oferta.pdf'
				target='_blank'
				className={stls.legalLink}
			>
				{'Договор Оферты'}
			</a>
			<a
				href='/legaldocuments/NDA.pdf'
				target='_blank'
				className={stls.legalLink}
			>
				{'Политика конфиденциальности'}
			</a>
		</div>
	)
}
