import { WayToContactType } from 'modules/ask-question-widget/AskQuestionStage/types'
import { HTMLAttributes } from 'react'

export type BtnContactProps = HTMLAttributes<HTMLButtonElement> & {
	way: string
	url: string
	handlerOnClick: () => void
}
