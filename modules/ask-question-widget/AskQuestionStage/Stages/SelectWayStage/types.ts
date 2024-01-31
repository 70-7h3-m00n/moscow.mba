import { AskQuestionDataType } from 'modules/ask-question-widget/types/AskQuestionData'
import { HTMLAttributes } from 'react'

export type SelectWayStageType = HTMLAttributes<HTMLElement> & {
	props: AskQuestionDataType
}
