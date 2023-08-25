import { GetStaticPropsContext } from 'next'

import axios from 'axios'
import { revalidate, routesBack } from '@/config/index'
import { TypePageSeminarsProps } from '@/types/index'

const getStaticPropsPageSeminars = async ({
	context
}: {
	context: GetStaticPropsContext
}): Promise<{
	props: TypePageSeminarsProps
	revalidate: number | boolean
}> => {
	const res = await axios.get(
		`${routesBack.root}${routesBack.getStaticPropsPageSeminars}`
	)

	return {
		props: res.data,
		revalidate: revalidate.default
	}
}

export default getStaticPropsPageSeminars
