import { TypeFormValues } from '@/components/forms/FormBeta/types'
import { HTMLAttributes } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

export type InputEmailProps = HTMLAttributes<HTMLInputElement> & {
	register: UseFormRegister<TypeFormValues>
	errors: FieldErrors<TypeFormValues>
	isRequired?: boolean
	variant?: 'alpha' | 'beta' | 'gamma' | 'delta'
}
