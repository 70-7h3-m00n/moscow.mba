import stls from './SectionSeminarRegistrationForm.module.sass'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Wrapper } from '@/components/layout'
import { InputEmail, InputName, InputPhone, InputSubmit } from '../components'
import cn from 'classnames'

type TypeFormValues = {
	name: string
	date: Date
	registration: 'individual' | 'corporate'
	contact: string
	company: string
	participants: string
	phone: string
	email: string
}

const SectionSeminarRegistrationForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<TypeFormValues>()

	const [submitIsDisabled, setSubmitIsDisabled] = useState(false)

	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.wrapper]}>
				<h2 className={stls.title}>Регистрация на семинар</h2>
				<p className={stls.description}>Пожалуйста, заполните форму ниже</p>
				<form
					method='post'
					className='simple-form'
					onChange={() => window.sessionStorage.setItem('formFilled', 'true')}>
					<div className={cn(stls.container)}>
						<div className={cn(stls.inputs, 'inputs-flex', 'inputs-flex--alt')}>
							<InputName register={register} errors={errors} width='100' />
							<InputName register={register} errors={errors} width='50' />
							<InputName register={register} errors={errors} width='50' />
							<InputName register={register} errors={errors} width='50' />
							<InputName register={register} errors={errors} width='50' />
							<InputPhone register={register} errors={errors} width='50' />
							<InputEmail register={register} errors={errors} width='50' />
							<InputSubmit alpha errors={errors} width='50' />
						</div>

						<div className={stls.policyPrivacy}>
							{'Нажимая на кнопку, Вы даете согласие на обработку своих'}{' '}
							<a
								href='/legaldocuments/NDA.pdf'
								target={'_blank'}
								rel='noreferrer noopener'>
								{'персональных данных'}
							</a>
						</div>
					</div>
				</form>
			</Wrapper>
		</section>
	)
}

export default SectionSeminarRegistrationForm
