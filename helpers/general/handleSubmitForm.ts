import { useState } from "react"

import { onSubmitForm } from '@/helpers/index'

const handleSubmitForm = (
    values,
    formName,
    programTitle,
    asPath,
    reset,
    setOpen,
    setOpenLoader,
    setIsSuccess,
    submitIsDisabled,
    setSubmitIsDisabled
) => {

    if (!submitIsDisabled) {
        setSubmitIsDisabled(true)
        setTimeout(() => {
            setSubmitIsDisabled(false)
        }, 5000)

        window.sessionStorage.setItem('formFilled', 'false')
        return onSubmitForm({
            values,
            programTitle,
            setOpen,
            setOpenLoader,
            setIsSuccess,
            asPath,
            formName,
            reset
        })
    }
}

export default handleSubmitForm