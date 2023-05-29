import stls from '@/styles/components/sections/JumbotronCta.module.sass'
import { useState } from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { discount } from '@/config/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import {
	Breadcrumbs,
	InfoRectangle,
	LeadLoaderThankyou
} from '@/components/general'
import { FormAlpha } from '@/components/forms'
import { Until } from '@/components/costs'

const JumbotronCta = ({
	programTitle = null,
	programId = null,
	sale = null
}) => {
	const at = useAt()

	const [open, setOpen] = useState(false)
	const [openLoader, setOpenLoader] = useState(false)

	return (
		<section className={stls.container}>
			<LeadLoaderThankyou
				open={open}
				setOpen={setOpen}
				openLoader={openLoader}
				setOpenLoader={setOpenLoader}
				programId={programId}
				programTitle={programTitle}
			/>
			<div className={stls.image}>
				<Image
					src='/assets/images/jumbotron_1.jpg'
					alt={'Аудитория MBA'}
					layout='fill'
					priority
				/>
			</div>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.content}>
					<Breadcrumbs />
					<div className={stls.flexContainer}>
						<div className={stls.descContainer}>
							<ul className={stls.desktopLinksList}>
								{/* <li className={stls.desktopLinkBorder}></li> */}
								<li className={stls.linkItem}>
									{/* <Link href='/programs/mba'>
                    <a>MBA</a>
                  </Link> */}
									MBA
								</li>
								<li className={stls.desktopLinkBorder}></li>
								<li className={stls.linkItem}>
									{/* <Link href='/programs/mini'>
                    <a>MINI MBA</a>
                  </Link> */}
									MINI MBA
								</li>
								<li className={stls.desktopLinkBorder}></li>
								<li className={stls.linkItem}>{at.en ? 'Courses' : 'Курсы'}</li>
								{sale && (
									<li className={stls.sale}>
										<span className={stls.red}>30 ДНЕЙ БЕСПЛАТНО! </span>
										НЕ ПОНРАВИТСЯ - ВЕРНЁМ ДЕНЬГИ
									</li>
								)}
							</ul>

							<ul className={stls.mobileLinksList}>
								<li className={stls.linkItem}>
									<Link
										legacyBehavior
										href='/programs'
										{...(at.en ? { locale: 'ru' } : undefined)}>
										<a>{at.en ? 'MBA Programs' : 'Программы MBA'}</a>
									</Link>
								</li>
							</ul>
							<h1 className={stls.title}>
								{at.en ? 'Concur' : 'Получите'}{' '}
								<span className={stls.red}>
									{at.en ? 'relevant' : 'современное'}
								</span>{' '}
								{at.en
									? 'business education from international experts'
									: 'бизнес образование от международных экспертов'}
							</h1>
							<div className={stls.descTopPart}>
								<span className={stls.red}>
									{at.en ? `${discount} discount` : `Скидка ${discount}`}
								</span>{' '}
								{at.en ? 'on all ONLINE programs' : 'на все программы ONLINE'}{' '}
								<Until preposition={true} />!
							</div>
							<div className={stls.descForm}>
								<p className={stls.descBottomPart}>
									{at.en
										? 'Get a consultation, discounts information, and requirements by submitting a form'
										: 'Оставьте заявку и получите консультацию по программам, а также узнайте возможные варианты скидок и требования к поступлению'}
								</p>
								<FormAlpha
									programTitle={programTitle}
									setOpenLoader={setOpenLoader}
									setOpen={setOpen}
									alpha
									policyPrivacy={false}
									formName={`Заявка с формы "Получите современной бизнес образование от международных экспертов"`}
								/>
							</div>
						</div>
						<ul className={stls.prosList}>
							<li className={stls.prosItem}>
								<div className={stls.prosStatsNumber}>100+</div>
								<p>
									{at.en ? 'MBA Programs and courses' : 'Программ MBA и курсов'}
								</p>
							</li>
							<li className={stls.prosSeparator}></li>
							<li className={stls.prosItem}>
								<div className={stls.prosStatsNumber}>2023</div>
								<p>
									{at.en ? (
										'newest programs of 2023'
									) : (
										<>Актуальные программы 2023&nbsp;года</>
									)}
								</p>
							</li>
							<li className={stls.prosSeparator}></li>

							<li className={stls.prosItem}>
								<div className={stls.prosStatsNumber}>150+</div>
								<p>
									{at.en ? 'international experts' : 'Международных экспертов'}
								</p>
							</li>
							<li className={stls.prosSeparator}></li>

							<li className={stls.prosItem}>
								<div className={stls.prosStatsNumber}>
									{at.index ? '9000+' : '2000+'}
								</div>
								<p>
									{at.index
										? at.en
											? 'graduates around the world'
											: 'Выпускников по всему миру'
										: at.en
										? 'students from all over the world'
										: 'Студентов по всему миру'}
								</p>
							</li>
						</ul>
					</div>
				</div>
			</Wrapper>
			<Wrapper classNames={[stls.infoRectangleWrapper]}>
				<InfoRectangle />
			</Wrapper>
		</section>
	)
}

export default JumbotronCta
