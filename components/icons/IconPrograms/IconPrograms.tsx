import cn from 'classnames'
import { SVGProps } from 'react'

export const IconPrograms = ({
	className,
	...rest
}: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			{...rest}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M3 5.75C3 6.16421 3.33579 6.5 3.75 6.5L20.25 6.5C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5H3.75C3.33579 5 3 5.33579 3 5.75ZM3 14.75C3 15.1642 3.33579 15.5 3.75 15.5H20.25C20.6642 15.5 21 15.1642 21 14.75C21 14.3358 20.6642 14 20.25 14H3.75C3.33579 14 3 14.3358 3 14.75ZM3.75 11C3.33579 11 3 10.6642 3 10.25C3 9.83579 3.33579 9.5 3.75 9.5L15.25 9.5C15.6642 9.5 16 9.83579 16 10.25C16 10.6642 15.6642 11 15.25 11L3.75 11ZM3 19.25C3 19.6642 3.33579 20 3.75 20L11.25 20C11.6642 20 12 19.6642 12 19.25C12 18.8358 11.6642 18.5 11.25 18.5L3.75 18.5C3.33579 18.5 3 18.8358 3 19.25Z'
				fill='#FF3535'
			/>
		</svg>
	)
}
