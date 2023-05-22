import Image from 'next/image'
import stls from './ProgramsPage.module.sass'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import {
	CardsProgram,
	FilterPrograms,
	SortingPrograms,
	InfoRectangle,
	MainInfo
} from './widgets'
import { ConfigProgramsProvider, useConfigProgramsContext } from './fractals'
import { ProgramsQty, ProgramSubjects } from '@/components/general'
import { IconCheckCircle } from '@/components/icons'
import ProgramsHero from '@/components/general/ProgramsHero'

const ProgramsPage = () => {
	const { configPrograms } = useConfigProgramsContext()

	return (
		<ConfigProgramsProvider>
			<section className={stls.jumbotronPrograms}>
				<div className={stls.generalContainer}>
					<Breadcrumbs />
				</div>
			</section>
			<ProgramsHero />
			<section className={stls.generalContainer}>
				<div className={stls.container}>
					<div className={stls.filtersContainer}>
						<FilterPrograms />
					</div>
					<h1 className={stls.title}>
						ПРОГРАММЫ <span>ОБУЧЕНИЯ</span>
					</h1>
					<div className={stls.infoRectangle}>
						<InfoRectangle programPage={true} />
					</div>
					<div className={stls.mainInfo}>
						<MainInfo />
					</div>
					<div className={stls.sortingContainer}>
						<SortingPrograms />
					</div>
					<div className={stls.programs}>
						<CardsProgram />
					</div>
				</div>
			</section>
		</ConfigProgramsProvider>
	)
}

export default ProgramsPage
