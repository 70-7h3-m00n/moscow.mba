import stls from '@/styles/components/layout/Header.module.sass'
import { useContext, useState } from 'react'
import { HeaderMenu, HeaderTop } from '@/components/header'
import {
	MenuContext,
	OverlayContext,
	ContextStaticProps
} from '@/context/index'

const Header = () => {
	const { menuIsOpen, openMenu, closeMenu } = useContext(MenuContext)
	const { hideOverlay, showOverlay } = useContext(OverlayContext)
	const { programs } = useContext(ContextStaticProps)

	const handleMenu = (value: boolean) => {
		if (value) {
			openMenu()
			showOverlay()
		} else {
			closeMenu()
			hideOverlay()
		}
	}

	return (
		<header>
			<div>
				<HeaderTop handleMenu={handleMenu} openMenu={menuIsOpen} />
			</div>
			{menuIsOpen && (
				<div className={stls.menu}>
					<HeaderMenu programs={programs} handleMenu={handleMenu} />
				</div>
			)}
		</header>
	)
}

export default Header
