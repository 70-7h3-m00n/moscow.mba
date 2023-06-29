import stls from '@/styles/components/sections/corporateClients/SectionCorporateClientsHero.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { PopupForm } from '@/components/popups'
import { ImgCorporateClientsBg } from '@/components/images'
import { Wrapper } from '@/components/layout'
import { BtnAlpha } from '@/components/btns'

type SectionCorporateClientsHeroProps = TypeClassNames & {
	programId: string
}

const SectionCorporateClientsHero = ({
	classNames,
	programId
}: SectionCorporateClientsHeroProps) => {
	const title = <>Корпоративное обучение для&nbsp;бизнеса</>

	const pros = [
		{
			title: '100+',
			content: 'Программ MBA и курсов'
		},
		{
			title: '2023',
			content: <>Актуальные программы 2023&nbsp;года</>
		},
		{
			title: '9000+',
			content: 'Студентов по всему миру'
		},
		{
			title: '150+',
			content: 'Международных экспертов'
		}
	]

	const breadcrumbs = [
		{ href: routesFront.home, val: 'Главная' },
		{ val: title }
	]

	return (
		<section
			className={
				cn(stls.container, getClassNames({ classNames })) || undefined
			}>
			<ImgCorporateClientsBg classNames={[stls.bg]} />
			<Wrapper column classNames={[stls.wrapper]}>
				<ul className={stls.breadcrumbs}>
					{breadcrumbs.map((item, idx) => (
						<li key={`${item.val}-${idx}`} className={stls.breadcrumbItem}>
							{item.href ? (
								<Link legacyBehavior href={item.href}>
									<a className={cn(stls.breadcrumb, stls.breadcrumbLink)}>
										{item.val}
									</a>
								</Link>
							) : (
								<span className={cn(stls.breadcrumb, stls.breadcrumbSpan)}>
									{item.val}
								</span>
							)}
						</li>
					))}
				</ul>
				<div className={stls.content}>
					<div className={stls.left}>
						<h1 className={stls.title}>{title}</h1>
						<p className={stls.subtitle}>
							Подберем или разработаем с нуля образовательные программы с учётом
							специфики ниши, целей и&nbsp;задач&nbsp;компании
						</p>

						<Popup
							trigger={() => (
								<BtnAlpha variant='beta' classNames={[stls.btn]}>
									Оставить заявку
								</BtnAlpha>
							)}
							modal
							lockScroll
							nested
							closeOnDocumentClick>
							{/* @ts-expect-error  */}
							{(close: MouseEventHandler) => (
								<PopupForm
									programId={programId}
									programTitle={title}
									title={'Получите консультацию'}
									closePopUpForm={close}
									formName='Заявка с модальной формы главного экрана на корпоративное обучение, описание над кнопкой: "Подберем или разработаем с нуля образовательные программы с учётом
                  специфики ниши, целей и задач компании"'
								/>
							)}
						</Popup>
					</div>
					<div className={stls.right}>
						<ul className={stls.pros}>
							{pros.map((item, idx) => (
								<li key={`${item.title}-${idx}`} className={stls.pro}>
									<p className={stls.proTitle}>{item.title}</p>
									<p className={stls.proContent}>{item.content}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}

export default SectionCorporateClientsHero
