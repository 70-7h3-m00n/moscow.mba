import stls from '@/styles/components/sections/general/SectionStudyCost.module.sass'
import cn from 'classnames'

import { TypeClassNames } from '@/types/index'
import { useContext, MouseEventHandler } from 'react'
import Popup from 'reactjs-popup'
import { useAt } from '@/hooks/index'
import { ContextStaticProps } from '@/context/index'
import { getClassNames, ruCase } from '@/helpers/index'
import { GeneralStickerDiscount } from '@/components/general'
import { Loan, Price, TrainingPeriod, Until } from '@/components/costs'
import { Wrapper } from '@/components/layout'
import { PopupForm } from '@/components/popups'
import { BtnAlpha } from '@/components/btns'
import { getYear } from 'date-fns'

type TypeSectionStudyCostProps = TypeClassNames

const SectionStudyCost = ({ classNames }: TypeSectionStudyCostProps) => {
	const at = useAt()
	const currentYear = getYear(new Date())
	const { program } = useContext(ContextStaticProps)

	const pros = [
		'Практические домашние задания',
		`Современная программа ${currentYear} года`,
		'Интерактивные онлайн-семинары',
		'Карьерные консультации',
		'Дипломы заносятся в ФРДО',
		<>Ежедневная помощь от кураторов и&nbsp;преподавателей</>
	]

	const isDiscounted = at.online || at.mbl

	return (
		<section
			className={
				cn([stls.container], getClassNames({ classNames })) || undefined
			}
		>
			<Wrapper column classNames={[stls.wrapper]}>
				<div className={stls.heading}>
					<h2 className={stls.title}>
						{at.en ? 'Study Cost' : 'Стоимость обучения'}
					</h2>
					{!at.executive && (
						<GeneralStickerDiscount classNames={[stls.stickerDiscount]} />
					)}
				</div>
				<div className={stls.content}>
					<div className={stls.left}>
						<div className={stls.programInfos}>
							<div className={stls.programInfo}>
								<p className={stls.programInfoTitle}>
									{program?.duration?.minStudyMonths ? (
										`${program?.duration?.minStudyMonths} ${
											at.en
												? 'month'
												: ruCase(program?.duration?.minStudyMonths, [
														'месяц',
														'месяца',
														'месяцев'
												  ])
										}`
									) : (
										<TrainingPeriod
											type={
												at.mini
													? 'mini'
													: at.mba
													? 'mba'
													: at.executive
													? 'executive'
													: at.mbl
													? 'mba'
													: at.profession
													? 'profession'
													: at.course
													? 'course'
													: null
											}
										/>
									)}
								</p>
								<p className={stls.programInfoContent}>
									Возможно закончить экстерном
								</p>
							</div>
							<div className={stls.programInfo}>
								<p className={stls.programInfoTitle}>
									{at.blended ? 'С очными модулями' : 'Дистанционно'}
								</p>
								<p className={stls.programInfoContent}>
									{at.blended
										? 'Живое общение с экспертами'
										: 'Онлайн-встречи с преподавателями'}
								</p>
							</div>
						</div>
						<div className={stls.programAdmission}>
							<p className={stls.programAdmissionTitle}>
								Ближайший набор{' '}
								<span className={stls.highlight}>
									<Until preposition={false} executive={at.executive} />{' '}
								</span>
							</p>
							<p className={stls.programAdmissionContent}>
								*количество мест ограничено
							</p>
						</div>
						{/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */}
						{at.mini ? (
							<ul className={stls.pros}>
								<li className={stls.proItem}>
									<p className={stls.pro}>
										Современный подход к бизнес-образованию
									</p>
								</li>
								<li className={stls.proItem}>
									<p className={stls.pro}>Практические домашние задания</p>
								</li>
								<li className={stls.proItem}>
									<p className={stls.pro}>Интерактивные онлайн-семинары</p>
								</li>
								<li className={stls.proItem}>
									<p className={stls.pro}>Карьерные консультации</p>
								</li>
								<li className={stls.proItem}>
									<p className={stls.pro}>
										Итоговые документы заносятся в ФРДО
									</p>
								</li>
								<li className={stls.proItem}>
									<p className={stls.pro}>
										Ежедневная помощь от кураторов и преподавателей
									</p>
								</li>
							</ul>
						) : (
							<ul className={stls.pros}>
								{pros.map((pro, idx) => (
									<li key={`${pro}-${idx}`} className={stls.proItem}>
										<p className={stls.pro}>{pro}</p>
									</li>
								))}
							</ul>
						)}
					</div>
					<div className={stls.right}>
						<div className={stls.ps}>
							<p className={stls.p}>
								Успех в карьере напрямую связывают с&nbsp;получением образования
							</p>
							{/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */}
							{at.mini ? (
								<p className={stls.p}>
									Приобретите актуальные знания, увеличьте свой доход и
									продвинетесь по карьерной лестнице!
								</p>
							) : (
								<p className={stls.p}>
									Получите актульные знания, увеличьте свой доход и продвиньтесь
									по карьерной лестнице!
								</p>
							)}
						</div>
						<p className={stls.getStartedTodayP}>
							Запишитесь на курс {!at.profession && !at.course && 'MBA'}{' '}
							сегодня:
						</p>
						<div className={stls.loan}>
							{at.executive ? (
								<Price
									discount={false}
									type={'executive'}
									renderedByComponent='SectionStudyCost'
								/>
							) : (
								<Loan
									discount={isDiscounted}
									type={program?.category?.type}
									format={program?.studyFormat}
									programPrice={(at.profession || at.course) && program?.price}
									variant='SectionStudyCost'
								/>
							)}
						</div>
						<Popup
							trigger={() => (
								<BtnAlpha variant='beta-reverse'>Оставить заявку</BtnAlpha>
							)}
							modal
							lockScroll
							nested
							closeOnDocumentClick
						>
							{/* @ts-expect-error  */}
							{(close: MouseEventHandler) => (
								<PopupForm
									programId={program?.id}
									programTitle={program?.title}
									title={'Получите консультацию'}
									closePopUpForm={close}
									formName={`Заявка с модальной формы "Стоимость обучения"${
										program?.title
											? ` программы ${program?.category?.type || ''} ${
													program?.studyFormat || ''
											  } ${program.title}`
											: ''
									}`}
								/>
							)}
						</Popup>

						{!at.executive && (
							<p className={stls.btwP}>
								*согласно опросу за {currentYear} год, 93% наших студентов
								окупили обучение уже на 2-й месяц
							</p>
						)}
					</div>
				</div>
			</Wrapper>
		</section>
	)
}

export default SectionStudyCost
