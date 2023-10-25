import stls from './SeminarsPage.module.sass'
import { SeminarsProps } from './types'

import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import { Breadcrumbs } from '@/components/general'
import SeminarCards from './widgets/SeminarCards/SeminarsCards'
import SectionSeminarCategories from './widgets/SectionSeminarCategories/SectionSeminarCategories'

const Seminars = ({ timeframe = 'all' }: SeminarsProps) => {
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
					<SectionSeminarCategories />
					<SeminarCards timeframe={timeframe} />
				</section>
			</div>
		</>
	)
}

export default Seminars
