import React from 'react'
import { FilterDirectionsProps } from './types'

export const FilterDirections = ({
	className,
	uniqueDirections
}: FilterDirectionsProps) => {
	return (
		<ul>
			{uniqueDirections?.map(direction => (
				<li key={direction}>{direction}</li>
			))}
		</ul>
	)
}
