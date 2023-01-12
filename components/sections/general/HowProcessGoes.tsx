import stls from '@/styles/components/sections/HowProcessGoes.module.sass'
import Image from 'next/image'
import { useContext, useState } from 'react'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import studentPhoto from '@/public/assets/images/student-using-laptop.jpg'
import { DigitalTransformationContext } from '@/context/index'

const HowProcessGoes = () => {
	const [activeStep, setActiveStep] = useState(0)
	const at = useAt()

	const processSteps = [
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

	{
		/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */
	}
	const processStepsDigitalTransformation = [
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
	]
	{
		/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */
	}
	const isDigitalTransformation = useContext(DigitalTransformationContext)

	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.titleContainer}>
					{isDigitalTransformation ? (
						<h2 className={stls.title}>Как проходит учебный процесс</h2>
					) : (
						<h2 className={stls.title}>Как проходит процесс обучения</h2>
					)}
					{at.profession ||
						(at.course && (
							<div className={stls.studentPhoto}>
								<Image
									src={studentPhoto}
									height={337}
									width={506}
									alt={'Студент академии сидит перед ноутбуком'}
								/>
							</div>
						))}
				</div>
				<div className={stls.infoContainer}>
					<ul className={stls.tabsList}>
						{/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */}
						{isDigitalTransformation
							? processStepsDigitalTransformation.map((step, idx) => (
									<li
										key={step.tabTitle + idx}
										className={stls.tabItem}
										onClick={() => setActiveStep(idx)}>
										<a
											className={cn(
												stls.tabLink,
												idx === activeStep && stls.activeTabLink
											)}>
											{step.tabTitle}
										</a>
									</li>
							  ))
							: processSteps.map((step, idx) => (
									<li
										key={step.tabTitle + idx}
										className={stls.tabItem}
										onClick={() => setActiveStep(idx)}>
										<a
											className={cn(
												stls.tabLink,
												idx === activeStep && stls.activeTabLink
											)}>
											{step.tabTitle}
										</a>
									</li>
							  ))}
					</ul>
					{/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */}
					{isDigitalTransformation
						? processStepsDigitalTransformation.map((step, idx) => (
								<div
									key={idx + step.tabTitle}
									className={cn(
										stls.processStep,
										idx === activeStep && stls.activeProcessStep
									)}>
									<div className={stls.processStepNumber}>{idx + 1}</div>
									<div className={stls.processStepTitle}>{step.stepTitle}</div>
									<ul className={stls.list}>
										{step.listItems.map((item, idx) => (
											<li key={item + idx} className={stls.listItem}>
												{item}
											</li>
										))}
									</ul>
								</div>
						  ))
						: processSteps.map((step, idx) => (
								<div
									key={idx + step.tabTitle}
									className={cn(
										stls.processStep,
										idx === activeStep && stls.activeProcessStep
									)}>
									<div className={stls.processStepNumber}>{idx + 1}</div>
									<div className={stls.processStepTitle}>{step.stepTitle}</div>
									<ul className={stls.list}>
										{step.listItems.map((item, idx) => (
											<li key={item + idx} className={stls.listItem}>
												{item}
											</li>
										))}
									</ul>
								</div>
						  ))}
				</div>
			</Wrapper>
		</section>
	)
}

export default HowProcessGoes
