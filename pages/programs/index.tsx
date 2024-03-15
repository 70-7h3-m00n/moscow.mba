import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
// import { Programs } from '@/components/pages'
import { ProgramsPage } from 'modules'
import { SeoPagesPrograms } from '@/components/seo'
import { dev } from '@/config/index'
import ProgramsPageAlt from 'modules/programs-page-alt/ProgramsPage'


const PagePrograms = ({ programs }) => {
	usePageHandleContext({ programs })

	return (
		<>
			<SeoPagesPrograms />
			{/* <Programs mbaTypeOfProgram={'mini'} mbaFormat={'online'} /> */}
			{dev ?
			<ProgramsPageAlt programs={programs}/>
			:
				<ProgramsPage />}

		</>
	)
}

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.programs, context })

export default PagePrograms
