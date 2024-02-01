import stls from '@/styles/components/general/AskQuestion.module.sass'
import { IconMessage } from '@/components/icons'
import { IconScrollTop } from '../icons/IconScrollTop/IconScrollTop'

const AskQuestion = ({ handleClickedAskQuestion, stickyShown = false }) => {
	const isBrowser = () => typeof window !== 'undefined'

	const scrollToTop = () => {
		if (!isBrowser()) return
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div
			className={`${stls.container} ${
				stickyShown ? stls.stickyShown : stls.stickyHidden
			}`}
		>
			<div className={stls.wrapper}>
				<div className={stls.messages} onClick={handleClickedAskQuestion}>
					<IconMessage />
				</div>
				<div className={stls.scroll} onClick={scrollToTop}>
					<IconScrollTop />
				</div>
			</div>
		</div>
	)
}

export default AskQuestion
