import React, { useId } from 'react'
import { SVGProps } from 'react'

export const IconCheck = ({
	color,
	...rest
}: SVGProps<SVGSVGElement> & { color?: string }) => {
	const clipId = useId() // Генерация уникального ID

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			{...rest}
		>
			<g clipPath={`url(#${clipId})`}>
				<circle cx='12.0383' cy='12.0337' r='12' fill={color} />
				<path
					d='M10.8134 15.2478C10.5894 15.2478 10.3654 15.1628 10.1944 14.9918L7.82144 12.6188C7.47944 12.2768 7.47944 11.7228 7.82144 11.3818C8.16344 11.0398 8.71644 11.0388 9.05844 11.3808L10.8134 13.1358L14.9414 9.00784C15.2834 8.66584 15.8364 8.66584 16.1784 9.00784C16.5204 9.34984 16.5204 9.90384 16.1784 10.2458L11.4324 14.9918C11.2614 15.1628 11.0374 15.2478 10.8134 15.2478Z'
					fill='white'
				/>
			</g>
			<defs>
				<clipPath id={clipId}>
					<rect width='24' height='24' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}
