import { hitContactRoute } from '@/helpers/index'

// ! pay close attention working with this file
// * 2022.10.18 we've expirienced a week of lost leads, this is critical and should never accure ever again
const onSubmitForm = async ({
	values,
	programTitle,
	promoCourseLink = null,
	setOpenLoader,
	asPath,
	setOpen,
	formName,
	reset
}) => {
	console.log('onSubmitForm =>>>>>>>', values)

	setOpenLoader(o => !o)
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
	values.geo = JSON.parse(localStorage?.getItem('roistat_geo_data'))

	const req = await hitContactRoute(values)
	if (req === 200) {
		setOpenLoader(false)
		setOpen(o => !o)
		reset()
	} else {
		console.log('err')
	}
}

export default onSubmitForm
