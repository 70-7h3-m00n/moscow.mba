import stls from '@/styles/components/general/ModulesAccordion.module.sass'
import cn from 'classnames'
import ImageContainer from '@/components/general/ImageContainer'
import React, { RefObject, useRef } from 'react'

const Accordion = ({
	accordionItem,
	accordionIndex = null,
	activeAccordion = null,
	setActiveAccordion = null,
	scrollableIntoView
}) => {
	const { title, string } = accordionItem
	const accordion = useRef<HTMLDivElement>(null)
	let accordionContent

	const handleAccordionClick = () => {
		accordion.current.scrollIntoView({ block: 'center' })

		if (activeAccordion) setActiveAccordion(-1)

		if (!activeAccordion && setActiveAccordion)
			setActiveAccordion(accordionIndex)
	}

	return (
		<div
			ref={accordion}
			className={cn(stls.container, {
				[stls.opened]: activeAccordion
			})}
			onClick={handleAccordionClick}>
			<div className={stls.plus}>
				<i></i>
				<i></i>
			</div>
			<div className={stls.title}>
				<span>{accordionIndex + 1} модуль</span>
				{title}
			</div>
			<div className={cn(stls.content)}>{string}</div>
		</div>
	)
}

export default Accordion
