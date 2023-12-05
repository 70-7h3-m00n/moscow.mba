import stls from './GridIcons.module.sass'
import cn from 'classnames'
import { GridIconsProps } from './types'

import { IconGitBranch } from '../icons/IconGitBranch/IconGitBranch'
import { IconArrow } from '../icons/IconArrow/IconArrow'
import { IconBox } from '../icons/IconBox/IconBox'
import { IconGraphic } from '../icons/IconGraphic/IconGraphic'

export const GridIcons = ({ variant }: GridIconsProps) => {
	return (
		<div className={stls.content}>
			<div className={cn(stls.iconWrapper, stls.content__gitBranch)}>
				<IconGitBranch />
			</div>
			<div className={cn(stls.iconWrapper, stls.content__arrow)}>
				{variant === 'alpha' && <IconArrow />}
				{variant === 'beta' && <IconGraphic />}
			</div>
			<div className={cn(stls.iconWrapper, stls.content__box)}>
				<IconBox />
			</div>
		</div>
	)
}
