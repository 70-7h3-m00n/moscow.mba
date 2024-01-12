import React, { SVGProps } from 'react'

export const IconHeart = ({ ...rest }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='25'
			viewBox='0 0 24 25'
			fill='none'
			{...rest}
		>
			<path
				d='M3.79867 5.27186C6.06343 3.1079 9.73534 3.108 12.0001 6.77432C14.2649 3.1079 17.9368 3.1079 20.2015 5.27186C22.4663 7.45273 22.4663 11.1215 20.2015 13.3024L12.0001 21.2L3.79867 13.3024C1.53391 11.1215 1.53391 7.45273 3.79867 5.27186Z'
				fill='white'
			/>
		</svg>
	)
}
