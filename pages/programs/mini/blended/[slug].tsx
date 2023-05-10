import { GetStaticPaths, GetStaticProps } from 'next'
import { v4 as uuidv4 } from 'uuid'
import { studyFormats, routesFront } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { BlendedProgram } from '@/components/pages'
import { SeoOrganizationJsonLd, SeoPagesProgram } from '@/components/seo'

const PageProgramsMiniBlendedProgram = ({ program, programs }) => {
	usePageHandleContext({ programs, program })

	return (
		<>
			<SeoPagesProgram program={program} />
			<BlendedProgram program={program} teachers={program?.teachers} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({
		page: routesFront.program,
		context,
		type: 'mini',
		format: 'blended'
	})

export const getStaticPaths: GetStaticPaths = async () =>
	await handleGetStaticPaths({
		page: routesFront.program,
		type: 'mini',
		format: 'blended'
	})

export default PageProgramsMiniBlendedProgram
