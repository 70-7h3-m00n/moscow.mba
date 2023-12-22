import { GetStaticProps } from 'next'
import { handleGetStaticProps } from '@/lib/index'
import { routesFront } from '@/config/index'

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
