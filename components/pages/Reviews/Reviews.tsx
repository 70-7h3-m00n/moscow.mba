import { VideoReviews } from '@/components/sections'
import {
	ClientList,
	ReviewsBreadcrumbs,
	ReviewScreens,
	ReviewsSource,
	SocialMedia,
	Statistic,
	WhereStudentsWorks
} from './fractals'

const Reviews = () => {
	return (
		<>
			<ReviewsBreadcrumbs />
			<Statistic />
			<ReviewScreens />
			{/* <ClientList /> */}
			<VideoReviews darkBackground />
			<ReviewsSource />
			<SocialMedia />
			<WhereStudentsWorks />
		</>
	)
}

export default Reviews
