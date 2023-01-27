import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { NextPage, GetStaticProps } from 'next'
import { Reviews } from '@/components/pages'

interface Props {}

const PageReviews: NextPage<Props> = ({}) => {
	return <Reviews />
}

export const getStaticProps: GetStaticProps = async context =>
	await handleGetStaticProps({ page: routesFront.reviews, context })

export default PageReviews
