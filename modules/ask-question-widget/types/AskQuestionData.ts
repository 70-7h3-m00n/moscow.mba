import { Dispatch, SetStateAction } from 'react'

export type AskQuestionDataType = {
	wayToContact: any
	handleUserClick: any
	handleUserGoingBack: any
	userQuestion: any
	setUserQuestion: Dispatch<any>
	isContactDataInputTouched: boolean
	setIsContactDataInputTouched: Dispatch<SetStateAction<boolean>>
	inputPlaceholderText: string
	setInputPlaceholderText: Dispatch<SetStateAction<string>>
	leadPage
	programTitle: any
}
