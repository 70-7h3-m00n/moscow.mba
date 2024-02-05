import cn from 'classnames'

import { useContext } from 'react'
import { OverlayContext, MenuContext } from '@/context/index'
// import { Unbounded } from 'next/font/google'

// const unbounded = Unbounded({ weight: '400', subsets: ['latin', 'cyrillic'] })

const Main = ({ children }) => {
	const {
		overlayIsShown,
		showOverlay,
		hideOverlay,
		toggleOverlay
	} = useContext(OverlayContext)

	const { menuIsOpen, openMenu, closeMenu, toggleMenu } = useContext(
		MenuContext
	)

	const handleOnClick = () => {
		closeMenu()
		hideOverlay()
	}
	return (
		<main
			className={cn({
				'main-content': true,
				'show-overlay': overlayIsShown
			})}
			onClick={handleOnClick}
		>
			{children}
		</main>
	)
}

export default Main
