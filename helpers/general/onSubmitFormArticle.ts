import {
  hitContactRoute,
  hitMaterialsRoute
} from '@/helpers/index'

const onSubmitForm = async ({
  values,
  programTitle,
  promoCourseLink = null,
  setOpenLoader,
  asPath,
  setIsSuccess,
  setOpen,
  formName,
  reset,
  pdfMaterials
}) => {

  const normalizeDataForManagers = (values) => {
    values.programTitle = programTitle || ''
    values.leadPage = promoCourseLink ? promoCourseLink : asPath
    const utms = JSON.parse(sessionStorage.getItem('utms'))

    if (utms?.utm_term) {
      utms.utm_term = decodeURIComponent(utms.utm_term)
    }

    values.utms = utms
    sessionStorage.removeItem('utms')
    const referer = JSON.parse(sessionStorage.getItem('referer'))
    values.referer = referer
    sessionStorage.removeItem('referer')
    const ymUid = JSON.parse(localStorage.getItem('_ym_uid'))
    values.ymUid = ymUid
    values.formName = formName

    return values
  }
  // TODO Если надо какая-то нормальизация, то сделаем
  const normalizeDataForClient = (pdfMaterials) => {
    return pdfMaterials
  }

  const fetchingDataForManagers = async () => {
    const data = normalizeDataForManagers(values)

    return await hitContactRoute(data)
  }

  const fetchingDataForClient = async () => {
    const data = normalizeDataForClient(pdfMaterials)

    return await hitMaterialsRoute(data)
  }

  const resultProcessingFetching = async () => {
    setOpenLoader(o => !o)

    const resultDataForManagers = await fetchingDataForManagers()
    const resultDataForClient = await fetchingDataForClient()

    if (resultDataForManagers === 200 && resultDataForClient == 200) {
      setOpenLoader(false)
      setOpen(o => !o)
      setIsSuccess(true)
      reset()
    } else {
      setOpenLoader(false)
      setOpen(o => !o)
      setIsSuccess(false)
    }
  }

  await resultProcessingFetching()
}

export default onSubmitForm
