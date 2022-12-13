import { GetStaticPropsContext } from 'next'
import { TypePageJournalArticlesProps } from '@/types/index'
import axios from 'axios'
import { revalidate, routesBack } from '@/config/index'

const getStaticPropsPageJournalArticles = async ({
	context
}: {
	context: GetStaticPropsContext
}): Promise<{
	props: TypePageJournalArticlesProps
	revalidate: number | boolean
}> => {
	const res = await axios.get(
		`${routesBack.root}${routesBack.getStaticPropsPageJournalArticles}`
	)

	return {
		props: res.data,
		revalidate: revalidate.default
	}
}

export default getStaticPropsPageJournalArticles
