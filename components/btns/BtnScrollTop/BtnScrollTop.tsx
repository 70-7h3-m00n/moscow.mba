import stls from './BtnScrollTop.module.sass'
import { IconScrollTop } from '@/components/icons/IconScrollTop/IconScrollTop'

export const BtnScrollTop = () => {
	const isBrowser = () => typeof window !== 'undefined'

	const scrollToTop = () => {
		if (!isBrowser()) return
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div className={stls.scroll} onClick={scrollToTop}>
			<IconScrollTop />
		</div>
	)
}
