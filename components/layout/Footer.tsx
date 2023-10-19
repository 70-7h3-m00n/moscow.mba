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
import Image from 'next/image'
import { ImageContainer } from '../general'
import licenseP1 from '@/public/legaldocuments/license-p1.jpg'
import IconDzen from '../icons/IconDzen'
import IconMir from '../icons/IconMir'
import IconVisa from '../icons/IconVisa'
import IconMasterCard from '../icons/IconMasterCard'
import IconJCB from '../icons/IconJCB'
import IconAmericanExpress from '../icons/IconAmericanExpress'

const Footer = () => {
	const contactInfo = contactData()
	const at = useAt()

	return (
		<footer className={stls.container}>
			<div className={stls.generalContainer}>
				<div className={stls.top}>
					<div className={stls.contactDetails}>
						<Link className={stls.logoWrapper} href={routesFront.home}>
							<IconLogo idx='2' />
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
								<Link
									className={stls.socialLink}
									href='https://vk.com/moscow_mba'
									aria-label='MBA VK'
									target='_blank'
								>
									<IconVk />
								</Link>
							</li>
							<li className={stls.socialItem}>
								<Link
									className={stls.socialLink}
									href='https://t.me/mbamoscow'
									aria-label='MBA Telegram'
									target='_blank'
								>
									<IconTelegramAlt />
								</Link>
							</li>
							<li className={cn(stls.socialItem, stls.socialItemWhatsApp)}>
								<Link
									className={stls.socialLink}
									// href='https://api.whatsapp.com/send?phone=89258088389text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!'
									href='https://api.whatsapp.com/send?phone=79258088389&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C.%20%D0%AF%20%D0%BF%D0%BE%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83'
									aria-label='MBA Whatsapp'
									target='_blank'
									rel='noopener noreferrer'
								>
									<IconWhatsappAlt />
								</Link>
							</li>
							<li className={stls.socialItem}>
								<Link
									className={stls.socialLink}
									href='https://dzen.ru/moscow_business_academy'
									aria-label='MBA Dzen'
									target='_blank'
								>
									<IconDzen />
								</Link>
							</li>
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
										<Link href='/contact'>
											{at.en ? 'Contact' : 'Контакты'}
										</Link>
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
										<li className={stls.socialItem}>
											<Link
												className={stls.socialLink}
												href='https://vk.com/moscow_mba'
												aria-label='MBA VK'
												target='_blank'
											>
												<IconVk />
											</Link>
										</li>
										<li className={stls.socialItem}>
											<Link
												className={stls.socialLink}
												href='https://t.me/mbamoscow'
												aria-label='MBA Telegram'
												target='_blank'
											>
												<IconTelegramAlt />
											</Link>
										</li>
										<li
											className={cn(stls.socialItem, stls.socialItemWhatsApp)}
										>
											<Link
												className={stls.socialLink}
												// href='https://api.whatsapp.com/send?phone=89258088389text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!'
												href='https://api.whatsapp.com/send?phone=79258088389&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C.%20%D0%AF%20%D0%BF%D0%BE%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%83'
												aria-label='MBA Whatsapp'
												target='_blank'
												rel='noopener noreferrer'
											>
												<IconWhatsappAlt />
											</Link>
										</li>
										<li className={stls.socialItem}>
											<Link
												className={stls.socialLink}
												href='https://dzen.ru/moscow_business_academy'
												aria-label='MBA Dzen'
												target='_blank'
											>
												<IconDzen />
											</Link>
										</li>
									</ul>
								</div>
								<div className={stls.linksListBottom}>
									<p className={stls.companyDescription}>
										{at.en
											? 'Autonomous Non-Profit Organization of Additional Professional Education "Moscow Business Academy", INN 9725034765.'
											: 'Автономная некоммерческая организация дополнительного профессионального образования "Московская бизнес академия", ИНН 9725034765'}
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
				<div className={stls.bottom}>
					<div className={stls.copyright}>
						&copy; Moscow Business Academy, 2023
					</div>
					<a
						href='/legaldocuments/oferta.pdf'
						target='_blank'
						className={stls.legalLink}
					>
						{at.en ? 'Offer Contract' : 'Договор Оферты'}
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
