import stls from './SectionSeminarPriceCalculatorForm.module.sass'
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
	InputName,
	InputPhone,
	InputPromo,
	InputSubmit
} from '../../../../components'
import routesFront from '@/config/routesFront'

type TypeFormValues = {
	name: string
	phone: string
	email: string
	promo?: string
}

const SectionSeminarPriceCalculatorForm = ({
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
				<InputPromo register={register} errors={errors} width={width} />
				<InputSubmit errors={errors} alpha={true} width={width} />
			</div>
		</form>
	)
}

export default SectionSeminarPriceCalculatorForm
