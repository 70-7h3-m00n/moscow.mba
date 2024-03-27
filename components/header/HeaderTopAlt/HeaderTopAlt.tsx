import stls from './HeaderTopAlt.module.sass'
import cn from 'classnames'
import { HeaderTopAltProps } from './types'

import companyName from '@/config/companyName'
import routesFront from '@/config/routesFront'
import Link from 'next/link'
import { IconLogo, IconLogoTitle } from '@/components/icons'
import { PopupHeader } from '@/components/popups'
import Image from 'next/image'
import useContactInfo from '@/config/contactData'
import { SearchFieldAlt } from '@/components/general/SearchFieldAlt/SearchFieldAlt'

export const HeaderTopAlt = ({
	className,
	handleMenu,
	openMenu,
	...rest
}: HeaderTopAltProps) => {
	const contactInfo = useContactInfo()

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<div className={stls.logosWrapper}>
				<Link
					className={stls.logo}
					aria-label={companyName}
					href={routesFront.home}
				>
					<IconLogo className={stls.logo__icon} />
					<IconLogoTitle className={stls.logo__name} />
				</Link>
				<Image
					className={stls.department}
					src={'/assets/images/general/header-department.svg'}
					width={130}
					height={25}
					alt='Департамент образования города Москвы'
				/>
				<Image
					className={stls.rabo}
					src={'/assets/images/general/header-rabo.svg'}
					width={130}
					height={25}
					alt='Департамент образования города Москвы'
				/>
			</div>
			<SearchFieldAlt className={stls.inputWrapper} />
			<div className={stls.contacts}>
				<Link
					className={stls.contacts__email}
					href={contactInfo.ru.email.mailTo}
				>
					{contactInfo.ru.email.val}
				</Link>
				<PopupHeader className={stls.popupHeader} />
				<Link className={stls.contacts__login} href={'https://lms.moscow.mba/'}>
					Войти
				</Link>
			</div>

			<div
				className={cn(stls.burger, {
					[stls.opened]: openMenu
				})}
				onClick={() => handleMenu(!openMenu)}
			>
				<i className={stls.line} />
				<i className={stls.line} />
				<i className={stls.line} />
			</div>
		</div>
	)
}
