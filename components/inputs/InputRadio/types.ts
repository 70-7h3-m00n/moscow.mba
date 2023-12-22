import { TypeFormValues } from '@/components/forms/FormBeta/types'
import { HTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

export type InputrRadioProps = HTMLAttributes<HTMLInputElement> & {
	register: UseFormRegister<TypeFormValues>
}
