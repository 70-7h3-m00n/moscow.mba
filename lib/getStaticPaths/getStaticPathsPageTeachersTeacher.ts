import {
  TypePageTeachersTeacherPaths,
  TypePageTeachersTeacherPathsQuery
} from '@/types/index'
import axios from 'axios'
import { fallback, routesBack } from '@/config/index'

const getStaticPathsPageTeachersTeacher = async (): Promise<{
  paths: TypePageTeachersTeacherPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await axios.get(
    `${routesBack.root}${routesBack.getStaticPathsPageTeacher}`
  )

  const paths = res.data.paths

  return {
    paths,
    fallback: fallback.default
  }

  // const res = await apolloClient.query<TypePageTeachersTeacherPathsQuery>({
  //   query: gql`
  //     query GetStaticPathsPageTeachersTeacher {
  //       teachers {
  //         slug
  //       }
  //     }
  //   `
  // })

  // return {
  //   paths: Array.from(
  //     new Set(
  //       res.data?.teachers?.map(teacher => ({
  //         params: {
  //           teacher: teacher?.slug || 'teacher'
  //         }
  //       }))
  //     )
  //   ) || [{ params: { teacher: 'teacher' } }],
  //   fallback: fallback.default
  // }
}

export default getStaticPathsPageTeachersTeacher
