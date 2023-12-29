import stls from '@/styles/components/general/CourseAccordion.module.sass'
import { useState, useEffect } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { Transition } from 'react-transition-group'
import PopupForm from '@/components/popups/PopupForm'
import { Until } from '@/components/costs'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import { IconCheckCircle, IconClock, IconScreen } from '@/components/icons'

const duration = 0.6

const initialStyles = {
	opacity: 0,
	transition: `all ${duration}s ease-out`
}

const transitionStyles = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 }
}

const CourseAccordion = ({
	course,
	accordionIndex,
	activeAccordionIndex,
	activeAccordion,
	setActiveAccordion
}) => {
	const [isShown, setIsShown] = useState(false)

	useEffect(() => setIsShown(true), [])

	const coursePros = [
		'Международный диплом установленного образца с присвоением степени MBA',
		<>
			<span>Последнее обновление </span>
			программы было в 2023 г.
		</>,
		<>
			<span>Разработана по </span>
			международным стандартам
		</>,
		<>
			<span>Спикеры являются </span>
			практикующими специалистами
		</>
	]

	const handleAccordionClick = e => {
		if (activeAccordion) setActiveAccordion(-1)

		if (!activeAccordion && setActiveAccordion) {
			const coursesAccordionTop = e.currentTarget.getBoundingClientRect().top
			const offsetY = 10
			const openedAdditionalInfo = e.target
				.closest('.accordionsContent')
				.querySelector('.openedAdditionalInfo')

			const doesAdditionalInfoExist = Boolean(openedAdditionalInfo)

			const openedAdditionalInfoHeight = doesAdditionalInfoExist
				? openedAdditionalInfo.getBoundingClientRect().height
				: 0

			let openedAdditionalInfoOffset = openedAdditionalInfoHeight

			const isClickedAccordionAboveActive =
				accordionIndex < activeAccordionIndex

			if (isClickedAccordionAboveActive) openedAdditionalInfoOffset *= 0

			window.scrollTo({
				top:
					coursesAccordionTop +
					window.pageYOffset -
					openedAdditionalInfoOffset -
					offsetY,
				behavior: 'smooth'
			})

			setActiveAccordion(accordionIndex)
		}
	}

	return (
		<Transition in={isShown} timeout={duration}>
			{state => (
				<div
					style={{ ...initialStyles, ...transitionStyles[state] }}
					className={cn(stls.container, {
						[stls.opened]: activeAccordion
					})}
				>
					<div
						className={stls.mainInfoContainer}
						onClick={e => handleAccordionClick(e)}
					>
						<span className={stls.accordionLabel}>MBA</span>
						<ul className={stls.courseMainInfoList}>
							<li className={stls.courseMainInfoItem}>
								{/* От {<TrainingPeriod type={type} />} */}
								От 9 месяцев
							</li>
							<li className={stls.courseMainInfoItem}>ONLINE</li>
							<li className={stls.courseMainInfoItem}>
								Ближайшее зачисление {<Until preposition={true} />}
							</li>
						</ul>
						<h3 className={stls.courseTitle}>{course?.title}</h3>
						<div className={stls.plus}>
							<i></i>
							<i></i>
						</div>
					</div>
					<div
						className={cn({
							[stls.additionalInfoContainer]: true,
							['openedAdditionalInfo']: activeAccordion
						})}
					>
						<p className={stls.listTitle}>Чему научитесь:</p>
						<ul className={stls.whatWillLearnList}>
							{course?.whatWillYouLearn?.map((item, idx) => (
								<li
									key={`whatWillYouLearn-${idx}`}
									className={stls.whatWillLearnItem}
								>
									{item.string || item}
								</li>
							))}
						</ul>
						<ul className={stls.courseAdditionalInfoList}>
							<li className={stls.courseAdditionalInfoItem}>
								<IconClock />
								От {<TrainingPeriod type={course?.category?.type} />}
							</li>
							<li className={stls.courseAdditionalInfoItem}>
								<IconScreen />
								Дистанционное или очное обучение
							</li>
						</ul>
						<ul className={stls.courseProsList}>
							{coursePros.map((pro, idx) => (
								<li key={`coursePros-${idx}`} className={stls.courseProsItem}>
									<IconCheckCircle />
									<p className={stls.courseProDesc}>{pro}</p>
								</li>
							))}
						</ul>
						<Popup
							trigger={
								<a className={stls.learnMoreBtn}>Узнать больше о программе</a>
							}
							modal
							lockScroll
							nested
							closeOnDocumentClick
						>
							{/* @ts-expect-error  */}
							{(close: any) => (
								<PopupForm
									title={'Получите консультацию по программе'}
									closePopUpForm={close}
									programTitle={course?.title}
									promoCourseLink={`/programs/${course?.category?.type}/${course?.studyFormat}/${course?.slug}`}
									formName={`Заявка с модальной формы "Получите консультацию по программе${
										course?.title
											? ` ${course?.category?.type || ''} ${
													course?.studyFormat || ''
											  } ${course.title}`
											: ''
									}"`}
								/>
							)}
						</Popup>
					</div>
				</div>
			)}
		</Transition>
	)
}

export default CourseAccordion
