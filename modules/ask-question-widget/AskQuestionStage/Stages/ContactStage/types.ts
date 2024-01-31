import { AskQuestionDataType } from 'modules/ask-question-widget/types/AskQuestionData'
import { HTMLAttributes } from 'react'

export type ContactStageProps = HTMLAttributes<HTMLFormElement> & {
	props: AskQuestionDataType
}
