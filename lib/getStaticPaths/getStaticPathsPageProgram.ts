import { TypePageProgramPaths, TypePageProgramPathsQuery } from '@/types/index'
import axios from 'axios'
import { fallback, routesBack } from '@/config/index'
import { ApolloClient, gql } from '@apollo/client'
import client from '../apolloClient'

type TypeGetStaticPathsPageProgram = {
	format?: string
	type?: string
}

const getStaticPathsPageProgram = async ({
	format,
	type = 'mini'
}: TypeGetStaticPathsPageProgram): Promise<{
	paths: TypePageProgramPaths
	fallback: boolean | 'blocking'
}> => {
	// const res = await axios.get(
	//   `${routesBack.root}${routesBack.getStaticPathsPageProgram}/${type}`
	// )

	// const paths = res.data.paths

	// return {
	//   paths,
	//   fallback: fallback.default
	// }

	const res = await client.query<TypePageProgramPathsQuery>({
		query: gql`
			query GetStaticPathsPageProgram($type: String!) {
				programs: products(where: { category: { type: $type } }) {
					slug
				}
			}
		`,
		variables: {
			type
		}
	})

	return {
		paths: Array.from(
			new Set(
				res.data?.programs?.map(program => ({
					params: {
						slug: program?.slug || 'program'
					}
				}))
			)
		) || [{ params: { slug: 'program' } }],
		fallback: fallback.default
	}
}

export default getStaticPathsPageProgram
