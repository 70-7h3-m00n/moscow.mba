import stls from '@/styles/pages/programs/Executive.module.sass'
import { GetStaticProps } from 'next'
import { NextSeo, CourseJsonLd } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { createBlended } from '@/helpers/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import {
  JumbotronProgram,
  AboutExecutive,
  ResultsExecutive,
  InPersonWithExperts,
  ModulesAbroad,
  WhoStudies,
  ProgramsModules,
  ContactUs,
  Accreditation,
  Teachers,
  Rules,
  ExecutiveRequirements,
  Students,
  Reviews,
  CostOfStudy,
  Qna
} from '@/components/sections'

const PageProgramsExecutive = ({ program, programs }) => {
  usePageHandleContext({ programs })

  const programBlended =
    (program &&
      createBlended([program])?.filter(
        program => program?.studyFormat === 'blended'
      )?.[0]) ||
    null

  return (
    <>
      <NextSeo
        title={`${programBlended?.title} - Moscow Business Academy`}
        description={truncate(programBlended?.description, 120)}
        canonical={'https://moscow.mba/programs/executive'}
      />
      <CourseJsonLd
        courseName={`${programBlended?.title} MBA`}
        provider={{
          name: 'Moscow Business Academy',
          url: 'https://moscow.mba/programs/executive'
        }}
        description={truncate(programBlended?.description, 120)}
      />

      <JumbotronProgram program={programBlended && programBlended} />
      <AboutExecutive />
      <ResultsExecutive />
      <InPersonWithExperts />
      <ModulesAbroad />
      <WhoStudies />
      <ProgramsModules program={programBlended && programBlended} />
      <ContactUs
        programId={programBlended?._id}
        programTitle={programBlended?.title}
        title={'Получите консультацию'}
        titleNewStr={'по программе обучени'}
      />
      <Accreditation />
      <Teachers
        programId={programBlended?._id}
        programTitle={programBlended?.title}
        teachers={programBlended?.teachers}
      />
      <Rules prices={{ lowerPrice: '600 000', higherPrice: '2 000 000' }} />
      <ExecutiveRequirements />
      <Students />
      <Reviews />
      <CostOfStudy
        programId={programBlended?._id}
        programTitle={programBlended?.title}
        programType='executive'
      />
      <Qna
        programId={programBlended?._id}
        programTitle={programBlended?.title}
      />
      <ContactUs
        programId={programBlended?._id}
        programTitle={programBlended?.title}
        title={'Не знаете что выбрать?'}
        titleNewStr={'Получите консультацию по программам MBA'}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.program,
    context,
    type: 'executive',
    slug: 'executive'
  })

export default PageProgramsExecutive
