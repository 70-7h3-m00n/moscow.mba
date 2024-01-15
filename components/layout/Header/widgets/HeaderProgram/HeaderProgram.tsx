import stls from './HeaderProgram.module.sass'
import cn from 'classnames'
import { HeaderProgramProps } from './types'

import { useContext, useState } from 'react'
import Link from 'next/link'
import { IconLogo, IconLogoTitle } from '@/components/icons'
import companyName from '@/config/companyName'
import routesFront from '@/config/routesFront'
import { menuData } from './constants'
import { PopupHeader } from '@/components/popups'
import Wrapper from '@/components/layout/Wrapper'

export const HeaderProgram = ({
	className,
	handleMenu,
	openMenu
}: HeaderProgramProps) => {
	const [activeIdx, setActiveIdx] = useState(null)

	return (
		<div className={cn(className, stls.content)}>
			<Wrapper>
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
							key={item.title}
						>
							<div
								className={cn(stls.underline, {
									[stls.active]: activeIdx === idx
								})}
							/>
							<a href={item.src}>{item.title}</a>
						</div>
					))}
				</div>
				<PopupHeader />
				<div
					className={cn(stls.burger, {
						[stls.opened]: openMenu
					})}
					onClick={() => handleMenu(!openMenu)}
				>
					<i className={stls.line} />
					<i className={stls.line} />
					<i className={stls.line} />
				</div>
			</Wrapper>
		</div>
	)
}
