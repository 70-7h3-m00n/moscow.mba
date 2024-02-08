import stls from './Partnership.module.sass'
import cn from 'classnames'
import { PartnershipProps } from './types'

import Image from 'next/image'

export const Partnership = ({
	className,
	mobile = false,
	program,
	...rest
}: PartnershipProps) => {
	return (
		<div
			className={cn(className, stls.content, { [stls.mobile]: !mobile })}
			{...rest}
		>
			<Image
				src={program?.partnership?.url}
				width={40}
				height={40}
				alt={'Партнёр'}
			/>
			<p>{program?.partnership?.string}</p>
		</div>
	)
}
