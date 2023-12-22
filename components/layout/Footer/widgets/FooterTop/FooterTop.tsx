import stls from './FooterTop.module.sass'
import cn from 'classnames'
import { FooterTopProps } from './types'

import Link from 'next/link'
import Image from 'next/image'
import Popup from 'reactjs-popup'
import useAt from '@/hooks/useAt'
import { contactData } from '@/config/index'
import routesFront from '@/config/routesFront'
import { PopupForm } from '@/components/popups'
import {
	IconLogo,
	IconLogoTitle,
	IconLocation,
	IconVk,
	IconTelegramAlt,
	IconWhatsappAlt
} from '@/components/icons'
import IconAmericanExpress from '@/components/icons/IconAmericanExpress'
import IconDzen from '@/components/icons/IconDzen'
import IconJCB from '@/components/icons/IconJCB'
import IconMasterCard from '@/components/icons/IconMasterCard'
import IconMir from '@/components/icons/IconMir'
import IconVisa from '@/components/icons/IconVisa'
import licenseP1 from '@/public/legaldocuments/license-p1.jpg'
import { socialLinks } from './constants'

export const FooterTop = ({ className, ...rest }: FooterTopProps) => {
	const at = useAt()
	const contactInfo = contactData()

	return (
		<div className={cn(className)} {...rest}>
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
							closeOnDocumentClick
						>
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
						<a href={contactInfo.ru.email.mailTo}>{contactInfo.ru.email.val}</a>
					</div>

					<Link className={stls.location} href={routesFront.contact}>
						<IconLocation />
						<span>
							{contactInfo.ru.address.city}, {contactInfo.ru.address.street}
						</span>
					</Link>
					<ul className={stls.socialsList}>
						{socialLinks.map((socialLink, idx) => (
							<li className={stls.socialItem} key={idx}>
								<Link
									className={stls.socialLink}
									href={socialLink.link}
									aria-label={socialLink.ariaLabel}
									target='_blank'
								>
									{socialLink.icon}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={stls.links}>
					{!at.promo && (
						<>
							<ul className={stls.linksList}>
								<li className={stls.linkItem}>
									<Link
										href='/programs/mini/online'
										{...(at.en ? { locale: 'ru' } : undefined)}
									>
										MBA Mini
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										href='/programs/mba/online'
										{...(at.en ? { locale: 'ru' } : undefined)}
									>
										MBA
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										href='/programs/executive'
										{...(at.en ? { locale: 'ru' } : undefined)}
									>
										Executive MBA
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link href='/programs/profession/online'>
										{at.en ? 'Professions' : 'Профессии'}
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link href='/programs/course/online'>
										{at.en ? 'Courses' : 'Курсы'}
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link href='/about'>{at.en ? 'About' : 'Об академии'}</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										href='/teachers'
										{...(at.en ? { locale: 'ru' } : undefined)}
									>
										{at.en ? 'Experts' : 'Эксперты'}
									</Link>
								</li>
								{/* <li className={stls.linkItem}>
										<Link
											href='/teachers'
											{...(at.en ? { locale: 'ru' } : undefined)}>
											{at.en
												? 'Subscribe to the newsletter'
												: 'Подписка на рассылку'}
										</Link>
									</li> */}
								<li className={stls.linkItem}>
									<Link
										href='/archive'
										{...(at.en ? { locale: 'ru' } : undefined)}
									>
										{at.en ? 'Archived programs' : 'Архивные программы'}
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										href='/seminars'
										{...(at.en ? { locale: 'ru' } : undefined)}
									>
										{at.en ? 'Seminars' : 'Семинары'}
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link href='/contact'>{at.en ? 'Contact' : 'Контакты'}</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										href='/journal'
										{...(at.en ? { locale: 'ru' } : undefined)}
									>
										{at.en ? 'Journal' : 'Журнал'}
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										href='/payment'
										{...(at.en ? { locale: 'ru' } : undefined)}
									>
										{at.en ? 'Payment' : 'Оплата'}
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										href='/legal'
										{...(at.en ? { locale: 'ru' } : undefined)}
									>
										{at.en ? 'Legal' : 'Сведения об организации'}
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										href={routesFront.corporateClients}
										{...(at.en ? { locale: 'ru' } : undefined)}
									>
										{at.en
											? 'Corporate education'
											: 'Корпоративное обучение для бизнеса'}
									</Link>
								</li>
								<li className={stls.linkItem}>
									<Link
										href={'/sitemap'}
										{...(at.en ? { locale: 'ru' } : undefined)}
									>
										{at.en ? 'Sitemap' : 'Карта сайта'}
									</Link>
								</li>
								<li className={stls.liLicense}>
									<Link
										target='_blank'
										href='https://islod.obrnadzor.gov.ru/rlic/details/2df11621-2d30-4173-9389-2fecc24a7639/'
									>
										<Image
											className={stls.licenseImage}
											src={licenseP1}
											width={111}
											height={162}
											alt='Лицензия компании'
										/>
										<p className={stls.license}>
											{at.en
												? 'State License №041221'
												: 'Государственная лицензия №041221'}
										</p>
									</Link>
								</li>
							</ul>
							<div className={stls.mobileLicense}>
								<Link
									target='_blank'
									href='https://islod.obrnadzor.gov.ru/rlic/details/2df11621-2d30-4173-9389-2fecc24a7639/'
								>
									<Image
										className={stls.licenseImage}
										src={licenseP1}
										width={111}
										height={162}
										alt='Лицензия компании'
									/>
									<p className={stls.license}>
										{at.en
											? 'State License №041221'
											: 'Государственная лицензия №041221'}
									</p>
								</Link>
								<div className={stls.locationPhone}>
									<IconLocation />
									<span>
										{contactInfo.ru.address.city},{' '}
										{contactInfo.ru.address.street}
									</span>
								</div>
								<ul className={stls.socialsListMobile}>
									{socialLinks.map((socialLink, idx) => (
										<li className={stls.socialItem} key={idx}>
											<Link
												className={stls.socialLink}
												href={socialLink.link}
												aria-label={socialLink.ariaLabel}
												target='_blank'
											>
												{socialLink.icon}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className={stls.linksListBottom}>
								<p className={stls.companyDescription}>
									{at.en
										? 'Autonomous Non-Profit Organization of Additional Professional Education "Moscow Business Academy", INN 9725034765.'
										: 'Автономная некоммерческая организация дополнительного профессионального образования «Московская бизнес академия», ИНН 9725034765'}
								</p>
								<div className={stls.paymentMethods}>
									<IconMir />
									<IconMasterCard />
									<IconVisa />
									<IconJCB />
									<IconAmericanExpress />
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}
