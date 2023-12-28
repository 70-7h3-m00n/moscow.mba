import stls from '@/styles/components/icons/IconInfoFRDO.module.sass'
import cn from 'classnames'
import { HTMLAttributes } from 'react'

import { TypeClassNames, TypeColor } from '@/types/index'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

// TODO: improve structure
const IconInfoFRDO = ({
	className,
	color = 'white',
	...rest
}: HTMLAttributes<HTMLDivElement> & { color?: string }) => {
	return (
		<div className={cn(className, stls.container)} {...rest}>
			<svg
				width='15'
				height='15'
				viewBox='0 0 15 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle cx='7.5' cy='7.5' r='7' stroke={color} />
				<path
					d='M6.83496 5.79734V4.27734H8.16496V5.79734H6.83496ZM6.86496 11.6673V7.50195H8.14496V11.6673H6.86496Z'
					fill={color}
				/>
			</svg>
		</div>
	)
}

export default IconInfoFRDO
