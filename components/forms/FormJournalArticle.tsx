import { useRouter } from 'next/router'

import { useState } from 'react'

import { useForm } from 'react-hook-form'
import cn from 'classnames'

import stls from '@/styles/components/forms/FormJournalArticle.module.sass'

import { getClassNames, onSubmitForm } from '@/helpers/index'
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
    programTitle,
    setOpenLoader,
    setOpen,
    width = '33',
    formName = null,
    children,
    classNames
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
                className={cn(stls.container)}>
                <div className={cn(stls.inputs, 'inputs-flex', 'inputs-flex--alt')}>
                    <InputName register={register} errors={errors} width={width} />
                    <InputPhone register={register} errors={errors} width={width} />
                    <InputEmail register={register} errors={errors} width={width} />
                    <div className={stls.submit}>
                        <InputSubmitJournal errors={errors}
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
