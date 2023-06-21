import { GetStaticPaths, GetStaticProps } from 'next'
import { v4 as uuidv4 } from 'uuid'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { studyFormats, routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { BlendedProgram } from '@/components/pages'
import { SeoOrganizationJsonLd, SeoPagesProgram } from '@/components/seo'

const PageProgramsMbaBlendedProgram = ({ program, programs }) => {
	usePageHandleContext({ programs, program })

	return (
		<>
			<SeoPagesProgram program={program} />
			<BlendedProgram
				program={program}
				programs={programs}
				teachers={program?.teachers}
			/>
		</>
	)
}

export const getStaticProps: GetStaticProps = async context => {
	const data = await handleGetStaticProps({
		page: routesFront.program,
		context,
		type: 'mba',
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
		type: 'mba',
		format: 'blended'
	})

export default PageProgramsMbaBlendedProgram
