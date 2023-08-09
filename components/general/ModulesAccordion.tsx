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
			<div className={stls.moduleContainer}>
				<div className={stls.moduleCounter}>
					<span>{accordionIndex + 1} </span>
					<svg
						viewBox='0 0 75 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M0.88 11V1.12H3.3L7.24 8.9L11.18 1.12H13.52V11H11.74V3.24L7.78 11.06H6.52L2.6 3.32V11H0.88ZM21.7463 0.879999C23.2263 0.879999 24.4596 1.38 25.4463 2.38C26.4463 3.36667 26.9463 4.59333 26.9463 6.06C26.9463 7.52667 26.4396 8.76 25.4263 9.76C24.4263 10.7467 23.1996 11.24 21.7463 11.24C20.2663 11.24 19.0263 10.74 18.0263 9.74C17.0396 8.74 16.5463 7.51333 16.5463 6.06C16.5463 4.58 17.0463 3.34667 18.0462 2.36C19.0463 1.37333 20.2796 0.879999 21.7463 0.879999ZM21.7463 9.56C22.7329 9.56 23.5329 9.22 24.1463 8.54C24.7596 7.86 25.0663 7.03333 25.0663 6.06C25.0663 5.06 24.7529 4.22667 24.1263 3.56C23.5129 2.89333 22.7196 2.56 21.7463 2.56C20.7596 2.56 19.9596 2.9 19.3463 3.58C18.7329 4.24667 18.4263 5.07333 18.4263 6.06C18.4263 7.04667 18.7396 7.88 19.3663 8.56C19.9929 9.22667 20.7863 9.56 21.7463 9.56ZM36.5844 9.36V2.76H32.5444L32.2844 4.96C32.1644 5.96 32.0177 6.87333 31.8444 7.7C31.711 8.35333 31.5044 8.90667 31.2244 9.36H36.5844ZM29.9044 13.98H28.2844V9.36H29.4644C30.0244 8.61333 30.4244 7.1 30.6644 4.82L31.0844 1.12H38.4044V9.36H40.2044V13.98H38.5844V11H29.9044V13.98ZM51.6639 1.12L45.1839 15.48H43.3239L45.4439 10.78L40.9639 1.12H43.0239L46.4039 8.64L49.7839 1.12H51.6639ZM54.2195 6.6L54.7595 1.12H62.1195V11H60.2995V2.76H56.2195L55.8395 6.72C55.7862 7.22667 55.7329 7.65333 55.6795 8C55.6262 8.34667 55.5262 8.74 55.3795 9.18C55.2329 9.60667 55.0529 9.95333 54.8395 10.22C54.6262 10.4733 54.3329 10.6933 53.9595 10.88C53.5862 11.0533 53.1529 11.14 52.6595 11.14H52.1195V9.5H52.3595C52.8795 9.5 53.2595 9.38 53.4995 9.14C53.7529 8.9 53.9329 8.52 54.0395 8C54.1062 7.6 54.1662 7.13333 54.2195 6.6ZM67.7 4.3H70.7C72.6467 4.3 73.8867 4.96667 74.42 6.3C74.5667 6.74 74.64 7.18 74.64 7.62C74.64 8.71333 74.26 9.55333 73.5 10.14C72.7533 10.7133 71.8267 11 70.72 11H65.88V1.12H67.7V4.3ZM70.5 5.94H67.7V9.36H70.5C71.98 9.36 72.72 8.78 72.72 7.62C72.72 6.5 71.98 5.94 70.5 5.94Z'
							fill='#808080'
						/>
					</svg>
				</div>
				<div className={cn(stls.moduleTitle)}>{title}</div>
			</div>
			<div className={cn(stls.content)}>{string}</div>
		</div>
	)
}

export default Accordion
