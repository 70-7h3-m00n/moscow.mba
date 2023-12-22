import stls from './FormHeader.module.sass'
import cn from 'classnames'
import { FormHeaderProps, TypeFormValues } from './types'

import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { onSubmitForm } from '@/helpers/index'

import {
	InputName,
	InputPhone,
	InputEmail,
	InputPromo,
	InputSubmit
} from '@/components/inputs'

export const FormHeader = ({
	className,
	programTitle,
	setOpenLoader,
	setOpen,
	formName = null
}: FormHeaderProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<TypeFormValues>()

	const { asPath } = useRouter()

	const [submitIsDisabled, setSubmitIsDisabled] = useState(false)

	return (
		<form
			className={cn(className, stls.formBeta)}
			method='post'
			onChange={() => window.sessionStorage.setItem('formFilled', 'true')} // this is a goal for a marketing campaign also used in /pages/_app.tsx
			onSubmit={handleSubmit(values => {
				if (!submitIsDisabled) {
					setSubmitIsDisabled(true)
					setTimeout(() => {
						setSubmitIsDisabled(false)
					}, 5000)

					window.sessionStorage.setItem('formFilled', 'false')
					return onSubmitForm({
						values,
						programTitle,
						setOpenLoader,
						asPath,
						setOpen,
						formName,
						reset
					})
				}
			})}
			// noValidate
		>
			<div className={stls.container}>
				<InputName register={register} errors={errors} />
				<InputPhone register={register} errors={errors} />
				<InputEmail register={register} errors={errors} />

				<InputSubmit
					className={stls.inputSubmit}
					errors={errors}
					variant='alpha'
				/>
			</div>
		</form>
	)
}
