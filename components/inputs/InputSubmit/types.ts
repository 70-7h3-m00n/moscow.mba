import { TypeFormValues } from '@/components/forms/FormBeta/types'
import { HTMLAttributes, ReactNode } from 'react'
import { FieldErrors } from 'react-hook-form'

export type InputSubmitProps = HTMLAttributes<HTMLButtonElement> & {
	errors: FieldErrors<TypeFormValues>
	variant?: 'alpha' | 'beta'
	children: ReactNode
}
