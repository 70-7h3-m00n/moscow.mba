import { hitContactRoute, hitMaterialsRoute } from '@/helpers/index'

import { TypeLibJournalPdfMaterials } from '@/types/index'

type TypePropsSubmitFormArticle = {
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
	pdfMaterials: TypeLibJournalPdfMaterials
}

const onSubmitFormArticle = async ({
	values,
	setOpen,
	setOpenLoader,
	setIsSuccess,
	asPath,
	formName,
	reset,
	pdfMaterials
}: TypePropsSubmitFormArticle) => {
	const normalizeDataForManagers = values => {
		values.leadPage = asPath
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
	// TODO Если надо какая-то нормализация, то сделаем
	const normalizeDataForClient = pdfMaterials => {
		return pdfMaterials
	}

	const fetchingDataForManagers = async () => {
		const data = normalizeDataForManagers(values)

		return await hitContactRoute(data)
	}

	const fetchingDataForClient = async () => {
		const data = normalizeDataForClient({ pdfMaterials, values })

		return await hitMaterialsRoute(data)
	}

	const resultProcessingFetching = async () => {
		setOpenLoader(o => !o)

		const resultDataForManagers = await fetchingDataForManagers()
		const resultDataForClient = await fetchingDataForClient()

		if (resultDataForManagers === 200 && resultDataForClient === 200) {
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

export default onSubmitFormArticle
