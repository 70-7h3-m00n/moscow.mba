import cn from 'classnames'
import { IconCloseAltProps } from './types'

export const IconCloseAlt = ({
	className,
	fill = '#979BA0',
	crossColor = '#fff',
	style = {},
	...rest
}: IconCloseAltProps) => {
	return (
		<svg
			className={cn(className)}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			{...rest}
		>
			<g clipPath='url(#clip0_1080_4146)'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M3.4848 3.48493C-1.20123 8.17095 -1.20123 15.7685 3.4848 20.4545C8.17082 25.1405 15.7684 25.1405 20.4544 20.4545C25.1404 15.7685 25.1404 8.17095 20.4544 3.48493C15.7684 -1.20109 8.17082 -1.20109 3.4848 3.48493Z'
					fill={fill}
				/>
				<path
					d='M9.14136 9.1406L14.7982 14.7975'
					stroke={crossColor}
					strokeWidth='1.5'
					strokeLinecap='round'
				/>
				<path
					d='M14.7983 9.1406L9.14149 14.7975'
					stroke={crossColor}
					strokeWidth='1.5'
					strokeLinecap='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1080_4146'>
					<rect width='24' height='24' fill={crossColor} />
				</clipPath>
			</defs>
		</svg>
	)
}
