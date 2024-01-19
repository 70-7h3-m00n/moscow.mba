import stls from '@/styles/components/icons/IconInfoFRDO.module.sass'
import cn from 'classnames'
import { SVGProps } from 'react'

export const IconInfo = ({
	className,
	opened,
	...rest
}: SVGProps<SVGSVGElement> & { opened?: boolean }) => {
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
			<path
				d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
				fill={opened ? '#FF3535' : '#DEE2E5'}
				style={{ transition: 'fill 0.3s ease-in-out' }}
			/>
			<path
				d='M12 16V12'
				stroke='white'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 8H12.01'
				stroke='white'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
