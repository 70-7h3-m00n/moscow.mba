import stls from '@/styles/components/sections/HowProcessGoes.module.sass'
import cn from 'classnames'

import Image from 'next/image'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { useAt, useScrollObserver } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import studentPhoto from '@/public/assets/images/student-using-laptop.jpg'
import candidatePhoto from '@/public/assets/images/student-girl.jpg'

const HowProcessGoes = ({ partners = false }) => {
	const at = useAt()

	const stepsData = {
		mini: [
			{
				tabTitle: 'Поступление',
				stepTitle: 'Поступление',
				listItems: [
					'Вы проходите собеседование со специалистом приемной комиссии, подписываете договор, осуществляете оплату и получаете доступ к образовательной платформе',
					'На персональном занятии Ваш личный куратор проведет презентацию программы и расскажет, как будет проходить учебный процесс',
					'В личном кабинете Вам будет доступна вся информация по обучению: модули, график мероприятий, видеолекции и другие сервисы'
				]
			},
			{
				tabTitle: 'Обучение',
				stepTitle: 'Обучение',
				listItems: [
					'Вы последовательно пройдете по учебному плану: от модуля к модулю, от темы к теме',
					'Закрепите полученные знания на специальных кейсах, тренажерах и тестированиях',
					'После занятий Вы будете выполнять домашние задания, работать над индивидуальными и групповыми проектами'
				]
			},
			{
				tabTitle: 'Помощь и обратная связь от преподавателей',
				stepTitle: 'Помощь и обратная связь от преподавателей',
				listItems: [
					'Вы всегда можете рассчитывать на обратную связь по решению кейсов, проектным работам и домашним заданиям',
					'Преподаватели ответят на любой вопрос, дадут советы и рекомендации',
					'В конце каждого модуля проводятся внедренческие вебинары, где разбираются итоги модуля и вопросы студентов'
				]
			},
			{
				tabTitle: 'Сопровождение и поддержка студентов',
				stepTitle: 'Сопровождение и поддержка студентов',
				listItems: [
					'Вы получаете личного куратора, который поддерживает Вас по телефону и в мессенджерах и готов всегда ответить на Ваши вопросы',
					'Мы гарантируем результат за счет особой системы поддержки студентов с момента поступления и до выпускной защиты индивидуального проекта.'
				]
			},
			{
				tabTitle: 'Завершение обучения',
				stepTitle: 'Завершение обучения',
				listItems: [
					'Вы сдаете финальный экзамен по всему пройденному материалу, готовитесь и защищаете выпускной проект перед аттестационной комиссией',
					'После успешной защиты итогового проекта, получаете 2 престижных документа, подтверждающих полученный Вами уровень подготовки по специальности'
				]
			}
		],
		programs: [
			{
				tabTitle: 'Продолжительность обучения составляет от 2 до 18 месяцев',
				stepTitle: '',
				listItems: ['Продолжительность обучения составляет от 2 до 18 месяцев']
			},
			{
				tabTitle:
					'Мы не только оставляем доступ к курсам, чтобы вы могли вернуться к знаниям, когда возникает потребность, но и обновляем контент, чтобы у вас была самая актуальная информация',
				stepTitle: '',
				listItems: [
					'Мы не только оставляем доступ к курсам, чтобы вы могли вернуться к знаниям, когда возникает потребность, но и обновляем контент, чтобы у вас была самая актуальная информация'
				]
			},
			{
				tabTitle:
					'Рассказываем как внедрить техники и инструменты из обучения в свою сферу. Помогаем с трудоустройством',
				stepTitle: '',
				listItems: [
					'Рассказываем как внедрить техники и инструменты из обучения в свою сферу. Помогаем с трудоустройством'
				]
			},
			{
				tabTitle:
					'По окончании обучения выдается диплом международного образца, который признается в Европе и заносится в ФРДО',
				stepTitle: '',
				listItems: [
					'По окончании обучения выдается диплом международного образца, который признается в Европе и заносится в ФРДО'
				]
			},
			{
				tabTitle:
					'Благодаря онлайн-формату вы можете пройти программу с экспертами сразу из нескольких топовых бизнес-школ, не мешая текущей занятости',
				stepTitle: '',
				listItems: [
					'Благодаря онлайн-формату вы можете пройти программу с экспертами сразу из нескольких топовых бизнес-школ, не мешая текущей занятости'
				]
			}
		],
		job: [
			{
				tabTitle: 'Заполняете анкету',
				stepTitle: '',
				listItems: ['Заполняете анкету']
			},
			{
				tabTitle: 'Отправляете на почту rabota@moscow.mba',
				stepTitle: '',
				listItems: ['Отправляете на почту rabota@moscow.mba']
			},
			{
				tabTitle:
					'Менеджер свяжется с вами для уточнения подробностей вакансии',
				stepTitle: '',
				listItems: [
					'Менеджер свяжется с вами для уточнения подробностей вакансии'
				]
			},
			{
				tabTitle:
					'Мы размещаем вакансию в закрытом клубе выпускников с прямой ссылкой на вас или ваш HR отдел',
				stepTitle: '',
				listItems: [
					'Мы размещаем вакансию в закрытом клубе выпускников с прямой ссылкой на вас или ваш HR отдел'
				]
			}
		],
		partners: [
			{
				tabTitle: 'Заполняете анкету',
				stepTitle: '',
				listItems: ['Заполняете анкету']
			},
			{
				tabTitle: 'Отправляете на почту rabota@moscow.mba',
				stepTitle: '',
				listItems: ['Отправляете на почту rabota@moscow.mba']
			},
			{
				tabTitle: 'Мы добавляем вас  в закрытый клуб выпускников',
				stepTitle: '',
				listItems: ['Мы добавляем вас  в закрытый клуб выпускников']
			}
		],
		default: [
			{
				tabTitle: 'Поступление',
				stepTitle: 'Поступление',
				listItems: [
					'Вы проходите собеседование со специалистом приемной комиссии, подписываете договор, осуществляете оплату и получаете доступ в образовательную платформу',
					'Ваш личный куратор презентует программу и расскажет о процессе обучения на вводном персональном занятии',
					'В личном кабинете Вам будет доступна вся информация по обучению: модули, график мероприятий, видеолекции и другие сервисы'
				]
			},
			{
				tabTitle: 'Обучение',
				stepTitle: 'Обучение',
				listItems: [
					'Вы проходите программу последовательно: от модуля к модулю, от темы к теме',
					'Вы будете закреплять полученные знания на специальных кейсах, тренажерах и тестированиях',
					'В процессе обучения Вы будете выполнять домашние задания, участвовать в групповых заданиях и выполнять проектные работы'
				]
			},
			{
				tabTitle: 'Помощь и обратная связь',
				stepTitle: 'Помощь и обратная связь от экспертов',
				listItems: [
					'Вы будете получать обратную связь по решению кейсов, проектным работам и домашним заданиям',
					'Вы сможете задать любой вопрос и получить советы и рекомендации',
					...(!at.profession && !at.course
						? [
								'В конце каждого модуля студенты принимают участие во внедренческих вебинарах, где разбираются итоги модуля и вопросы слушателей программы'
						  ]
						: [])
				]
			},
			{
				tabTitle: 'Сопровождение процесса обучения',
				stepTitle: 'Сопровождение процесса обучения',
				listItems: [
					'Вы получаете личного куратора, который поддерживает Вас по телефону и в мессенджерах и готов всегда ответить на Ваши вопросы',
					'Мы гарантируем результат за счет особой системы поддержки процесса обучения'
				]
			},
			{
				tabTitle: 'Завершение обучения',
				stepTitle: 'Завершение обучения',
				listItems: [
					'Вы сдаете финальный экзамен по всей программе, готовитесь и защищаете выпускной проект перед аттестационной комиссией',
					at.profession || at.course
						? 'По окончании обучения вы получаете престижный диплом установленного образца'
						: 'По окончании обучения вы получаете 2 престижных диплома'
				]
			}
		]
	}

	const processSteps = useMemo(
		() =>
			at.mini
				? stepsData.mini
				: at.programs
				? stepsData.programs
				: partners
				? stepsData.partners
				: at.job
				? stepsData.job
				: stepsData.default,
		[at.mini, at.job, at.programs, partners]
	)

	const [activeStep, setActiveStep] = useState<number>(null)
	const [scrolledData, setScrolledData] = useState<number[]>(
		Array.from({ length: processSteps.length }, () => 0)
	)
	const stepsRefs = useRef(
		processSteps?.map(() => React.createRef<HTMLDivElement>())
	)
	const tabsRefs = useRef(
		processSteps?.map(() => React.createRef<HTMLLIElement>())
	)

	const scrollIntoViewTabs = (idx: number) =>
		tabsRefs.current[idx]?.current.scrollIntoView({
			inline: 'center',
			block: 'nearest'
		})
	const scrollIntoViewSteps = (idx: number) =>
		stepsRefs.current[idx].current.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'center'
		})

	const handleIntersectDesktopSteps: IntersectionObserverCallback = useCallback(
		entries => {
			entries?.map(entry => {
				if (entry.isIntersecting) {
					const stepIdx = processSteps.findIndex(
						step => step.stepTitle === entry.target.children.item(2).textContent
					)
					const increment = 0.1
					setScrolledData(prevArray =>
						prevArray?.map((prevValue, idx) =>
							idx === stepIdx
								? !prevValue
									? increment
									: prevValue < 1
									? prevValue + increment
									: 1
								: prevValue
						)
					)
				}
			})
		},
		[processSteps]
	)

	const handleIntersectPhoneSteps: IntersectionObserverCallback = useCallback(
		entries => {
			entries?.map(entry => {
				if (entry.isIntersecting) {
					const stepTitle = entry.target.children.item(2).textContent
					const currentActiveStep = processSteps.findIndex(
						step => step.stepTitle === stepTitle
					)
					scrollIntoViewTabs(currentActiveStep)
					setActiveStep(currentActiveStep)
				}
			})
		},
		[processSteps]
	)

	const desktopIntersectOptions = useMemo(
		() => ({
			rootMargin: '-40% 0px',
			threshold: Array.from({ length: 10 }, (_v, i) =>
				Number(((i + 1) * 0.1).toFixed(2))
			)
		}),
		[]
	)

	const phoneIntersectOptions = useMemo(
		() => ({
			rootMargin: '0px',
			threshold: 1
		}),
		[]
	)

	useScrollObserver(
		stepsRefs.current,
		handleIntersectDesktopSteps,
		desktopIntersectOptions
	)

	useScrollObserver(
		stepsRefs.current,
		handleIntersectPhoneSteps,
		phoneIntersectOptions
	)

	return (
		<section
			className={cn(stls.container, {
				[stls.job]: at.job,
				[stls.partners]: partners
			})}
		>
			<Wrapper
				classNames={[stls.content, { [stls.noBottomPadding]: partners }]}
			>
				<div className={stls.titleContainer}>
					{at.mini ? (
						<h2 className={stls.title}>Как проходит учебный процесс</h2>
					) : at.programs ? (
						<h2 className={stls.title}>Преимущества</h2>
					) : partners ? (
						<>
							<h2 className={cn(stls.title, stls.job)}>Этапы работы</h2>
							<div className={stls.jobContainer}>
								<Image
									className={stls.jobImg}
									width={38}
									height={38}
									alt='Student'
									src={candidatePhoto}
									style={{ objectFit: 'cover' }}
								/>
								<p className={stls.jobParagraph}>Для работодателей</p>
							</div>
						</>
					) : at.job ? (
						<>
							<h2 className={cn(stls.title, stls.job)}>Этапы работы</h2>
							<div className={stls.jobContainer}>
								<Image
									className={stls.jobImg}
									width={38}
									height={38}
									alt='Student'
									src={studentPhoto}
									style={{ objectFit: 'cover' }}
								/>
								<p className={stls.jobParagraph}>Для кандидатов</p>
							</div>
						</>
					) : (
						<h2 className={stls.title}>Как проходит процесс обучения</h2>
					)}
					{(at.mini || at.job || at.profession || at.course || at.programs) && (
						<div className={stls.studentPhoto}>
							<Image
								src={partners ? candidatePhoto : studentPhoto}
								height={at.job ? 264 : 337}
								width={at.job ? 396 : 506}
								alt={'Студент академии сидит перед ноутбуком'}
							/>
						</div>
					)}
				</div>
				<div className={stls.infoContainer}>
					<ul
						className={cn(stls.tabsList, {
							[stls.programsPage]: at.programs,
							[stls.job]: at.job
						})}
					>
						{processSteps?.map((step, idx) => (
							<li
								key={step.tabTitle + idx}
								ref={tabsRefs.current[idx]}
								className={stls.tabItem}
								onClick={() => {
									setActiveStep(idx)
									scrollIntoViewTabs(idx)
									scrollIntoViewSteps(idx)
								}}
							>
								<a
									className={cn(stls.tabLink, {
										[stls.activeTabLink]: idx === activeStep
									})}
								>
									{step.tabTitle}
								</a>
							</li>
						))}
					</ul>
					<div
						className={cn(stls.stepsWrap, {
							[stls.programsPage]: at.programs,
							[stls.job]: at.job
						})}
					>
						<>
							{processSteps?.map((step, idx) => (
								<React.Fragment key={idx + step.tabTitle}>
									<div
										ref={stepsRefs.current[idx]}
										className={cn(stls.processStep, {
											[stls.activeProcessStep]: idx === activeStep,
											[stls.programsPage]: at.programs,
											[stls.job]: at.job
										})}
									>
										<span
											className={cn(stls.redStick, {
												[stls.programsPage]: at.programs,
												[stls.job]: partners
											})}
											style={{
												height: `calc(${
													Number(scrolledData[idx]) * 100
												}% - 48px)`
											}}
										/>
										<div
											className={cn(stls.processStepNumber, {
												[stls.programsPage]: at.programs,
												[stls.partners]: partners,
												[stls.job]: at.job
											})}
										>
											{idx + 1}
										</div>
										<div
											className={cn(stls.processStepTitle, {
												[stls.programsPage]: at.programs
											})}
										>
											{step.stepTitle}
										</div>
										<ul
											className={cn(stls.list, {
												[stls.programsPage]: at.programs,
												[stls.job]: at.job,
												[stls.partners]: partners
											})}
										>
											{step.listItems?.map((item, idx) => (
												<li
													key={item + idx}
													className={cn(stls.listItem, { [stls.job]: at.job })}
												>
													{item}
												</li>
											))}
										</ul>
									</div>
								</React.Fragment>
							))}
						</>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}

export default HowProcessGoes
