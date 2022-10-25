import { TypePageProgramPaths, TypePageProgramPathsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { fallback } from '@/config/index'

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
  const res = await apolloClient.query<TypePageProgramPathsQuery>({
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
