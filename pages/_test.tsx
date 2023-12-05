import { GetStaticPaths, GetStaticProps } from 'next'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import { SeoPagesProgram } from '@/components/seo'
import { ProgramPage } from 'modules/program-page/ProgramPage'

const PageTest = ({ programs }) => {
	usePageHandleContext({ programs })

	return (
		<>
			<SeoPagesProgram program={programs[0]} />
			<ProgramPage
				program={programs[0]}
				programs={programs}
				teachers={programs[0].teachers}
			/>
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

	return data
}

export default PageTest
