import { GetStaticPropsContext } from 'next'
import { TypePageSitemapProps, TypePageSitemapPropsQuery } from '@/types/index'
import axios from 'axios'
import { routesBack, revalidate } from '@/config/index'

const getStaticPropsSitemap = async ({
	context
}: {
	context: GetStaticPropsContext
}): Promise<{
	props: TypePageSitemapProps
	revalidate: number | boolean
}> => {
	const res = await axios.get(
		`${routesBack.root}${routesBack.getStaticPropsSitemap}`
	)
	return {
		props: res.data,
		revalidate: revalidate.default
	}
}

export default getStaticPropsSitemap
