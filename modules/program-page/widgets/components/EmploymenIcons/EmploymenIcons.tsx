import stls from './EmploymenIcons.module.sass'
import cn from 'classnames'
import { EmploymenIconsProps } from './types'

import Image from 'next/image'
import { IconSwitch } from '../icons/IconSwitch/IconSwitch'
import { IconLine } from '../icons/IconLine/IconLine'

export const EmploymenIcons = ({ className }: EmploymenIconsProps) => {
	return (
		<div className={stls.content}>
			<div className={cn(stls.iconWrapper, stls.content__left)}>
				<IconSwitch className={stls.icon} />
			</div>
			<div className={cn(stls.content__photo)}>
				<Image
					src={'/assets/images/program/employment-photo-2.jpg'}
					alt='Карьерный коуч'
					width={200}
					height={200}
				/>
			</div>
			<div className={cn(stls.iconWrapper, stls.content__right)}>
				<IconLine className={stls.icon} />
			</div>
		</div>
	)
}
