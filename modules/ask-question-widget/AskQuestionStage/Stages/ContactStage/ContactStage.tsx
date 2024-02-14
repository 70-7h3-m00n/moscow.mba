import stls from './ContactStage.module.sass'
import cn from 'classnames'

import { FormStageTitle } from '../../../widgets/FormStageTitleContainer/FormStageTitle'
import { FormEvent, useContext, useState } from 'react'
import { HowToContactContext } from 'modules/ask-question-widget/fractals/context/context'
import { waysToContact } from '../../../constants'
import BtnContact from 'modules/ask-question-widget/components/BtnContact/BtnContact'
import { ACTION } from 'modules/ask-question-widget/fractals/context/reducer'
import { onSubmitForm } from '@/helpers/index'
import { useRouter } from 'next/router'
import { ContextStaticProps } from '@/context/index'
import { checkValidity } from 'modules/ask-question-widget/fractals/hooks/checkValidity'
import {
	handlePhoneInput,
	handlePhonePaste,
	hanleOnKeyDown
} from '@/helpers/general/handleForm'
import { useForm } from 'react-hook-form'
import { TypeFormValues } from '@/components/forms/FormBeta/types'

export const ContactStage = () => {
	const { asPath } = useRouter()
	const { program } = useContext(ContextStaticProps)
	const { state, dispatch } = useContext(HowToContactContext)
	const { formStage, way, method, question, phone, email } = state
	console.log('state: ', state)
	const wayToContact = waysToContact[formStage]
	const [error, setError] = useState(false)

	// const {
	// 	register,
	// 	handleSubmit,
	// 	reset,
	// 	control,
	// 	formState: { errors }
	// } = useForm<TypeFormValues>()

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
		const target = event.target as HTMLInputElement
		const contactDataInput = target.querySelector('input')
		const enteredContactData = contactDataInput.value
		console.log('enteredContactData: ', enteredContactData)

		const isValid = checkValidity({
			enteredContactData,
			way: way === 'Электронная почта' ? 'email' : 'phone'
		})

		if (!isValid) {
			setError(true)
			contactDataInput.focus()
			return
		}

		setError(false)

		dispatch({ type: ACTION.SET_EMAIL, payload: enteredContactData })
		dispatch({ type: ACTION.SET_PHONE, payload: enteredContactData })

		console.log('data sent', {
			name: '',
			phone,
			email,
			contactWay: way,
			contactMethod: method,
			question
		})

		onSubmitForm({
			setOpenLoader: () => {},
			setOpen: () => {},
			asPath,
			reset: () => {},
			programTitle: program?.title || '',
			formName: 'Виджет: задать вопрос',
			values: {
				name: '',
				phone: state.phone,
				email: state.email,
				contactWay: way,
				contactMethod: method,
				question
			}
		})

		dispatch({ type: ACTION.SET_FORM_STAGE, payload: 2 })
	}

	const handlerMethod = (method: 'Написать' | 'Позвонить') => {
		dispatch({ type: ACTION.SET_METHOD, payload: method })
		// dispatch({type: ACTION.SET_PHONE, payload: })
	}

	return (
		<>
			<FormStageTitle />
			<form className={stls.form} onSubmit={handleFormSubmit}>
				<div className={stls.bottomContainer}>
					{way === 'Электронная почта' ? (
						<>
							<input
								name='email'
								type='text'
								className={stls.contactDataInput}
								placeholder='Электронная почта'
							/>
							{error && (
								<p className={stls.errorText}>*Адрес почты указан неверно</p>
							)}
						</>
					) : (
						<>
							<input
								name='phone'
								type='text'
								className={stls.contactDataInput}
								placeholder='Номер телефона'
								onInput={handlePhoneInput}
								onKeyDown={hanleOnKeyDown}
								onPaste={handlePhonePaste}
							/>
							{error && <p className={stls.errorText}>*Номер указан неверно</p>}
						</>
					)}
					{/* 				
					<InputPhoneFlag
							register={register}
							errors={errors}
							control={control}
							variant='gamma'
						/> */}
					{state.contactMethods.length > 1 ? (
						<>
							<p className={stls.buttonDescription}>
								Выберите удобный способ ответа 👇
							</p>
							<div className={stls.methodWrapper}>
								{state.contactMethods.map((contactMethod, idx) => (
									<BtnContact
										key={`${wayToContact.way}${contactMethod.name}`}
										way={contactMethod.name}
										url={contactMethod.icon}
										handlerOnClick={() => handlerMethod(contactMethod.name)}
									/>
								))}
							</div>
						</>
					) : (
						<>
							<button className={stls.submitBtn}>
								{method === 'Написать' ? 'Жду сообщения' : 'Жду звонка'}
							</button>
						</>
					)}
					<p className={stls.privacyPolicy}>
						Нажимая на кнопку, вы соглашаетесь на обработку персональных данных
						и с правилами пользования платформой
					</p>
				</div>
			</form>
		</>
	)
}
