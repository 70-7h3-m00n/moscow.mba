import stls from '@/styles/components/sections/CorporateClients.module.sass'
import cn from 'classnames'

import Image from 'next/image'
import { useAt } from '@/hooks/index'
import { base64pixel } from '@/config/index'
import { Wrapper } from '@/components/layout'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface TCorporateClients
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	variant?: 'page-corporate-clients'
	partnershipTitle?: boolean
}

const CorporateClients = ({
	className,
	variant,
	partnershipTitle = false,
	...rest
}: TCorporateClients) => {
	const at = useAt()

	const title = partnershipTitle ? (
		<h3 className={stls.partnershipTitle}>
			{at.en
				? 'We are partnered with large companies:'
				: 'Мы сотрудничаем с крупными организациями:'}
		</h3>
	) : at.job ? (
		<h2 className={stls.job}>{at.en ? 'Employers' : 'Работодатели'}</h2>
	) : at.partner ? (
		<h2 className={stls.job}>
			{at.en ? 'Our employers' : 'Наши работодатели'}
		</h2>
	) : (
		<>
			{
				<h2>
					{at.en ? 'Corporate' : 'Корпоративные'} <br />
					{at.en ? 'clients in Russia' : 'клиенты в России'}
				</h2>
			}
			{/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */}
			{variant !== 'page-corporate-clients' && !at.mini && !at.job && (
				<p>
					{at.en
						? "Our experts' experience is used by many leading companies in Russia and CIS. Nevertheless it's valuable not only for large-scale, but also for startups and medium-scale companies"
						: 'Опыт наших экспертов используют многие ведущие компании России и стран СНГ. Наш опыт будет полезен не только гигантам промышленной, добывающей индустрии, крупным сетевикам, но и среднему и малому бизнесу'}
				</p>
			)}
		</>
	)

	return (
		<section className={cn(stls.container, className)} {...rest}>
			<Wrapper classNames={[stls.wrapper]}>
				<div
					className={cn(stls.titleContainer, {
						[stls.noPaddingLeft]: partnershipTitle || at.job || at.partner,
						[stls.variantPageCorporateClients]:
							variant === 'page-corporate-clients'
					})}
				>
					<div className={stls.title}>{title}</div>
				</div>

				<div className={stls.slider}>
					<ul className={stls.list}>
						<li className={stls.listItem}>
							<div className={stls.image}>
								<Image
									src={'/assets/images/clients/client_1.jpg'}
									alt={at.en ? 'Head Hunter' : 'Head Hunter'}
									width={141}
									height={106}
									placeholder='blur'
									blurDataURL={base64pixel}
								/>
							</div>
						</li>
						<li className={stls.listItem}>
							<div className={stls.image}>
								<Image
									src={'/assets/images/clients/client_2.jpg'}
									alt={at.en ? 'Russian Railways' : 'РЖД'}
									width={141}
									height={107}
									placeholder='blur'
									blurDataURL={base64pixel}
								/>
							</div>
						</li>
						<li className={stls.listItem}>
							<div className={stls.image}>
								<Image
									src={'/assets/images/clients/client_3.jpg'}
									alt={at.en ? 'Tatenergo' : 'Татэнерго'}
									width={240}
									height={92}
									placeholder='blur'
									blurDataURL={base64pixel}
								/>
							</div>
						</li>
						<li className={stls.listItem}>
							<div className={stls.image}>
								<Image
									src={'/assets/images/clients/client_4.jpg'}
									alt={at.en ? 'Toms' : 'Томс'}
									width={163}
									height={54}
									placeholder='blur'
									blurDataURL={base64pixel}
								/>
							</div>
						</li>
					</ul>
					<ul className={stls.list}>
						<li className={stls.listItem}>
							<div className={stls.image}>
								<Image
									src={'/assets/images/clients/client_5.jpg'}
									alt={at.en ? 'Rosneft' : 'Роснефть'}
									width={142}
									height={107}
									placeholder='blur'
									blurDataURL={base64pixel}
								/>
							</div>
						</li>
						<li className={stls.listItem}>
							<div className={stls.image}>
								<Image
									src={'/assets/images/clients/client_6.jpg'}
									alt={at.en ? 'Rosseti' : 'Россети'}
									width={142}
									height={107}
									placeholder='blur'
									blurDataURL={base64pixel}
								/>
							</div>
						</li>
						<li className={stls.listItem}>
							<div className={stls.image}>
								<Image
									src={'/assets/images/clients/client_7.jpg'}
									alt={at.en ? 'Sberbank Leasing' : 'Сбербанк Лизинг'}
									width={168}
									height={67}
									placeholder='blur'
									blurDataURL={base64pixel}
								/>
							</div>
						</li>
						<li className={stls.listItem}>
							<div className={stls.image}>
								<Image
									src={'/assets/images/clients/client_8.jpg'}
									alt={at.en ? 'Lukom-A' : 'Луком-А'}
									width={165}
									height={43}
									placeholder='blur'
									blurDataURL={base64pixel}
								/>
							</div>
						</li>
					</ul>
				</div>
			</Wrapper>
		</section>
	)
}

export default CorporateClients
