import { HTMLAttributes } from 'react'
import { AskQuestionDataType } from '../types/AskQuestionData'

export type AskQuestionStageProps = HTMLAttributes<HTMLElement> & {
	props: AskQuestionDataType
}

export type WayToContactType = {
	way: 'Telegram' | 'Viber' | 'WhatsApp' | 'Позвонить' | 'Электронная почта'
	url: string
	contactMethods: {
		name: 'Позвонить' | 'Написать'
		icon: string
	}[]

	validationRules: {
		shouldBeValidated: boolean
		validationType: string
	}
}
