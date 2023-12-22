import stls from './FormBeta.module.sass'
import cn from 'classnames'
import { FormBetaProps, TypeFormValues } from './types'

import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { onSubmitForm } from '@/helpers/index'

import {
	InputNameNew,
	InputPhoneNew,
	InputEmailNew,
	InputPromoNew,
	InputSubmitNew,
	InputRadioNew
} from '@/components/inputs'

export const FormBeta = ({
	programTitle,
	setOpenLoader,
	setOpen,
	policyPrivacy = true,
	formName = null,
	variant = 'light'
}: FormBetaProps) => {
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
			method='post'
			className={stls.formBeta}
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
				<InputNameNew
					className={stls.inputName}
					register={register}
					errors={errors}
				/>
				<InputPhoneNew register={register} errors={errors} />
				<InputEmailNew register={register} errors={errors} />
				<InputPromoNew
					className={stls.inputPromo}
					register={register}
					errors={errors}
				/>
				<InputRadioNew className={stls.inputRadio} register={register} />
				<InputSubmitNew
					className={stls.inputSubmit}
					errors={errors}
					variant='alpha'
				/>
			</div>
			{policyPrivacy && (
				<div className={stls.privacyPolicy}>
					Отправляя заявку, Вы соглашаетесь с политикой конфиденциальности и
					условиями обработки{' '}
					<a
						href='/legaldocuments/NDA.pdf'
						target='_blank'
						rel='noreferrer noopener'
					>
						персональных данных
					</a>
				</div>
			)}
		</form>
	)
}
