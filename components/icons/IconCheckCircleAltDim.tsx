import stls from '@/styles/components/icons/IconCheckCircleAltDim.module.sass'
import cn from 'classnames'

import { TypeClassNames, TypeColor } from '@/types/index'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'
import { HTMLAttributes } from 'react'

// TODO: improve structure
const IconCheckCircleAltDim = ({
	className
}: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={cn(className, stls.container)}>
			<svg viewBox='0 0 57 57' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M15.4717 31.7571L21.986 38.2714L41.5288 18.7285'
					stroke='white'
					strokeWidth='2'
				/>
				<rect
					x='1'
					y='1'
					width='55'
					height='55'
					rx='27.5'
					stroke='white'
					strokeOpacity='0.2'
					strokeWidth='2'
				/>
			</svg>
		</div>
	)
}

export default IconCheckCircleAltDim
