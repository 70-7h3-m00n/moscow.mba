import React from 'react'
import cn from 'classnames'
import { RevertedCornerProps } from './types'

export const RevertedCorner = ({
	className,
	bgColor = '#F8F8F8',
	size,
	...rest
}: RevertedCornerProps) => {
	const svgSize = size === 'l' ? '115' : size === 'm' ? '106' : '64'

	return (
		<svg
			className={className}
			width={svgSize}
			height={svgSize}
			viewBox={`0 0 ${svgSize} ${svgSize}`}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...rest}
		>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d={
					size === 'l'
						? 'M0 114.935C0 101.68 10.7452 90.9347 24 90.9347H43C68.9574 90.9347 90 69.8921 90 43.9347V24C90 10.7451 100.745 0 114 0H24C10.7452 0 0 10.7452 0 24V114.935Z'
						: size === 'm'
						? 'M0 0C8.83655 0 16 7.16333 16 16V43C16 68.9573 37.0426 90 63 90H90C98.8365 90 106 97.1633 106 106V16C106 7.16333 98.8365 0 90 0H0Z'
						: 'M0 0C8.83655 0 16 7.16344 16 16V24C16 37.2548 26.7452 48 40 48H48C56.8365 48 64 55.1634 64 64V16C64 7.16344 56.8365 0 48 0H0Z'
				}
				fill={bgColor}
			/>
		</svg>
	)
}
