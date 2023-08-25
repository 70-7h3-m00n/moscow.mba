import { GetStaticPropsContext } from 'next'

import axios from 'axios'
import { revalidate, routesBack } from '@/config/index'
import { TypePageSeminarProps } from '@/types/index'

const getStaticPropsPageSeminar = async ({
	context
}: {
	context: GetStaticPropsContext
}): Promise<{
	props: TypePageSeminarProps
	revalidate: number | boolean
}> => {
	const res = await axios.get(
		`${routesBack.root}${routesBack.getStaticPropsPageSeminars}/${context?.params?.seminar}`
	)

	return {
		props: res.data,
		revalidate: revalidate.default
	}
}

export default getStaticPropsPageSeminar
