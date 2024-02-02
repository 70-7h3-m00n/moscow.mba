import stls from './Footer.module.sass'
import cn from 'classnames'
import { FooterProps } from './types'

import Link from 'next/link'
import companyName from '@/config/companyName'
import routesFront from '@/config/routesFront'
import { IconLogo, IconLogoTitle } from '@/components/icons'
import {
	Legal,
	Licence,
	Contacts,
	Navigation,
	PaymentInfo,
	Subscription
} from './widgets'

export const FooterNew = ({ className, ...rest }: FooterProps) => {
	return (
		<footer className={stls.container}>
			<div className={cn(className, stls.content)} {...rest}>
				<Link
					className={stls.logo}
					aria-label={companyName}
					href={routesFront.home}
				>
					<IconLogo className={stls.logo__icon} />
					<IconLogoTitle className={stls.logo__name} color='#fff' />
				</Link>
				<PaymentInfo className={stls.payment} />
				<Contacts className={stls.contacts} />
				<Navigation className={stls.nav} />
				<Licence className={stls.licence} />
				{/* <Subscription className={stls.subscription} /> */}
				<Legal className={stls.legal} />
			</div>
		</footer>
	)
}
