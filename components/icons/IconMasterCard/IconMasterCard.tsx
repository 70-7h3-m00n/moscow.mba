import { SVGProps } from 'react'

export const IconMasterCardAlt = ({
	className,
	...rest
}: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			// height='618'
			// width='1000'
			{...rest}
		>
			<path fill='#EB001B' d='m308,0a309,309 0 1,0 2,0z' />
			<path fill='#F79E1B' d='m690,0a309,309 0 1,0 2,0z' />
			<path
				fill='#FF5F00'
				d='m500,66a309,309 0 0,0 0,486 309,309 0 0,0 0-486'
			/>
		</svg>
	)
}
