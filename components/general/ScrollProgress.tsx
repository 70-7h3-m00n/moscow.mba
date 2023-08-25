import stls from '@/styles/components/general/ScrollProgress.module.sass'
import { useEffect, useState } from 'react'

const ScrollProgress = () => {
	const [pageYOffset, setPageYOffset] = useState(0)
	const [scollHeight, setScrollHeight] = useState(0)
	const [clientHeight, setClientHeight] = useState(0)

	// ! bug with too many rerenders on scroll, has to be fixed
	const handleScroll = () => {
		setPageYOffset(window.pageYOffset)
		setScrollHeight(document.body.scrollHeight)
		setClientHeight(
			window.innerHeight ||
				document.documentElement.clientHeight ||
				document.body.clientHeight
		)
	}

	useEffect(() => {
		document.addEventListener('scroll', handleScroll)
		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className={stls.scrollProgress}>
			<div
				className={stls.scrollProgressBar}
				style={{
					transform: `translateX(-${
						100 - pageYOffset / ((scollHeight - clientHeight) / 100)
					}%)`
				}}></div>
		</div>
	)
}

export default ScrollProgress
