import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import cn from 'classnames'

import stls from '@/styles/components/forms/FormJournalArticle.module.sass'

import { getClassNames, handleSubmitFormArticle } from '@/helpers/index'

import {
	InputEmail,
	InputName,
	InputPhone,
	InputSubmitJournal
} from '@/components/inputs'
import { TypeClassNames, TypeLibJournalPdfMaterials } from '@/types/index'

type TypeFormValues = {
	name: string
	phone: string
	email: string
}

type TypePropsFormJournalArticle = {
	pdfMaterials: TypeLibJournalPdfMaterials
	width?: string
	formName: string | null
	children: React.ReactNode
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	setOpenLoader: React.Dispatch<React.SetStateAction<boolean>>
	setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>
	emailIsRequired?: boolean
} & TypeClassNames

const FormJournalArticle = ({
	pdfMaterials,
	setOpen,
	setOpenLoader,
	setIsSuccess,
	width = '33',
	formName = null,
	children,
	classNames,
	emailIsRequired
}: TypePropsFormJournalArticle) => {
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
			className='simple-form'
			onChange={() => window.sessionStorage.setItem('formFilled', 'true')} // this is a goal for a marketing campaign also used in /pages/_app.tsx
			onSubmit={handleSubmit(values =>
				handleSubmitFormArticle({
					values,
					formName,
					asPath,
					reset,
					setOpen,
					setOpenLoader,
					setIsSuccess,
					submitIsDisabled,
					setSubmitIsDisabled,
					pdfMaterials
				})
			)}>
			<div className={cn(stls.container)}>
				<div className={cn(stls.inputs, 'inputs-flex', 'inputs-flex--alt')}>
					<InputName register={register} errors={errors} width={width} />
					<InputPhone register={register} errors={errors} width={width} />
					<InputEmail
						register={register}
						errors={errors}
						width={width}
						isRequired={emailIsRequired}
					/>
					<div className={stls.submit}>
						<InputSubmitJournal
							errors={errors}
							classNames={[
								cn(getClassNames({ classNames })),
								errors.name || errors.phone || errors.email
									? stls.submitButtonDisabled
									: ''
							]}>
							{children}
						</InputSubmitJournal>
					</div>
				</div>
			</div>
		</form>
	)
}

export default FormJournalArticle
