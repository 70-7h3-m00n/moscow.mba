import cn from 'classnames'
import { SVGProps } from 'react'

export const IconSoundOn = ({
	className,
	...rest
}: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			{...rest}
		>
			<path
				d='M11.3335 4C12.0002 4 14.6668 5.11268 14.6668 8.05634C14.6668 11 12.0002 12 11.3335 12'
				stroke='black'
			/>
			<path
				d='M13.0002 8.00033C13.0002 6.33366 11.3335 5.66699 11.3335 5.66699V10.3337C11.3335 10.3337 13.0002 9.66699 13.0002 8.00033Z'
				fill='black'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M9.83313 2.53572C9.83313 1.61938 8.82519 1.06073 8.04813 1.54639L2.01959 5.31423C0.0351377 6.55451 0.0351377 9.4446 2.01959 10.6849L8.04813 14.4527C8.82518 14.9384 9.83313 14.3797 9.83313 13.4634V2.53572Z'
				fill='black'
			/>
		</svg>
	)
}
