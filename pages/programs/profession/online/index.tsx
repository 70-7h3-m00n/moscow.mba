import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { dev, routesFront } from '@/config/index'
import { Programs } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'
import { ProgramsPage } from 'modules'
import ProgramsPageAlt from 'modules/programs-page-alt/ProgramsPage'

const PageProgramsProfessionOnline = ({ programs }) => {
	usePageHandleContext({ programs })

	return (
		<>
			<SeoPagesPrograms />
			{/* <Programs mbaTypeOfProgram={'profession'} mbaFormat={'online'} /> */}
			{dev ?
			<ProgramsPageAlt programs={programs}/>
			:
				<ProgramsPage />}
		</>
	)
}

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.programs, context })

export default PageProgramsProfessionOnline
