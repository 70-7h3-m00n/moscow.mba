import stls from './HeaderProgram.module.sass'
import cn from 'classnames'
import { HeaderProgramProps } from './types'

import { useContext, useState } from 'react'
import Link from 'next/link'
import { IconLogo, IconLogoTitle } from '@/components/icons'
import companyName from '@/config/companyName'
import routesFront from '@/config/routesFront'
import { PopupHeader } from '@/components/popups'
import Wrapper from '@/components/layout/Wrapper'
import { ContextStaticProps } from '@/context/index'

export const HeaderProgram = ({
	className,
	handleMenu,
	openMenu
}: HeaderProgramProps) => {
	const [activeIdx, setActiveIdx] = useState(null)
	const { program } = useContext(ContextStaticProps)

	const menuData = [
		{ title: 'Как проходит обучение', src: '#process' },
		{ title: 'Программа', src: '#program-modules' },
		{ title: 'Стоимость', src: '#study-cost' },
		{ title: 'Преподаватели', src: '#experts' },
		{ title: 'Отзывы', src: '#reviews' },
		...(program?.employment === false
			? []
			: [{ title: 'Трудоустройство', src: '#employment' }])
	]

	return (
		<div className={cn(className, stls.content)}>
			<Wrapper classNames={[stls.wrapper]}>
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
				<div className={stls.right}>
					<PopupHeader className={stls.popupHeader} />
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
				</div>
			</Wrapper>
		</div>
	)
}
