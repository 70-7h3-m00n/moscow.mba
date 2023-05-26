import stls from '@/styles/components/layout/Footer.module.sass'
import Link from 'next/link'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { contactData, routesFront } from '@/config/index'
import {
	IconLocation,
	IconVk,
	IconTelegramAlt,
	IconWhatsappAlt,
	IconLogo,
	IconLogoTitle,
	IconMobilePhone
} from '@/components/icons'
import Popup from 'reactjs-popup'
import { PopupForm } from '../popups'

const Footer = () => {
	const contactInfo = contactData()
	const at = useAt()

	return (
		<footer className={stls.container}>
			<div className={stls.generalContainer}>
				<div className={stls.top}>
					<div className={stls.contactDetails}>
						<Link className={stls.logoWrapper} href={routesFront.home}>
							<IconLogo />
							<IconLogoTitle color='#fff' />
						</Link>
						<div className={stls.telephone}>
							<a href={contactInfo.ru.tels[0].href}>
								{contactInfo.ru.tels[0].val}
							</a>
						</div>
						<div>
							<Popup
								trigger={
									<a className={`${stls.btn} ${stls.pointer}`}>
										{at.en ? <>CALLBACK</> : <>ОБРАТНЫЙ&nbsp;ЗВОНОК</>}
									</a>
								}
								modal
								lockScroll
								nested
								closeOnDocumentClick>
								{/* @ts-expect-error  */}
								{close => (
									<PopupForm
										title={at.en ? 'Get consultation' : 'Получите консультацию'}
										closePopUpForm={close}
										formName='Заявка с модальной формы "Хочу консультацию"'
									/>
								)}
							</Popup>
						</div>
						<div className={stls.email}>
							<a href={contactInfo.ru.email.mailTo}>
								{contactInfo.ru.email.val}
							</a>
						</div>
						<div className={stls.location}>
							<IconLocation />
							<span>
								{contactInfo.ru.address.city}, {contactInfo.ru.address.street}
							</span>
						</div>

						<ul className={stls.socialsList}>
							<li className={stls.socialItem}>
								<a className={stls.socialLink} href='#!' aria-label='MBA VK'>
									<IconVk />
								</a>
							</li>
							<li className={stls.socialItem}>
								<a
									className={stls.socialLink}
									href='#!'
									aria-label='MBA Telegram'>
									<IconTelegramAlt />
								</a>
							</li>
							<li className={cn(stls.socialItem, stls.socialItemWhatsApp)}>
								<a
									className={stls.socialLink}
									// href='https://api.whatsapp.com/send?phone=89258088389text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!'
									href='https://api.whatsapp.com/send?phone=79258088389&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C.%20%D0%AF%20%D0%BF%D0%BE%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83'
									aria-label='MBA Whatsapp'
									target='_blank'
									rel='noopener noreferrer'>
									<IconWhatsappAlt />
								</a>
							</li>
							<li className={stls.socialItem}>
								<a
									className={stls.socialLink}
									href='#!'
									aria-label='MBA Telegram'>
									<IconTelegramAlt />
								</a>
							</li>
						</ul>
					</div>
					<div className={stls.links}>
						{!at.promo && (
							<ul className={stls.linksList}>
								<li className={stls.linkItem}>
									<Link
										href='/programs/mini/online'
										{...(at.en ? { locale: 'ru' } : undefined)}>
										MBA Mini
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										href='/programs/mba/online'
										{...(at.en ? { locale: 'ru' } : undefined)}>
										MBA
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										href='/programs/executive'
										{...(at.en ? { locale: 'ru' } : undefined)}>
										Executive MBA
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										href='/programs/profession/online'
										{...(at.en ? { locale: 'ru' } : undefined)}>
										Профессии
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										href='/programs/course/online'
										{...(at.en ? { locale: 'ru' } : undefined)}>
										Курсы
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link href='/about'>{at.en ? 'About' : 'Об академии'}</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										legacyBehavior
										href='/teachers'
										{...(at.en ? { locale: 'ru' } : undefined)}>
										<a className={stls.link}>
											{at.en ? 'Experts' : 'Эксперты'}
										</a>
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										legacyBehavior
										href='/webinars'
										{...(at.en ? { locale: 'ru' } : undefined)}>
										<a className={stls.link}>
											{at.en ? 'Webinars' : 'Вебинары'}
										</a>
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link legacyBehavior href='/contact'>
										<a className={stls.link}>
											{at.en ? 'Contact' : 'Контакты'}
										</a>
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										legacyBehavior
										href='/legal'
										{...(at.en ? { locale: 'ru' } : undefined)}>
										<a className={stls.link}>
											{at.en ? 'Legal' : 'Сведения об организации'}
										</a>
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										legacyBehavior
										href='/journal'
										{...(at.en ? { locale: 'ru' } : undefined)}>
										<a className={stls.link}>{at.en ? 'Journal' : 'Журнал'}</a>
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										legacyBehavior
										href='/payment'
										{...(at.en ? { locale: 'ru' } : undefined)}>
										<a className={stls.link}>{at.en ? 'Payment' : 'Оплата'}</a>
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										legacyBehavior
										href={routesFront.corporateClients}
										{...(at.en ? { locale: 'ru' } : undefined)}>
										<a className={stls.link}>
											{at.en
												? 'Corporate education'
												: 'Корпоративное обучение для бизнеса'}
										</a>
									</Link>
								</li>
							</ul>
						)}
					</div>
				</div>
				<div className={stls.bottom}>
					<div className={stls.copyright}>
						&copy; Moscow Business Academy, 2023
					</div>
					<a
						href='/legaldocuments/oferta.pdf'
						target='_blank'
						className={stls.legalLink}>
						{at.en ? 'Offer Contract' : 'Договор Оферты'}
					</a>
					<a
						href='/legaldocuments/NDA.pdf'
						target='_blank'
						className={stls.legalLink}>
						{at.en ? 'Privacy Policy' : 'Политика конфиденциальности'}
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
