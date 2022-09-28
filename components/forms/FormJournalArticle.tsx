import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import cn from 'classnames'

import stls from '@/styles/components/forms/FormJournalArticle.module.sass'

import {
    getClassNames,
    handleSubmitFormArticle
} from '@/helpers/index'

import {
    InputEmail,
    InputName,
    InputPhone,
    InputSubmitJournal
} from '@/components/inputs'

type TypeFormValues = {
    name: string
    phone: string
    email: string
}

const FormJournalArticle = ({
    programTitle = null,
    pdfMaterials,
    setOpen,
    setOpenLoader,
    setIsSuccess,
    width = '33',
    formName = null,
    children,
    classNames,
}) => {
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
            className='simple-form'
            onChange={() => window.sessionStorage.setItem('formFilled', 'true')} // this is a goal for a marketing campaign also used in /pages/_app.tsx
            onSubmit={handleSubmit(values =>
                handleSubmitFormArticle(
                    values,
                    formName,
                    programTitle,
                    asPath,
                    reset,
                    setOpen,
                    setOpenLoader,
                    setIsSuccess,
                    submitIsDisabled,
                    setSubmitIsDisabled,
                    pdfMaterials
                ))}>
            <div className={cn(stls.container)}>
                <div className={cn(stls.inputs, 'inputs-flex', 'inputs-flex--alt')}>
                    <InputName register={register} errors={errors} width={width} />
                    <InputPhone register={register} errors={errors} width={width} />
                    <InputEmail register={register} errors={errors} width={width} />
                    <div className={stls.submit}>
                        <InputSubmitJournal
                            errors={errors}
                            classNames={[cn(getClassNames({ classNames })),
                            errors.name || errors.phone || errors.email
                                ? stls.submitButtonDisabled
                                : '']}>
                            {children}
                        </InputSubmitJournal>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormJournalArticle
