import cn from 'classnames'
import { SVGProps } from 'react'

export const IconPlus = ({
	className,
	active = false,
	...rest
}: SVGProps<SVGSVGElement> & { active?: boolean }) => {
	return (
		<svg
			className={cn(className)}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill={active ? '#FF3535' : '#000'}
			{...rest}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M11.9993 0.000976562C5.37228 0.000976562 0 5.37325 0 12.0003C0 18.6273 5.37228 23.9996 11.9993 23.9996C18.6264 23.9996 23.9986 18.6273 23.9986 12.0003C23.9986 5.37325 18.6264 0.000976562 11.9993 0.000976562Z'
			/>
			<path
				d='M12 8V16'
				stroke='white'
				strokeWidth='1.5'
				strokeLinecap='round'
			/>
			<path
				d='M16 12L8 12'
				stroke='white'
				strokeWidth='1.5'
				strokeLinecap='round'
			/>
		</svg>
	)
}
