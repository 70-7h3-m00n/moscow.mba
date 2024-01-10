import cn from 'classnames'
import { SVGProps } from 'react'

export const IconTriangle = ({
	className,
	...rest
}: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={cn(className)}
			xmlns='http://www.w3.org/2000/svg'
			width='17'
			height='14'
			viewBox='0 0 17 14'
			fill='none'
			{...rest}
		>
			<path
				d='M6.71115 12.4223L0.5 0L16.5 0L10.2889 12.4223C9.55181 13.8964 7.44819 13.8964 6.71115 12.4223Z'
				fill='#18191A'
			/>
		</svg>
	)
}
