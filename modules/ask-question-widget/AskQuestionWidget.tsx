import stls from './AskQuestionWidget.module.sass'
import cn from 'classnames'

import AskQuestionStage from './AskQuestionStage/AskQuestionStage'
import { IconClose, IconCloseAlt } from '@/components/icons'
import { HowToContactProvider } from './fractals/context/HowToContactProvider'

const AskQuestionWidget = ({ handleAskQuestionFormClose }) => {
	return (
		<HowToContactProvider>
			<div className={cn(stls.container)}>
				<button className={stls.crossTop} onClick={handleAskQuestionFormClose}>
					<IconCloseAlt fill='#fff' crossColor='#ff3535' />
				</button>
				<AskQuestionStage />
			</div>
		</HowToContactProvider>
	)
}

export default AskQuestionWidget
