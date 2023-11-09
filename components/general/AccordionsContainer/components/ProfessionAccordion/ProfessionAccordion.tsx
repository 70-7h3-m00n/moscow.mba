import stls from './ProfessionAccordion.module.sass'
import cn from 'classnames'
import { ProfessionAccordionProps } from './types'

import { useState, useEffect } from 'react'
import { Transition } from 'react-transition-group'
import { duration, initialStyles, transitionStyles } from './constants'

const ProfessionAccordion = ({
	course,
	accordionIndex,
	activeAccordionIndex,
	activeAccordion,
	setActiveAccordion,
	noCounter = false
}: ProfessionAccordionProps) => {
	const [isShown, setIsShown] = useState(false)

	const accordionItemTitle =
		noCounter || course?.title === 'Трудоустройство'
			? `${course?.title ?? course?.string}`
			: `${accordionIndex + 1}. ${course?.title ?? course?.string}`

	useEffect(() => setIsShown(true), [])
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
						<h3
							className={cn(stls.courseTitle, {
								[stls.careerCenter]: course?.title === 'Трудоустройство'
							})}
						>
							{accordionItemTitle}
						</h3>
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
						<ul className={stls.whatWillLearnList}>
							{course?.skills?.map(
								(skill, idx) =>
									skill.title && (
										<li className={stls.whatWillLearnItem} key={idx}>
											{skill.title}
										</li>
									)
							)}
						</ul>
					</div>
				</div>
			)}
		</Transition>
	)
}

export default ProfessionAccordion
