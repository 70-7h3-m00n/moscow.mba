import { GetStaticPaths, GetStaticProps } from 'next'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useAt, usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import { CourseOnlineProgram } from '@/components/pages'
import { SeoOrganizationJsonLd, SeoPagesProgram } from '@/components/seo'
import { ProgramPage } from 'modules/program-page/ProgramPage'

const PageProgramsCourseOnlineProgram = ({ program, programs }) => {
	const at = useAt()
	usePageHandleContext({ programs, program })

	return (
		<>
			<SeoPagesProgram program={program} />

			{at.new ? (
				<ProgramPage
					program={program}
					programs={programs}
					teachers={program?.teachers}
				/>
			) : (
				<CourseOnlineProgram program={program} teachers={program?.teachers} />
			)}
		</>
	)
}

export const getStaticProps: GetStaticProps = async context => {
	const data = await handleGetStaticProps({
		page: routesFront.program,
		context,
		type: 'course',
		format: 'online'
	})

	if (!data.props?.programs?.find(prog => prog.slug === context.params.slug)) {
		return {
			notFound: true
		}
	} else {
		return data
	}
}

export const getStaticPaths: GetStaticPaths = async () =>
	await handleGetStaticPaths({
		page: routesFront.program,
		type: 'course',
		format: 'online'
	})

export default PageProgramsCourseOnlineProgram
