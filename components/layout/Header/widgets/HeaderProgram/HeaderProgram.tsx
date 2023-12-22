import stls from './HeaderProgram.module.sass'
import cn from 'classnames'
import { HeaderProgramProps } from './types'

import { useState } from 'react'
import Link from 'next/link'
import { IconLogo, IconLogoTitle } from '@/components/icons'
import companyName from '@/config/companyName'
import routesFront from '@/config/routesFront'
import useAt from '@/hooks/useAt'
import { menuData } from './constants'
import { PopupHeader } from '@/components/popups'

export const HeaderProgram = ({ className }: HeaderProgramProps) => {
	const at = useAt()
	const [activeIdx, setActiveIdx] = useState(null)

	return (
		<div className={cn(className, stls.content)}>
			<Link
				className={stls.logo}
				aria-label={companyName}
				href={routesFront.home}
			>
				<IconLogo className={stls.logo__icon} />
				<IconLogoTitle className={stls.logo__name} />
			</Link>
			<div className={cn(stls.nav)} onMouseLeave={() => setActiveIdx(null)}>
				{menuData.map((item, idx) => (
					<div
						className={stls.nav__item}
						onMouseEnter={() => setActiveIdx(idx)}
						key={item}
					>
						<div
							className={cn(stls.underline, {
								[stls.active]: activeIdx === idx
							})}
						/>
						{item}
					</div>
				))}
			</div>
			<PopupHeader />
		</div>
	)
}
