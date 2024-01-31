import { WayToContactType } from 'modules/ask-question-widget/AskQuestionStage/types'

export const ACTION = {
	SET_INITIAL_STATE: 'SET_INITIAL_STATE' as const,
	SET_FORM_STAGE: 'SET_FORM_STAGE' as const,
	SET_WAY: 'SET_WAY' as const,
	SET_QUESTION: 'SET_QUESTION' as const,
	SET_HOW_TO_CONTACT: 'SET_HOW_TO_CONTACT' as const,
	SET_METHOD: 'SET_METHOD' as const,
	SET_PHONE: 'SET_PHONE' as const,
	SET_EMAIL: 'SET_EMAIL' as const
}

export type HowToContactType = WayToContactType & {
	formStage: number
	method: 'Написать' | 'Позвонить'
	question: string
	phone: string
	email: string
}

export type HowToContactActionType =
	| { type: typeof ACTION.SET_INITIAL_STATE; payload: HowToContactType }
	| { type: typeof ACTION.SET_FORM_STAGE; payload: number }
	| { type: typeof ACTION.SET_QUESTION; payload: string }
	| { type: typeof ACTION.SET_HOW_TO_CONTACT; payload: WayToContactType }
	| {
			type: typeof ACTION.SET_WAY
			payload:
				| 'Telegram'
				| 'Viber'
				| 'WhatsApp'
				| 'Позвонить'
				| 'Электронная почта'
	  }
	| { type: typeof ACTION.SET_METHOD; payload: 'Написать' | 'Позвонить' }
	| { type: typeof ACTION.SET_PHONE; payload: string }
	| { type: typeof ACTION.SET_EMAIL; payload: string }

export const HowToContactReducer = (
	state: HowToContactType,
	action: HowToContactActionType
) => {
	switch (action.type) {
		case ACTION.SET_FORM_STAGE:
			return { ...state, formStage: action.payload }

		case ACTION.SET_QUESTION:
			return { ...state, question: action.payload }

		case ACTION.SET_HOW_TO_CONTACT:
			return { ...state, ...action.payload }

		case ACTION.SET_WAY:
			return { ...state, way: action.payload }

		case ACTION.SET_METHOD:
			return { ...state, method: action.payload }

		case ACTION.SET_PHONE:
			return { ...state, phone: action.payload }

		case ACTION.SET_EMAIL:
			return { ...state, email: action.payload }

		default:
			return state
	}
}
