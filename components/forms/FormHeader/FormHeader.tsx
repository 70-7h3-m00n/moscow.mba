import stls from './FormHeader.module.sass'
import cn from 'classnames'
import { FormHeaderProps, TypeFormValues } from './types'

import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { onSubmitForm } from '@/helpers/index'

import {
	InputName,
	InputNameNew,
	InputPhone,
	InputPhoneNew,
	InputSubmit,
	InputSubmitNew
} from '@/components/inputs'
import { InputPhoneFlag } from '@/components/inputs/InputPhoneFlag/InputPhoneFlag'

export const FormHeader = ({
	className,
	programTitle,
	setOpenLoader,
	setOpen,
	formName = null,
	next
}: FormHeaderProps) => {
	const {
		register,
		handleSubmit,
		reset,
		control,
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

					next()

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
				<InputNameNew register={register} errors={errors} variant='gamma' />
				{/* <InputPhoneNew register={register} errors={errors} variant='gamma' /> */}
				<InputPhoneFlag
					register={register}
					errors={errors}
					control={control}
					variant='gamma'
				/>
				<InputSubmitNew
					className={stls.inputSubmit}
					errors={errors}
					variant='beta'
				>
					Жду звонка
				</InputSubmitNew>
			</div>
		</form>
	)
}
