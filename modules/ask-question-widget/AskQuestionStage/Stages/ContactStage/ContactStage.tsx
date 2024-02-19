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
import { useForm } from 'react-hook-form'
import { TypeFormValues } from '@/components/forms/FormBeta/types'
import { InputPhoneFlag } from '@/components/inputs/InputPhoneFlag/InputPhoneFlag'
import { InputEmailNew } from '@/components/inputs'

export const ContactStage = () => {
	const { asPath } = useRouter()
	const { program } = useContext(ContextStaticProps)
	const { state, dispatch } = useContext(HowToContactContext)
	const { formStage, way, method, question, phone, email } = state
	console.log('state: ', state)
	const wayToContact = waysToContact[formStage]
	const [submitIsDisabled, setSubmitIsDisabled] = useState(false)
	// const [error, setError] = useState(false)

	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors }
	} = useForm<TypeFormValues>()

	// const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
	// 	event.preventDefault()
	// 	const target = event.target as HTMLInputElement
	// 	const contactDataInput = target.querySelector('input')
	// 	const enteredContactData = contactDataInput.value
	// 	console.log('enteredContactData: ', enteredContactData)

	// 	const isValid = checkValidity({
	// 		enteredContactData,
	// 		way: way === 'Электронная почта' ? 'email' : 'phone'
	// 	})

	// 	// if (!isValid) {
	// 	// 	setError(true)
	// 	// 	contactDataInput.focus()
	// 	// 	return
	// 	// }

	// 	// setError(false)

	// 	dispatch({ type: ACTION.SET_EMAIL, payload: enteredContactData })
	// 	dispatch({ type: ACTION.SET_PHONE, payload: enteredContactData })

	// 	console.log('data sent', {
	// 		name: '',
	// 		phone,
	// 		email,
	// 		contactWay: way,
	// 		contactMethod: method,
	// 		question
	// 	})

	// 	onSubmitForm({
	// 		setOpenLoader: () => {},
	// 		setOpen: () => {},
	// 		asPath,
	// 		reset: () => {},
	// 		programTitle: program?.title || '',
	// 		formName: 'Виджет: задать вопрос',
	// 		values: {
	// 			name: '',
	// 			phone: state.phone,
	// 			email: state.email,
	// 			contactWay: way,
	// 			contactMethod: method,
	// 			question
	// 		}
	// 	})

	// 	dispatch({ type: ACTION.SET_FORM_STAGE, payload: 2 })
	// }

	const handlerMethod = (method: 'Написать' | 'Позвонить') => {
		dispatch({ type: ACTION.SET_METHOD, payload: method })
	}

	return (
		<>
			<FormStageTitle />
			<form
				className={stls.form}
				onSubmit={handleSubmit(values => {
					if (!submitIsDisabled) {
						setSubmitIsDisabled(true)
						setTimeout(() => {
							setSubmitIsDisabled(false)
						}, 5000)

						window.sessionStorage.setItem('formFilled', 'false')

						dispatch({ type: ACTION.SET_FORM_STAGE, payload: 2 })

						return onSubmitForm({
							values: {
								...values,
								name: '',
								contactWay: way,
								contactMethod: method,
								question
							},
							programTitle: program?.title || '',
							asPath,
							formName: 'Виджет: задать вопрос',
							setOpenLoader: () => {},
							setOpen: () => {},
							reset: () => {}
						})
					}
				})}
			>
				<div className={stls.bottomContainer}>
					{way === 'Электронная почта' ? (
						<InputEmailNew
							className={stls.contactDataInput}
							register={register}
							isRequired
							errors={errors}
							variant='gamma'
						/>
					) : (
						<InputPhoneFlag
							register={register}
							errors={errors}
							control={control}
							variant='gamma'
						/>
					)}
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
