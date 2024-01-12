import stls from './Footer.module.sass'
import cn from 'classnames'
import { FooterProps } from './types'

import { useAt } from '@/hooks/index'
import { FooterTop } from './widgets/FooterTop/FooterTop'
import { getYear } from 'date-fns'

const Footer = ({ className, ...rest }: FooterProps) => {
	const at = useAt()

	return (
		<footer className={stls.container}>
			<div className={cn(className, stls.generalContainer)} {...rest}>
				<FooterTop />

				<div className={stls.bottom}>
					<div className={stls.copyright}>
						&copy; Moscow Business Academy, {getYear(new Date())}
					</div>
					<a
						href='/legaldocuments/oferta.pdf'
						target='_blank'
						className={stls.legalLink}
					>
						{at.en ? 'Offer Agreement' : 'Договор Оферты'}
					</a>
					<a
						href='/legaldocuments/NDA.pdf'
						target='_blank'
						className={stls.legalLink}
					>
						{at.en ? 'Privacy Policy' : 'Политика конфиденциальности'}
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
