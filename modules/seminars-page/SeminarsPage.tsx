import stls from './SeminarsPage.module.sass'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import Link from 'next/link'
import cn from 'classnames'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { useAt } from '@/hooks/index'
import { Breadcrumbs } from '@/components/general'
// import { WebinarCards } from '@/components/sections'
import WebinarCards from '@/components/sections/general/WebinarCards'
import SeminarCards from './widgets/SeminarCards/SeminarsCards'
// import SectionSeminarCategories from '../seminar-page/widgets/SectionSeminarCategories/SectionSeminarCategories'
import { useContext } from 'react'
import { contextStaticPropsSeminars } from 'pages/seminars'

const Seminars = ({ timeframe = 'all' }) => {
	const at = useAt()

	const title = 'Семинары'
	const headind = 'Семинары'

	const { seminars, seminarCategories } = useContext(contextStaticPropsSeminars)

	const webinarsLinks = [
		{
			title: 'Все семинары',
			ref: '/seminars',
			isActive: at.webinarsIndex
		},
		{
			title: 'Ближайшие семинары',
			ref: '/seminars/upcoming',
			isActive: at.webinarsUpcoming
		},
		{
			title: 'Прошедшие семинары',
			ref: '/seminars/archive',
			isActive: at.webinarsArchive
		}
	]

	return (
		<>
			<section className={breadcrumbsStls.jumbotronGeneral}>
				<div className={stls.generalContainer}>
					<Breadcrumbs />
				</div>
			</section>
			<div className={stls.generalContainer}>
				<section className={stls.container}>
					<h1 className={stls.title}>Семинары</h1>
					{/* <SectionSeminarCategories /> */}
					<SeminarCards timeframe={timeframe} />
				</section>
			</div>
		</>
	)
}

export default Seminars
