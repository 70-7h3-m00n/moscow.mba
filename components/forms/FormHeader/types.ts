import { Dispatch, HTMLAttributes, SetStateAction } from 'react'

export type FormHeaderProps = HTMLAttributes<HTMLFormElement> & {
	programTitle: string
	setOpenLoader: Dispatch<SetStateAction<boolean>>
	setOpen: Dispatch<SetStateAction<boolean>>
	formName: string
	next: () => void
}

export type TypeFormValues = {
	name: string
	phone: string
	email: string
	promo?: string
	radio?: string
}
