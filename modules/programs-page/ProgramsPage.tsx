import stls from './ProgramsPage.module.sass'

import Breadcrumbs from '@/components/general/Breadcrumbs'
import { ConfigProgramsProvider } from './fractals'
import ProgramsHero from '@/components/general/ProgramsHero'
import {
	CardsProgram,
	FilterPrograms,
	SortingPrograms,
	InfoRectangle,
	MainInfo
} from './widgets'
import {
	ContactUs,
	HowProcessGoes,
	Qna,
	Reviews,
	VideoReviews
} from '@/components/sections'
import { FilterCategory } from './widgets/FilterPrograms/fractals'
import { useState } from 'react'

const ProgramsPage = () => {
	return (
		<ConfigProgramsProvider>
			<section className={stls.jumbotronPrograms}>
				<div className={stls.generalContainer}>
					<Breadcrumbs />
				</div>
			</section>
			<ProgramsHero />
			<section className={stls.generalContainer}>
				<div>
					<h1 className={stls.title}>
						ПРОГРАММЫ <span>ОБУЧЕНИЯ</span>
					</h1>
					<div className={stls.infoRectangle}>
						<InfoRectangle
							className={stls.infoRectangleWidth}
							programPage={true}
						/>
					</div>
					<div className={stls.mainInfo}>
						<MainInfo />
					</div>
					<FilterCategory />
					<div className={stls.sortingContainer}>
						<SortingPrograms />
					</div>
				</div>
				<div className={stls.container}>
					<div className={stls.filtersContainer}>
						<FilterPrograms />
					</div>

					<CardsProgram className={stls.programs} />
				</div>
			</section>
			<VideoReviews />
			<Reviews />
			<HowProcessGoes />
			<Qna firstAccordionActive />
			<ContactUs
				title={''}
				titleNewStr={'Получите бесплатную консультацию'}
				desc={
					'Оставьте заявку и получите бесплатную консультацию, узнайте их точную стоимость, возможные варианты скидок и требования к поступлению'
				}
				overlapsFooter
			/>
		</ConfigProgramsProvider>
	)
}

export default ProgramsPage
