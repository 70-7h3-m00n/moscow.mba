import { GetStaticProps } from 'next'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { InternationalBusinessLaw } from '@/components/pages'
import { SeoPagesProgram } from '@/components/seo'

const PageProgramsInternationalBusinessLaw = ({ program, programs }) => {
	usePageHandleContext({ programs, program })

	return (
		<>
			<SeoPagesProgram
				program={program}
				canonical={`${routesFront.root}${routesFront.programsInternationalBusinessLaw}`}
			/>
			<InternationalBusinessLaw
				program={program}
				teachers={program?.teachers}
			/>
		</>
	)
}

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({
		page: routesFront.program,
		context,
		format: 'online',
		type: 'mbl',
		slug: 'international-business-law'
	})

export default PageProgramsInternationalBusinessLaw
