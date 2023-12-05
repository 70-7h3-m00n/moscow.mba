import { SVGProps } from 'react'

export const IconLine = ({ ...rest }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='48'
			height='48'
			viewBox='0 0 48 48'
			fill='none'
			{...rest}
		>
			<path
				d='M4.19995 26.9951C4.19995 19.1953 5.99995 8.99512 13.8 8.99512C20.4 8.99512 21.5988 16.7986 24 23.9953C26.4011 31.192 27.6 38.9955 34.2 38.9955C42 38.9955 43.8 28.7954 43.8 20.9956'
				stroke='#18191A'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
