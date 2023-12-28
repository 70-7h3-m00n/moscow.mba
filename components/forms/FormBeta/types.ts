import { Dispatch, HTMLAttributes, SetStateAction } from 'react'

export type FormBetaProps = HTMLAttributes<HTMLFormElement> & {
	programTitle: string
	setOpenLoader: Dispatch<SetStateAction<boolean>>
	setOpen: Dispatch<SetStateAction<boolean>>
	policyPrivacy: boolean
	formName: string
	variant: 'alpha' | 'beta' | 'gamma' | 'delta'
}

export type TypeFormValues = {
	name: string
	phone: string
	email: string
	promo?: string
	radio?: string
}
