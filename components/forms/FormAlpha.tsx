import stls from '@/styles/components/forms/FormAlpha.module.sass'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import { useForm } from 'react-hook-form'
import { useAt } from '@/hooks/index'
import {
	onSubmitForm,
	getClassNames,
	openedMainForm,
	filledUpFormWithoutSubmission
} from '@/helpers/index'
import {
	InputEmail,
	InputName,
	InputPhone,
	InputPromo,
	InputSubmit
} from '@/components/inputs'
import routesFront from '@/config/routesFront'

type TypeFormValues = {
	name: string
	phone: string
	email: string
}

const FormAlpha = ({
	programTitle,
	setOpenLoader,
	setOpen,
	policyPrivacy = true,
	alpha = false,
	width = '25',
	classNames = [],
	globalStyle = true,
	formName = null
}) => {
	const container = getClassNames({ classNames })
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<TypeFormValues>()

	const { asPath } = useRouter()

	const [submitIsDisabled, setSubmitIsDisabled] = useState(false)

	const at = useAt()

	const popUpForm = !!setOpenLoader && !!setOpen

	// useEffect(() => {
	//   if (popUpForm) {
	//     openedMainForm({ url: `${routesFront.root}${asPath}` })
	//   }
	// }, [popUpForm])

	return (
		<form
			method='post'
			className='simple-form'
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
			})}>
			<div
				className={cn(container, {
					'inputs-flex': globalStyle,
					'inputs-flex--alt': alpha
				})}>
				<InputName register={register} errors={errors} width={width} />
				<InputPhone register={register} errors={errors} width={width} />
				<InputEmail register={register} errors={errors} width={width} />
				{/* <InputPromo register={register} errors={errors} width={width} /> */}
				<InputSubmit errors={errors} alpha={alpha} width={width} />
			</div>
			{policyPrivacy && (
				<div
					className={cn({
						'personal-data': globalStyle
					})}>
					{/* TODO: should be a link here to privacy policy */}
					{at.en
						? 'By pressing submit button, you agree to'
						: 'Нажимая на кнопку, Вы даете согласие на обработку своих'}{' '}
					<a
						href='/legaldocuments/NDA.pdf'
						target={'_blank'}
						rel='noreferrer noopener'>
						{at.en ? 'Privacy Policy' : 'персональных данных'}
					</a>
				</div>
			)}
		</form>
	)
}

export default FormAlpha
