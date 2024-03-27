import stls from './HeaderMain.module.sass'
import cn from 'classnames'
import { HeaderMainProps } from './types'

import Wrapper from '@/components/layout/Wrapper'
import { HeaderTopAlt } from '@/components/header/HeaderTopAlt/HeaderTopAlt'
import { HeaderBottomAlt } from '@/components/header/HeadeBottomAlt/HeaderBottomAlt'

export const HeaderMain = ({
	className,
	handleMenu,
	openMenu
}: HeaderMainProps) => {
	return (
		<div className={cn(className, stls.content)}>
			<Wrapper classNames={[stls.wrapper]}>
				<HeaderTopAlt
					className={stls.headerTopAlt}
					handleMenu={handleMenu}
					openMenu={openMenu}
				/>
				<HeaderBottomAlt className={stls.headerBottomAlt} />
			</Wrapper>
		</div>
	)
}
