import { routesFront } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

interface Props {}

const PageReview: NextPage<Props> = ({}) => {
	return <div></div>
}

export const getStaticPaths: GetStaticPaths = async () => {
	return await handleGetStaticPaths({ page: routesFront.review })
}

export const getStaticProps: GetStaticProps = async context => {
	return await handleGetStaticProps({
		page: routesFront?.review,
		context
	})
}

export default PageReview
