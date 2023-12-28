import stls from './PhotoSlider.module.sass'
import cn from 'classnames'
import { PhotoSliderProps } from './types'

import { useEffect, useRef, useState } from 'react'
import { imagesList, variantsArray } from './constants'

export const PhotoSlider = ({ className }: PhotoSliderProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [activeVariant, setActiveVariant] = useState<number>(0)
	const [scrollPercentage, setScrollPercentage] = useState<number>(0)

	useEffect(() => {
		const calculateScrollPercentage = () => {
			const container = containerRef.current
			if (!container) return

			const containerRect = container.getBoundingClientRect()
			const windowHeight = window.innerHeight
			const scrollPosition = Math.max(
				0,
				Math.min(containerRect.height, windowHeight / 2 - containerRect.top)
			)
			const percentage = (scrollPosition / containerRect.height) * 100
			setScrollPercentage(percentage)
		}

		window.addEventListener('scroll', calculateScrollPercentage)
		calculateScrollPercentage()

		return () => {
			window.removeEventListener('scroll', calculateScrollPercentage)
		}
	}, [])

	useEffect(() => {
		function calculateIndexFromPercentage(percentage) {
			const clampedPercentage = Math.min(100, Math.max(0, percentage))
			const index = Math.floor((clampedPercentage / 100) * 6)
			return Math.min(5, index)
		}

		setActiveVariant(calculateIndexFromPercentage(scrollPercentage))
	}, [scrollPercentage])

	return (
		<div className={cn(className, stls.content)} ref={containerRef}>
			<ul className={stls.slider}>
				{imagesList.map((item, idx) => (
					<li
						className={cn(stls.slide, {
							[stls.slide__medium]: variantsArray[activeVariant]?.[idx] === 1,
							[stls.slide__big]: variantsArray[activeVariant]?.[idx] === 2
						})}
						key={idx}
						style={{
							backgroundImage: `url(${item.src})`
						}}
					></li>
				))}
			</ul>
		</div>
	)
}
