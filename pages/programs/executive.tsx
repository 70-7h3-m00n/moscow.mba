import stls from '@/styles/pages/programs/Executive.module.sass'
import { GetStaticProps } from 'next'
import { NextSeo, CourseJsonLd } from 'next-seo'
import truncate from 'truncate'
import { v4 as uuidv4 } from 'uuid'
import { studyFormats, routesFront } from '@/config/index'
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
	TeachersLegacy,
	Rules,
	ExecutiveRequirements,
	Students,
	Reviews,
	SectionStudyCost,
	Qna
} from '@/components/sections'
import { SeoPagesProgram } from '@/components/seo'

const PageProgramsExecutive = ({ program, programs }) => {
	usePageHandleContext({ programs, program })

	const id = uuidv4()
	const programBlended =
		(program && {
			...program,
			studyFormat: studyFormats.blended,
			id,
			_id: id
		}) ||
		null

	return (
		<>
			<SeoPagesProgram
				program={programBlended}
				canonical={`${routesFront.root}${routesFront.programsExecutive}`}
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
				titleNewStr={'по программе обучения'}
			/>
			<Accreditation />
			<TeachersLegacy
				programId={programBlended?._id}
				programTitle={programBlended?.title}
				teachers={programBlended?.teachers}
			/>
			<Rules prices={{ lowerPrice: '600 000', higherPrice: '2 000 000' }} />
			<ExecutiveRequirements />
			<Students />
			<Reviews />
			<SectionStudyCost />
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
		format: 'blended',
		type: 'executive',
		slug: 'executive'
	})

export default PageProgramsExecutive
