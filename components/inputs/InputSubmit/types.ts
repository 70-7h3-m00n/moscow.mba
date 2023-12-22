import { TypeFormValues } from '@/components/forms/FormBeta/types'
import { HTMLAttributes } from 'react'
import { FieldErrors } from 'react-hook-form'

export type InputSubmitProps = HTMLAttributes<HTMLButtonElement> & {
	errors: FieldErrors<TypeFormValues>
	variant: string
}
