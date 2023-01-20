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
import heroProgramPicture from '@/public/assets/images/heroProgram.jpg'
import { ConfigProgramsProvider } from './fractals'
import { ProgramsQty, ProgramSubjects } from '@/components/general'
import { IconCheckCircle } from '@/components/icons'
import useWindowWidth from '@/hooks/useWindowWidth'

const ProgramsPage = () => {
	const width = useWindowWidth()

	return (
		<ConfigProgramsProvider>
			<section className={stls.jumbotronPrograms}>
				<div className={stls.generalContainer}>
					<Breadcrumbs />
				</div>
			</section>
			<section className={stls.heroProgram}>
				<Image
					src={heroProgramPicture}
					alt='Студенты ставит лайк'
					layout='fill'
					objectFit='cover'
				/>
				<div className={stls.heroProgramContainer}>
					<p className={stls.ourPrograms}>
						Наши программы — это бизнес-образование международного уровня,
						которое ежегодно получают тысячи предпринимателей, топ-менеджеров и
						узкопрофильных специалистов.
					</p>
				</div>
			</section>
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
