import { onSubmitFormArticle } from '@/helpers/index'

import { TypeLibJournalPdfMaterials } from '@/types/index'

type TypePropsHandleSubmitFormArticle = {
  values: {
    name: string
    phone: string
    email: string
  }
  formName: string | null
  asPath: string
  reset: () => void
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setOpenLoader: React.Dispatch<React.SetStateAction<boolean>>
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>
  submitIsDisabled: boolean
  setSubmitIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
  pdfMaterials: TypeLibJournalPdfMaterials
}

const handleSubmitFormArticle = ({
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
}: TypePropsHandleSubmitFormArticle) => {
  if (!submitIsDisabled) {
    setSubmitIsDisabled(true)
    setTimeout(() => {
      setSubmitIsDisabled(false)
    }, 5000)

    window.sessionStorage.setItem('formFilled', 'false')
    onSubmitFormArticle({
      values,
      setOpen,
      setOpenLoader,
      setIsSuccess,
      asPath,
      formName,
      reset,
      pdfMaterials
    })
  }
}

export default handleSubmitFormArticle
