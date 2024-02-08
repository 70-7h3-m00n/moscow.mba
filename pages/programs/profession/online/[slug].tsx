import { GetStaticPaths, GetStaticProps } from 'next'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useAt, usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import { ProfessionOnlineProgram } from '@/components/pages'
import { SeoOrganizationJsonLd, SeoPagesProgram } from '@/components/seo'
import { ProgramPage } from 'modules/program-page/ProgramPage'
import localFont from 'next/font/local'

// const helvetica = localFont({
// 	src: [
// 		{
// 			path: './assets/fonts/HelveticaNeue.woff2',
// 			weight: '400',
// 			style: 'normal'
// 		}
// 	]
// })

// @font-face
//   font-display: swap
//   font-family: 'Unbounded'
//   src: url(/assets/fonts/Unbounded.woff2) format("woff2"), url('/assets/fonts/Unbounded.woff') format("woff")
//   font-style: normal
//   font-weight: 400

// @font-face
//   font-display: swap
//   font-family: 'Helvetica Neue'
//   src: url(/assets/fonts/HelveticaNeue.woff2) format("woff2"), url('/assets/fonts/HelveticaNeue.woff') format("woff")
//   font-style: normal
//   font-weight: 400

const PageProgramsProfessionOnlineProgram = ({ program, programs, until }) => {
	const at = useAt()
	usePageHandleContext({ programs, program, until })

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
				<ProfessionOnlineProgram
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
		type: 'profession',
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
		type: 'profession',
		format: 'online'
	})

export default PageProgramsProfessionOnlineProgram
