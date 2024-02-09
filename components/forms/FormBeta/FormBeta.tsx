import stls from './FormBeta.module.sass'
import cn from 'classnames'
import { FormBetaProps, TypeFormValues } from './types'

import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { PAYMENT } from '@/types/payment/paymentTypes'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import useAt from '@/hooks/useAt'
import { PopupGift } from '@/components/popups/PopupGift/PopupGift'
import { ContextStaticProps } from '@/context/index'
import {
	getFullPaymentPrice,
	handlePayment,
	onSubmitForm,
	toNumberWithSpaces
} from '@/helpers/index'
import {
	InputNameNew,
	InputPhoneNew,
	InputEmailNew,
	InputPromoNew,
	InputSubmitNew,
	InputRadioNew
} from '@/components/inputs'
import { CountUntil } from '@/components/costs/Until'
import { InputPhoneFlag } from '@/components/inputs/InputPhoneFlag/InputPhoneFlag'

export const FormBeta = ({
	programTitle,
	setOpenLoader,
	setOpen,
	policyPrivacy = true,
	formName = null,
	variant = 'alpha',
	paymentMethod = null
}: FormBetaProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<TypeFormValues>()

	const at = useAt()
	const { program } = useContext(ContextStaticProps)
	const { asPath } = useRouter()
	const [submitIsDisabled, setSubmitIsDisabled] = useState(false)
	const [noRadio, setNoRadio] = useState<boolean>(false)

	useEffect(() => {
		if (paymentMethod === PAYMENT.FULLPRICE || paymentMethod === PAYMENT.GIFT) {
			setNoRadio(true)
		} else {
			setNoRadio(false)
		}
	}, [paymentMethod])

	const programType = at.profession
		? 'profession'
		: at.course
		? 'course'
		: at.mba
		? 'mba'
		: 'mini'

	const untilDate = CountUntil().toLocaleString([at.en ? 'en-US' : 'ru'], {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})

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

					if (
						paymentMethod === PAYMENT.FULLPRICE ||
						paymentMethod === PAYMENT.GIFT
					) {
						return handlePayment({
							program,
							asPath,
							formName,
							values,
							type: programType
						})
					}

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
					placeholder={
						paymentMethod === PAYMENT.GIFT ? 'Имя получателя' : 'Имя'
					}
					variant={
						variant === 'alpha'
							? 'alpha'
							: variant === 'beta'
							? 'beta'
							: variant === 'gamma'
							? 'alpha'
							: variant === 'delta'
							? 'delta'
							: 'alpha'
					}
				/>
				<InputPhoneNew
					register={register}
					errors={errors}
					variant={
						variant === 'alpha'
							? 'alpha'
							: variant === 'beta'
							? 'beta'
							: variant === 'gamma'
							? 'alpha'
							: variant === 'delta'
							? 'delta'
							: 'alpha'
					}
				/>
				{/* <InputPhoneFlag
					register={register}
					errors={errors}
					variant={
						variant === 'alpha'
							? 'alpha'
							: variant === 'beta'
							? 'beta'
							: variant === 'gamma'
							? 'alpha'
							: variant === 'delta'
							? 'delta'
							: 'alpha'
					}
				/> */}
				<InputEmailNew
					className={stls.inputEmail}
					register={register}
					isRequired
					errors={errors}
					variant={
						variant === 'alpha'
							? 'alpha'
							: variant === 'beta'
							? 'beta'
							: variant === 'gamma'
							? 'alpha'
							: variant === 'delta'
							? 'delta'
							: 'alpha'
					}
				/>
				<InputPromoNew
					className={stls.inputPromo}
					register={register}
					errors={errors}
					variant={
						variant === 'alpha'
							? 'alpha'
							: variant === 'beta'
							? 'beta'
							: variant === 'gamma'
							? 'alpha'
							: variant === 'delta'
							? 'delta'
							: 'alpha'
					}
				/>

				{/* {paymentMethod === PAYMENT.GIFT && (
					<PopupGift
						programTitle={`«${programTitle}»`}
						studentName='Имя получателя'
						untilDate={untilDate}
						programType={
							programType === 'mini'
								? 'Мини MBA'
								: programType === 'mba'
								? 'MBA'
								: programType === 'profession'
								? 'Профессия'
								: 'Курс'
						}
					/>
				)} */}
				{!noRadio && (
					<InputRadioNew
						className={stls.inputRadio}
						register={register}
						variant={
							variant === 'alpha'
								? 'alpha'
								: variant === 'beta'
								? 'beta'
								: variant === 'gamma'
								? 'beta'
								: variant === 'delta'
								? 'gamma'
								: 'alpha'
						}
					/>
				)}
				<InputSubmitNew
					className={stls.inputSubmit}
					errors={errors}
					variant='alpha'
				>
					{paymentMethod === PAYMENT.FULLPRICE
						? 'Оплатить'
						: paymentMethod === PAYMENT.CREDIT
						? 'Оформить'
						: paymentMethod === PAYMENT.GIFT
						? `Оплатить всю сумму с доп. скидкой 5% — ${toNumberWithSpaces(
								getFullPaymentPrice({
									price: +program?.price,
									type: programType
								})
						  )} Р`
						: 'Записаться на программу'}
				</InputSubmitNew>
			</div>
			{policyPrivacy && (
				<div className={stls.privacyPolicy}>
					Отправляя заявку, Вы соглашаетесь{' '}
					{variant !== 'delta'
						? 'с политикой конфиденциальности и условиями обработки'
						: 'на обработку'}{' '}
					<a
						href='/legaldocuments/NDA.pdf'
						target='_blank'
						rel='noreferrer noopener'
					>
						персональных данных
					</a>
					{variant === 'delta' && ' и с правилами пользования платформой'}
				</div>
			)}
		</form>
	)
}
