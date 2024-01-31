import { GetStaticPropsContext } from 'next'
import { TypePageProgramProps, TypePageProgramPropsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import axios from 'axios'
import { routesBack, revalidate } from '@/config/index'

const getStaticPropsProgram = async ({
	type,
	slug
}: {
	type: string | null
	slug: string | null
}): Promise<{
	price: string | number | null
}> => {
	const res = await apolloClient.query({
		query: gql`
			query GetStaticPropsProgram($type: String!, $slug: String!) {
				program: products(where: { category: { type: $type }, slug: $slug }) {
					price
				}
			}
		`,
		variables: {
			type: type,
			slug: slug
		}
	})

	return {
		price: res.data
	}
}

export default getStaticPropsProgram
