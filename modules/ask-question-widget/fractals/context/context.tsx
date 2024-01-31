import React, { createContext, useContext } from 'react'
import { HowToContactActionType, HowToContactType } from './reducer'

type HowToContactContextType = {
	state: HowToContactType
	dispatch: React.Dispatch<HowToContactActionType>
}
export type HowToContactProviderProps = {
	children: React.ReactNode
}

export const HowToContactInitialState: HowToContactType = {
	formStage: 0,
	way: null,
	method: null,
	contactMethods: [],
	question: '',
	validationRules: null,
	url: null,
	phone: null,
	email: null
}

export const HowToContactContext = createContext<
	HowToContactContextType | undefined
>(undefined)

export const useHowToContact = (): HowToContactContextType => {
	const context = useContext(HowToContactContext)
	if (context === undefined) {
		throw new Error(
			'useHowToContactDispatch must be used within a HowToContactProvider'
		)
	}
	return context
}
