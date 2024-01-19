import stls from '@/styles/components/general/AskQuestion.module.sass'
import { IconMessage, IconMessages } from '@/components/icons'
import { IconArrow } from 'modules/program-page/widgets'
import { IconArrowAlt } from 'modules/program-page/widgets/components/icons/IconArrowAlt/IconArrowAlt'

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
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
					>
						<path
							d='M2.66659 10L7.99992 4.66669L13.3333 10'
							stroke='white'
							strokeWidth='1.5'
							strokeLinecap='round'
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default AskQuestion
