import stls from './Contacts.module.sass'
import cn from 'classnames'
import { ContactsProps } from './types'

import useContactInfo from '@/config/contactData'
import Link from 'next/link'
import routesFront from '@/config/routesFront'
import { contactLinks, socialLinks } from './constants'
import Image from 'next/image'
import { BtnBeta } from '@/components/btns'

export const Contacts = ({ className, ...rest }: ContactsProps) => {
	const contactInfo = useContactInfo()

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<p className={stls.title}>Контакты</p>
			<Link className={stls.location} href={routesFront.contact}>
				<span>
					г. {contactInfo.ru.address.city}, {contactInfo.ru.address.street}
				</span>
			</Link>
			<div className={stls.metro}>
				<div className={stls.metro__icon}>
					<Image
						src={'/assets/images/program/metro.svg'}
						width={23}
						height={16}
						alt='Иконка метро'
					/>
				</div>
				<p>Павелецкая, Пролетарская</p>
			</div>
			<div className={stls.email}>
				<a href={contactInfo.ru.email.mailTo}>{contactInfo.ru.email.val}</a>
			</div>
			<ul className={stls.socials}>
				{socialLinks.map((socialLink, idx) => (
					<li className={stls.socials__item} key={idx}>
						<Link
							className={stls.socials__link}
							href={socialLink.link}
							aria-label={socialLink.ariaLabel}
							target='_blank'
						>
							{socialLink.icon}
						</Link>
					</li>
				))}
			</ul>

			<p className={stls.title}>Приемная комиссия</p>

			<div className={stls.phone}>
				<a className={stls.phone__link} href={contactInfo.ru.tels[0].href}>
					{contactInfo.ru.tels[0].val}
				</a>
				<p className={stls.phone__desc}>{contactInfo.ru.tels[0].description}</p>
			</div>
			<div className={stls.phone}>
				<a className={stls.phone__link} href={contactInfo.ru.tels[1].href}>
					{contactInfo.ru.tels[1].val}
				</a>
				<p className={stls.phone__desc}>{contactInfo.ru.tels[1].description}</p>
			</div>
			<BtnBeta variant='beta' size='s'>
				Обратный звонок
			</BtnBeta>
			<ul className={stls.socials}>
				{contactLinks.map((socialLink, idx) => (
					<li
						className={cn(stls.socials__item, stls.socials__item_small)}
						key={idx}
					>
						<Link
							className={stls.socials__link}
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
	)
}
