import cn from 'classnames'
import { SVGProps } from 'react'

export const CheckIcon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={cn(className)}
			xmlns='http://www.w3.org/2000/svg'
			width='14'
			height='12'
			viewBox='0 0 12 12'
			fill='none'
			{...rest}
		>
			<g clipPath='url(#clip0_1130_5794)'>
				<circle cx='6' cy='6' r='6' fill='#25BB18' />
				<path
					d='M5.40648 7.62398C5.29448 7.62398 5.18248 7.58148 5.09698 7.49598L3.91048 6.30948C3.73948 6.13848 3.73948 5.86148 3.91048 5.69098C4.08148 5.51998 4.35798 5.51948 4.52898 5.69048L5.40648 6.56798L7.47048 4.50398C7.64148 4.33298 7.91798 4.33298 8.08898 4.50398C8.25998 4.67498 8.25998 4.95198 8.08898 5.12298L5.71598 7.49598C5.63048 7.58148 5.51848 7.62398 5.40648 7.62398Z'
					fill='white'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1130_5794'>
					<rect width='12' height='12' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}
