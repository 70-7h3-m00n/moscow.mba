import { GetStaticPaths, GetStaticProps } from 'next'
import { v4 as uuidv4 } from 'uuid'
import { studyFormats, routesFront } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useAt, usePageHandleContext } from '@/hooks/index'
import { BlendedProgram } from '@/components/pages'
import { SeoOrganizationJsonLd, SeoPagesProgram } from '@/components/seo'
import { ProgramPage } from 'modules/program-page/ProgramPage'

const PageProgramsMiniBlendedProgram = ({ program, programs }) => {
	usePageHandleContext({ programs, program })
	const at = useAt()

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
				<BlendedProgram
					program={program}
					programs={programs}
					teachers={program?.teachers}
				/>
			)}
		</>
	)
}

export const getStaticProps: GetStaticProps = async context => {
	const data = await handleGetStaticProps({
		page: routesFront.program,
		context,
		type: 'mini',
		format: 'blended'
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
		type: 'mini',
		format: 'blended'
	})

export default PageProgramsMiniBlendedProgram
