import stls from '@/styles/components/general/AccordionsContainer.module.sass'
import { useState } from 'react'
import {
	Accordion,
	CourseAccordion,
	ModulesAccordion
} from '@/components/general'

const AccordionsContainer = ({
	accordionsItems,
	firstAccordionActive,
	closeAll,
	setCloseAll,
	isCoursesContainer = false,
	isModulesContainer = false,
	scrollableIntoView = false
}) => {
	const [activeAccordionIndex, setActiveAccordionIndex] = useState(
		firstAccordionActive ? 0 : -1
	)

	const handleSetActiveAccordion = idx => {
		setActiveAccordionIndex(idx)
		setCloseAll(false)
	}

	if (closeAll && activeAccordionIndex !== -1) setActiveAccordionIndex(-1)

	if (!isCoursesContainer && !isModulesContainer) {
		return (
			<>
				{accordionsItems.map((item, idx) => (
					<Accordion
						key={`${item?.title}-${idx}`}
						accordionItem={item}
						accordionIndex={idx}
						activeAccordion={idx === activeAccordionIndex}
						setActiveAccordion={setActiveAccordionIndex}
						scrollableIntoView={scrollableIntoView}
					/>
				))}
			</>
		)
	}

	if (isCoursesContainer) {
		return (
			<>
				{accordionsItems.map((item, idx) => (
					<CourseAccordion
						key={`${item?.title}-${idx}`}
						course={item}
						accordionIndex={idx}
						activeAccordionIndex={activeAccordionIndex}
						activeAccordion={idx === activeAccordionIndex}
						setActiveAccordion={idx => handleSetActiveAccordion(idx)}
					/>
				))}
			</>
		)
	}

	if (isModulesContainer) {
		return (
			<>
				{accordionsItems.map((item, idx) => (
					<ModulesAccordion
						key={`${item?.title}-${idx}`}
						accordionItem={item}
						accordionIndex={idx}
						activeAccordion={idx === activeAccordionIndex}
						setActiveAccordion={idx => handleSetActiveAccordion(idx)}
						scrollableIntoView
					/>
				))}
			</>
		)
	}
}

export default AccordionsContainer
