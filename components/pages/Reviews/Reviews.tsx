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
			<ClientList />
			<ReviewsSource />
			<SocialMedia />
			<WhereStudentsWorks />
		</>
	)
}

export default Reviews
