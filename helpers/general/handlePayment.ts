import routesFront from '@/config/routesFront'
import axios from 'axios'
import { getFullPaymentPrice } from './getFullPaymentPrice'
import { TypeLibProgram } from '@/types/index'
import { UseFormReset } from 'react-hook-form'
import { TypeFormValues } from '@/components/forms/FormBeta/types'
import { TypeNextApiResponseLeadData } from 'pages/api/payment'

export type handlePaymentType = {
	program: TypeLibProgram
	values: any
	asPath: string
	formName: string
	type: 'mini' | 'mba' | 'course' | 'profession'
}

export const handlePayment = async ({
	program,
	values,
	asPath,
	formName,
	type
}: handlePaymentType) => {
	values.programTitle = program?.title || ''
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
	values.geo = JSON.parse(localStorage?.getItem('roistat_geo_data'))

	// дублирует onSubmitForm
	sessionStorage.setItem('payment', 'waiting_for_capture')

	const returnURL = `${routesFront.root}/programs/${type}/online/${program.slug}#study-cost`

	const price = getFullPaymentPrice({
		price: +program?.price,
		type
	})

	try {
		const paymentRes = await axios.post(`${routesFront.root}/api/payment`, {
			price,
			returnURL,
			values
		})

		setTimeout(() => {
			if (paymentRes.data.url) {
				location.replace(paymentRes.data.url)
			}
		}, 0)

		await axios.post(`${routesFront.root}/api/pending-payment`, {
			transactionId: paymentRes.data.transactionId,
			values
		})
	} catch (err) {
		console.log('payment error', err)
		return err
	}
}
