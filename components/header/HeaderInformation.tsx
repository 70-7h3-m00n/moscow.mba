import stls from '@/styles/components/header/HeaderInformation.module.sass'
import Link from 'next/link'
import cn from 'classnames'
import { routesFront, contactData, companyName } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { BtnChangeLang } from '@/components/btns'
import { ImgLogoRabo, ImgLogoMde } from '@/components/images'
import {
	IconLocation,
	IconLogo,
	IconLogoTitle,
	IconMobilePhone
} from '@/components/icons'
import Popup from 'reactjs-popup'
import { PopupForm } from '../popups'
import IconUser from '../icons/IconUser'
import { SearchField } from '../general'

const HeaderInformation = ({ classNames = [], handleMenu, openMenu }) => {
	const at = useAt()
	const contactInfo = contactData()

	return (
		<div
			className={
				cn([stls.container], getClassNames({ classNames })) || undefined
			}
		>
			<Wrapper>
				<Link
					legacyBehavior
					href={at.promo ? routesFront.promo : routesFront.home}
				>
					<a
						className={stls.logo}
						onClick={() => handleMenu(false)}
						aria-label={companyName}
					>
						<div className={stls.picture}>
							<IconLogo />
						</div>
						<div>
							<IconLogoTitle />
						</div>
					</a>
				</Link>
				<div className={stls.logos}>
					<div className={stls.rabo}>
						<ImgLogoRabo />
					</div>
					<div className={stls.mde}>
						<ImgLogoMde />
					</div>
				</div>
				<div className={stls.address}>
					<IconLocation />
					{contactInfo.ru.address.city}, {contactInfo.ru.address.street}
				</div>
				<div className={stls.phoneLinks}>
					<a className={stls.phoneLink} href={contactInfo.ru.tels[0].href}>
						<span className={stls.description}>
							{contactInfo.ru.tels[0].description}
						</span>
						<span>{contactInfo.ru.tels[0].val}</span>
					</a>
					<a className={stls.phoneLink} href={contactInfo.ru.tels[1].href}>
						<span className={stls.description}>
							{contactInfo.ru.tels[1].description}
						</span>
						<span>{contactInfo.ru.tels[1].val}</span>
					</a>
					<a href={contactInfo.ru.tels[0].href} className={stls.phoneIcon}>
						<IconMobilePhone large fill={'#000'} />
					</a>
				</div>
				{!at.promo && (
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
				)}
				<Popup
					trigger={
						<a className={stls.link}>
							{at.en ? <>CALLBACK</> : <>ОБРАТНЫЙ&nbsp;ЗВОНОК</>}
						</a>
					}
					modal
					lockScroll
					nested
					closeOnDocumentClick
				>
					{/* @ts-expect-error  */}
					{close => (
						<PopupForm
							title={at.en ? 'Get consultation' : 'Получите консультацию'}
							closePopUpForm={close}
							formName='Заявка с шапки страницы Получить консультацию'
						/>
					)}
				</Popup>
				<div className={stls.linkWrapper}>
					{/* {at.index || at.about || at.contact ? <BtnChangeLang /> : null} */}
					<SearchField header />
					<Link href={'https://lms.moscow.mba/'} className={stls.linkUser}>
						<IconUser classNames={[stls.iconUserAtBtn]} color='#262626' />
					</Link>
				</div>
			</Wrapper>
		</div>
	)
}

export default HeaderInformation
