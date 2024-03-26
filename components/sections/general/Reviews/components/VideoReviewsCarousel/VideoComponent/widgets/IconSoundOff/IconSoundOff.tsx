import cn from 'classnames'
import { SVGProps } from 'react'

export const IconSoundOff = ({
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
			<g clipPath='url(#clip0_648_4289)'>
				<path
					d='M7.98192 13.368L2.9838 10.2657C1.30331 9.22265 1.30331 6.77735 2.9838 5.73429L4.68101 4.68085L9.00016 9V12.8016C9.00016 13.3243 8.42603 13.6436 7.98192 13.368Z'
					stroke='#979BA0'
				/>
				<path
					d='M7.98192 2.63201L6.73775 3.40426L9.00016 5.66667V3.19844C9.00016 2.67574 8.42602 2.35636 7.98192 2.63201Z'
					stroke='#979BA0'
				/>
				<path
					d='M7.98192 13.3678L2.9838 10.2655C1.30331 9.22246 1.30331 6.77717 2.9838 5.73411L4.68101 4.68066L9.00016 8.99981V12.8014C9.00016 13.3241 8.42603 13.6435 7.98192 13.3678Z'
					fill='#979BA0'
				/>
				<path
					d='M1.3335 1.33301L14.6668 14.6663'
					stroke='#979BA0'
					strokeLinecap='round'
				/>
				<path
					d='M7.98196 2.63201L6.73779 3.40426L9.0002 5.66667V3.19844C9.0002 2.67574 8.42606 2.35636 7.98196 2.63201Z'
					fill='#979BA0'
				/>
			</g>
			<defs>
				<clipPath id='clip0_648_4289'>
					<rect width='16' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}
