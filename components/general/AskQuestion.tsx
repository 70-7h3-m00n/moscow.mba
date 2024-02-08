import stls from '@/styles/components/general/AskQuestion.module.sass'
import { IconMessage } from '@/components/icons'
import { IconScrollTop } from '../icons/IconScrollTop/IconScrollTop'
import { BtnScrollTop } from '../btns/BtnScrollTop/BtnScrollTop'

const AskQuestion = ({ handleClickedAskQuestion, stickyShown = false }) => {
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
				<BtnScrollTop />
			</div>
		</div>
	)
}

export default AskQuestion
