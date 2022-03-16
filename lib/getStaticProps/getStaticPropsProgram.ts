import { GetStaticPropsContext } from 'next'
import { TypePageProgramProps, TypePageProgramPropsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsProgram = async ({
  context,
  type,
  slug
}: {
  context: GetStaticPropsContext
  type?: string | null
  slug?: string | null
}): Promise<{
  props: TypePageProgramProps
  revalidate: number
}> => {
  const res = await apolloClient.query<TypePageProgramPropsQuery>({
    query: gql`
      query GetStaticPropsProgram($type: String!, $slug: String!) {
        programs: products {
          _id
          id
          title
          slug
          studyFormat
          category {
            type
            slug
          }
          study_field {
            id
            name
            slug
            description
          }
        }
        program: products(where: { category: { type: $type }, slug: $slug }) {
          _id
          id
          title
          slug
          studyFormat
          category {
            type
            slug
          }
          study_field {
            id
            name
            slug
            description
          }
          picture {
            url
            width
            height
          }
          whatWillYouLearn {
            string
          }
          specializedSubjects {
            string
            title
          }
          goal
          description
          duration {
            studyHours
            minStudyMonths
          }
          price
          discount
          baseSubjects {
            string
            title
          }
          subjectsStickerType
          programModulesCounters {
            leftCounter
            rightCounter
          }
          diplomas {
            diploma {
              url
              width
              height
            }
            name
          }
          whoIsFor {
            name
            description
          }
          specializedSubjectsAddons {
            Practice
            OfflineModule
            diplomaProtection
          }
          teachers {
            name
            description
            slug
            portrait {
              url
              width
              height
            }
            descriptionItems {
              item
            }
          }
          questions {
            question
            answer
          }
          reviews {
            picture {
              url
              width
              height
            }
            name
            desc
            story
          }
        }
      }
    `,
    variables: {
      type: type || 'mini',
      slug: slug || context.params?.slug || 'program'
    }
  })

  return {
    props: {
      ...(res?.data || null),
      program: res?.data?.program?.[0] || null
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsProgram
