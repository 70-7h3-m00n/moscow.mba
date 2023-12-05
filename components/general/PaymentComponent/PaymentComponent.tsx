import stls from './PaymentComponent.module.sass'

import { useRouter } from 'next/router'
import axios from 'axios'

export const PaymentComponent = () => {
	const router = useRouter()

	const values = {
		price: 666
	}

	const handlerPayment = async () => {
		const res = await axios.post(`/api/testPayment`, values)
		router.push(res?.data?.url)
	}

	return (
		<div className={stls.wrapper}>
			<div className={stls.flex}>
				<p>TestPageComponent</p>
				<button onClick={handlerPayment}>Payment</button>
			</div>
		</div>
	)
}
