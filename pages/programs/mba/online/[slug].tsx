import { GetStaticPaths, GetStaticProps } from 'next'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useAt, usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import { OnlineProgram } from '@/components/pages'
import { SeoOrganizationJsonLd, SeoPagesProgram } from '@/components/seo'
import { ProgramPage } from 'modules/program-page/ProgramPage'

const PageProgramsMbaOnlineProgram = ({ program, programs }) => {
	usePageHandleContext({ programs, program })
	const at = useAt()

	return (
		<>
			<SeoPagesProgram program={program} />
			{at.new ? (
				<ProgramPage
					program={program}
					programs={programs}
					teachers={programs?.teachers}
				/>
			) : (
				<OnlineProgram
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
		type: 'mba',
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
		type: 'mba',
		format: 'online'
	})

export default PageProgramsMbaOnlineProgram
