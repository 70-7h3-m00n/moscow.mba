import stls from '@/styles/components/header/HeaderMobileTabs.module.sass'
import Link from 'next/link'
import { useAt } from '@/hooks/index'
import cn from 'classnames'
import React, { useState } from 'react'
import { IconLocation } from '@/components/icons'
import contactData from '@/config/contactData'
import { ImgLogoRabo, ImgLogoMde } from '@/components/images'
import HeaderPrograms from '@/components/header/HeaderPrograms'
import { Wrapper } from '@/components/layout'

// TODO: whole component should be devided into multiple components. Each component would be a step in mobile menu.
const HeaderMobileTabs = ({
	tabs,
	links,
	handleMouseEnter,
	visible,
	programs,
	handleMenu
}) => {
	const at = useAt()
	const contactInfo = contactData()
	const [openMenu, setOpenMenu] = useState(false)
	const [openProg, setOpenProg] = useState(false)
	const clickHandle = e => {
		handleMouseEnter(e)
		setOpenProg(true)
	}

	return (
		<div className={stls.container}>
			<div className={stls.content}>
				<Wrapper classNames={[stls.wrapper]}>
					<ul className={stls.links}>
						{/* TODO: onClick should be on the button, not on li */}
						<li
							onClick={() => setOpenMenu(true)}
							className={cn(stls.link, stls.bold)}>
							{at.en ? 'Programs' : 'Программы'}
						</li>
						{links.map((item, idx) => (
							<Link legacyBehavior href={item.href} key={item.href + idx}>
								<a
									className={cn(stls.link, {
										[stls.last]: idx === tabs.length
									})}
									onClick={() => handleMenu(false)}>
									{item.val}
								</a>
							</Link>
						))}
					</ul>
					<div>
						<div className={stls.logos}>
							<span className={stls.rabo}>
								<ImgLogoRabo />
							</span>
							<span className={stls.mde}>
								<ImgLogoMde />
							</span>
						</div>
						<div className={stls.address}>
							<IconLocation />
							{contactInfo.ru.address.city}, {contactInfo.ru.address.street}
						</div>
					</div>
				</Wrapper>
			</div>
			<div
				className={cn(stls.content, stls.menuPrograms, {
					[stls.opened]: openMenu
				})}>
				<button className={stls.btn} onClick={() => setOpenMenu(false)}>
					<Wrapper classNames={[stls.wrapperTitle]}>
						<span />
						{at.en ? 'Back' : 'Назад'}
					</Wrapper>
				</button>
				<ul className={cn(stls.menu, stls.programs)}>
					<Wrapper classNames={[stls.wrapper]}>
						<p className={stls.title}>{at.en ? 'Programs' : 'Программы'}</p>
						{tabs.map((item, idx) => {
							if (idx + 1 === tabs.length) {
								return (
									<Link legacyBehavior href={item.href} key={item.href + idx}>
										<a
											className={cn(stls.link, stls.last)}
											onClick={() => handleMenu(false)}>
											{item.val}
										</a>
									</Link>
								)
							} else {
								return (
									<span
										key={item.href + idx}
										className={stls.link}
										data-tab={`#header-podmenu-${idx + 1}`}
										onClick={e => clickHandle(e)}>
										{item.val}
									</span>
								)
							}
						})}
					</Wrapper>
				</ul>
			</div>
			<div
				className={cn(stls.content, stls.programslist, {
					[stls.opened]: openProg
				})}>
				<button className={stls.btn} onClick={() => setOpenProg(false)}>
					<Wrapper classNames={[stls.wrapperTitle]}>
						<span />
						{at.en ? 'to programs' : 'к программам'}
					</Wrapper>
				</button>
				<Wrapper>
					<HeaderPrograms programs={programs} visible={visible} />
				</Wrapper>
				<button
					className={cn(stls.btn, stls.bottom)}
					onClick={() => setOpenProg(false)}>
					<Wrapper classNames={[stls.wrapperTitle]}>
						<span />
						{at.en ? 'to programs' : 'к программам'}
					</Wrapper>
				</button>
			</div>
		</div>
	)
}

export default HeaderMobileTabs
