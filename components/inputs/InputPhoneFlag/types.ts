import { TypeFormValues } from '@/components/forms/FormBeta/types'
import { HTMLAttributes } from 'react'
import { Control, FieldErrors, UseFormRegister } from 'react-hook-form'

export type InputPhoneProps = HTMLAttributes<HTMLInputElement> & {
	register: UseFormRegister<TypeFormValues>
	errors: FieldErrors<TypeFormValues>
	variant?: 'alpha' | 'beta' | 'gamma' | 'delta'
	control?: Control<TypeFormValues, any>
}