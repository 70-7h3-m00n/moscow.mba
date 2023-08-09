import stls from '@/styles/components/sections/ProgramsModulesAccordion.module.sass'
import cn from 'classnames'
import {
	createProgramModulesBase,
	createProgramModulesSpecialized
} from '@/helpers/index'
import { useAt } from '@/hooks/index'
import {
	ProgramsModule,
	Stickers,
	Sticker,
	ProgramSubjects,
	AccordionsContainer
} from '@/components/general'
import { IconCheckCircleAltDim } from '@/components/icons'
import { Wrapper } from '@/components/layout'
import { useState } from 'react'

const programData = {
	title: 'Цифровая трансформация в бизнесе',
	slug: 'digital-transformation',
	specializedSubjects: [
		{
			string:
				'В этом модуле мы рассмотрим место ИАС (интеллектуальных информационно-аналитических систем) в процессе цифровой трансформации. Исследуем виды информационно-аналитических систем и средства для сбора, обработки, преобразования и анализа данных. Вы познакомитесь со средствами интерпретации данных, такими как диаграмма Ишикавы и пространственная интерпретация, рассмотрите системы экономических показателей, которые используют специалисты по цифровой трансформации.',
			title: 'Интеллектуальные информационно-аналитические системы'
		},
		{
			string:
				'Вы освоите инструменты цифрового маркетинга, рассмотрите роль digital-технологий в трансформации рекламных и PR-коммуникаций. Поймете, как трансформация моделей традиционной сбытовой сети с упором на онлайн-продажи приводит к увеличению прибыли. Изучите принципы цифровизации коммуникативной стратегии с целью укрепления позиций компании на рынке повышенной конкуренции. Проработаете основные модели интернет-маркетинга: IDM, MDM и DRM',
			title: 'Digital-коммуникации'
		},
		{
			string:
				'В этом модуле вы изучите все этапы жизненного цикла продукта, принципы продуктового и цифрового менеджмента. Освоите подходы к разработке концепции нового продукта, стратегические методы формирования идей, принципы внедрения прогрессивных инициатив. Получите навык проективного мышления, внедрения Agile-культуры в компанию, проведения agile-трансформации. Детально разберетесь в построении ценовых моделей, прогнозировании результатов на каждом этапе разработки, A/B-тестировании продаж после выхода нового продукта в цифровую среду.  Ведущие специалисты расскажут, какие 4 силы влияют на решение конечного покупателя о смене продукта.',
			title:
				'Управление исследованиями и разработками. Создание нового продукта'
		},
		{
			string:
				'Модуль посвящен основам управления проектом в режиме цифровой трансформации. Вы исследуете финансовые модели, принципы построения, определения иерархии метрик, подходы к анализу Big Data. Изучите инструменты для работы с большими данными, такие как сегментация, кластеризация, поиск корреляций, экстраполяция. По завершении модуля приобретете навык бизнес-аналитики в рамках цифровой трансформации.',
			title: 'Бизнес-аналитика и большие данные'
		},
		{
			string:
				'В этом модуле вы узнаете, как цифровая трансформация оптимизирует работу HR-отдела и сокращает длительность исполнительных процессов. Как автоматизировать систему найма, адаптации, оценки персонала, кадрового документооборота. Поймете, как трансформировать методы проведения опросов, осуществления внутренних коммуникаций для повышения показателей эффективности отдела и ускорения рабочих процессов.',
			title:
				'HR-аналитика. Автоматизация HR-процессов. IT-технологии в управлении персоналом'
		}
	],
	baseSubjects: [
		{
			string:
				'Расскажем, как стать не просто руководителем, а вдохновляющим лидером. Как построить коммуникацию в команде и эффективно распоряжаться своими собственными ресурсами.',
			title: 'Основы менеджмента'
		},
		{
			string:
				'В этом модуле речь пойдет о способах повышения производительности при уменьшении затрат. Научитесь выстраивать успешные управленческие стратегии, регулировать организационные процессы, прогнозировать операционную деятельность компании.',
			title: 'Операционный менеджмент'
		},
		{
			string:
				'Вы научитесь планировать долгосрочные задачи организации, оценивать внутреннюю и внешнюю среду компании, выстраивать стратегии проникновения на рынок, управлять рисками.',
			title: 'Стратегический менеджмент'
		},
		{
			string:
				'Вы узнаете о ключевых факторах успеха проекта, как организовать работу со стейкхолдерами, внешними и внутренними, получите навык детального планирования.',
			title: 'Управление проектами'
		},
		{
			string:
				'В рамках модуля вы обучитесь оценке эффективности работы сотрудников и методам прогрессивного управления человеческими ресурсами на основе международной практики. Освоите принципы формирования устойчивой корпоративной культуры и команды специалистов для проведения цифровой трансформации.',
			title: 'Управление человеческими ресурсами'
		},
		{
			string:
				'Вы познакомитесь с актуальными трендами в сфере маркетинга, прогнозированием и оценкой результатов маркетинговых стратегий.',
			title: 'Управление маркетингом'
		},
		{
			string:
				'В этом модуле вы узнаете, как развить управленческую гибкость, и какие качества отличают настоящего лидера. Познакомитесь с основами позитивной коммуникации, техниками управления эмоциональным состоянием команды.',
			title: 'Профессиональные навыки и личностное развитие руководителя'
		},
		{
			string:
				'Вы изучите все стадии развития конфликта и модели поведения для успешного выхода из конфликтных ситуаций. Научитесь регулировать групповые конфликты в качестве руководителя.',
			title: 'Управление конфликтами'
		},
		{
			string:
				'В этом модуле мы поговорим о финансовых аспектах деятельности организации: бюджетирование, финансовое планирование, аудит, налогообложение. Вы сможете проводить оценку стоимости компании, управлять корпоративными финансами.',
			title: 'Финансовый менеджмент'
		},
		{
			string:
				'Вы научитесь выстраивать долгосрочную маркетинговую стратегию компании. Получите глубокое понимание принципов рыночной экономики. Поймете, как найти и занять свою нишу, как повысить ценность товаров и услуг для конечных потребителей. ',
			title: 'Стратегический маркетинг'
		}
	],
	specializedSubjectsAddons: {
		Practice: true,
		OfflineModule: null,
		diplomaProtection: null
	},
	subjectsStickerType: 'finalAttestation',
	programModulesCounters: {
		leftCounter: 'generalAcademicDisciplines',
		rightCounter: 'specializedlAcademicDisciplines'
	}
}

const ProgramsModulesAccordion = ({ program, smallerMb = false }) => {
	const at = useAt()

	const programModulesBase = createProgramModulesBase(program)
	const programModulesSpecialty = createProgramModulesSpecialized(program)

	const [closeAll, setCloseAll] = useState(false)

	return (
		<section className={cn(stls.container, { [stls.smallMb]: smallerMb })}>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.pl}>
					<h2>Программа обучения</h2>
					<ul className={stls.redRectangle}>
						<li className={stls.redItem}>
							<div className={stls.number}>
								{at.executive ? (
									<ProgramSubjects subjects='base' />
								) : (
									program && program?.baseSubjects?.length
								)}
							</div>
							<p className={stls.p}>
								{program?.programModulesCounters?.leftCounter ===
								'specializedlAcademicDisciplines'
									? 'профильных дисциплин'
									: program?.programModulesCounters?.leftCounter ===
									  'academicDisciplines'
									? 'дисциплин'
									: program?.programModulesCounters?.leftCounter ===
									  'generalAcademicDisciplines'
									? 'модулей базовой части'
									: 'дисциплин'}
							</p>
						</li>
						<li className={stls.redItem}>
							{program?.programModulesCounters?.rightCounter === 'icon' ? (
								<>
									<div className={stls.number}>
										<IconCheckCircleAltDim />
									</div>
									<p className={stls.p}>Практика и защита дипломной работы</p>
								</>
							) : program?.programModulesCounters?.rightCounter ===
							  'specializedlAcademicDisciplines' ? (
								<>
									<div className={stls.number}>
										{program?.specializedSubjects?.length}
									</div>
									<p className={stls.p}>модулей специализации</p>
								</>
							) : program?.programModulesCounters?.rightCounter ===
							  'practiceAndExam' ? (
								<>
									<div className={stls.number}>
										<IconCheckCircleAltDim />
									</div>
									<p className={stls.p}>Практика и защита дипломной работы</p>{' '}
								</>
							) : (
								''
							)}
						</li>
					</ul>
				</div>
				{program && program?.baseSubjects?.length > 0 && !at.executive && (
					<>
						{program &&
							program?.baseSubjects?.length > 0 &&
							!at.executive &&
							!at.profession &&
							!at.course && <h3 className={stls.h3}>Базовые дисциплины</h3>}
						<AccordionsContainer
							accordionsItems={program?.baseSubjects}
							firstAccordionActive
							closeAll={closeAll}
							setCloseAll={setCloseAll}
							isModulesContainer
							scrollableIntoView
						/>
					</>
				)}

				{program &&
					program?.specializedSubjects?.length > 0 &&
					!at.profession &&
					!at.course && (
						<h3 className={stls.h3}>Специализированные дисциплины</h3>
					)}

				<AccordionsContainer
					accordionsItems={program?.specializedSubjects}
					firstAccordionActive
					closeAll={closeAll}
					setCloseAll={setCloseAll}
					isModulesContainer
					scrollableIntoView
				/>

				{program?.subjectsStickerType && (
					<div className={stls.sticker}>
						{program?.subjectsStickerType === 'finalAttestation' ? (
							<Sticker
								type={'long'}
								clr={'light'}
								title={'Итоговая аттестация'}
								listItems={[
									'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
									'Защита итоговой аттестационной работы'
								]}
							/>
						) : program?.subjectsStickerType === 'fullTimeModuleInMoscow' ? (
							<Sticker
								type={'long'}
								clr={'light'}
								title={'Очный модуль в Москве'}
								listItems={[
									'Живое общение со спикерами',
									'Групповые проекты и разбор кейсов',
									'Домашние задания и курсовая работа',
									'Защита проектов и выпускной вечер'
								]}
							/>
						) : program?.subjectsStickerType ===
						  'practiceModulesAndFinalAttestation' ? (
							<Stickers>
								<Sticker
									type={'short'}
									clr={'light'}
									title={'Практические модули'}
									listItems={[
										'Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе'
									]}
								/>
								<Sticker
									type={'short'}
									clr={'light'}
									title={'Итоговая аттестация'}
									listItems={[
										'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
										'Защита итоговой аттестационной работы'
									]}
								/>
							</Stickers>
						) : (
							<></>
						)}
					</div>
				)}
			</Wrapper>
		</section>
	)
}

export default ProgramsModulesAccordion
