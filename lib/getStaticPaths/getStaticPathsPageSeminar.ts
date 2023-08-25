import { TypePageSeminarPaths } from '@/types/index'
import axios from 'axios'
import { fallback, routesBack } from '@/config/index'

const getStaticPathsPageSeminar = async (): Promise<{
	paths: TypePageSeminarPaths
	fallback: boolean | 'blocking'
}> => {
	const res = await axios.get(
		`${routesBack.root}${routesBack.getStaticPathsPageSeminar}`
	)

	const paths = res.data.paths

	return {
		paths,
		fallback: fallback.default
	}
}

export default getStaticPathsPageSeminar
