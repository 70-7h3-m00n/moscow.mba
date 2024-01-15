import stls from './Header.module.sass'
import { useContext } from 'react'
import { HeaderMenu, HeaderTop } from '@/components/header'
import {
	MenuContext,
	OverlayContext,
	ContextStaticProps
} from '@/context/index'
import useAt from '@/hooks/useAt'
import { HeaderProgram } from './widgets/HeaderProgram/HeaderProgram'

const Header = () => {
	const at = useAt()
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
			{at.new ? (
				<>
					<HeaderProgram handleMenu={handleMenu} openMenu={menuIsOpen} />
					{menuIsOpen && (
						<div className={stls.menu}>
							<HeaderMenu programs={programs} handleMenu={handleMenu} />
						</div>
					)}
				</>
			) : (
				<>
					<div>
						<HeaderTop handleMenu={handleMenu} openMenu={menuIsOpen} />
					</div>
					{menuIsOpen && (
						<div className={stls.menu}>
							<HeaderMenu programs={programs} handleMenu={handleMenu} />
						</div>
					)}
				</>
			)}
		</header>
	)
}

export default Header
