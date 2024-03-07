import cn from 'classnames'
import { SVGProps } from 'react'

export const IconSorting = ({
	className,
	stroke,
	...rest
}: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={cn(className)}
			xmlns='http://www.w3.org/2000/svg'
			width='16'
			height='17'
			viewBox='0 0 16 17'
			fill='none'
			{...rest}
		>
			<path
				d='M13.3327 6.5L7.99935 11.8333L2.66602 6.5'
				stroke={'black'}
				strokeWidth='1.5'
				strokeLinecap='round'
			/>
		</svg>
	)
}
