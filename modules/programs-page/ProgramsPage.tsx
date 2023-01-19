import Image from 'next/image'
import stls from './ProgramsPage.module.sass'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import {
	CardProgram,
	CardsProgram,
	FilterPrograms,
	SortingPrograms
} from './widgets'
import heroProgramPicture from '@/public/assets/images/heroProgram.jpg'
import { ConfigProgramsProvider } from './fractals'
import {
	InfoRectangle,
	ProgramsQty,
	ProgramSubjects
} from '@/components/general'
import { IconCheckCircle } from '@/components/icons'

const ProgramsPage = () => {
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
			<div className={stls.generalContainer}>
				<div className={stls.container}>
					<div className={stls.filtersContainer}>
						<FilterPrograms />
					</div>
					<div className={stls.content}>
						<h1 className={stls.title}>
							ПРОГРАММЫ <span>ОБУЧЕНИЯ</span>
						</h1>
						<div className={stls.infoRectangle}>
							<InfoRectangle programPage={true} />
						</div>
						{/* <div className={stls.programMainInfo}>
							<div className={stls.subtitle}>
								<h2>
									{at.mini
										? `Mini MBA ${mbaFormat}`
										: at.mba
										? `MBA ${mbaFormat}`
										: at.profession
										? 'Профессии'
										: at.course
										? 'Курсы'
										: 'Программы'}
								</h2>
								<span className={stls.qtPrograms}>
									<ProgramsQty programs={programsFiltered} />
								</span>
							</div>

							<p className={stls.desc}>
								{at.mini
									? at.en
										? ''
										: 'Дистанционная программа Mini MBA разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'
									: at.mba
									? at.en
										? ''
										: 'Дистанционная программа MBA разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'
									: ''}
							</p>

							{at.profession ? (
								<div className={stls.desc}>
									Программа профессиональной переподготовки разработана для
									специалистов и руководителей, которые хотят систематизировать
									имеющиеся знания или познакомиться с ключевыми аспектами новой
									для себя сферы управленческой деятельности
								</div>
							) : at.course ? (
								<div className={stls.desc}>
									Программа повышения квалификации разработана для специалистов
									и руководителей, которые хотят систематизировать имеющиеся
									знания или познакомиться с ключевыми аспектами новой для себя
									сферы управленческой деятельности
								</div>
							) : (
								<div className={stls.counters}>
									<div className={stls.counter}>
										<IconCheckCircle />
										<span>
											<ProgramSubjects subjects='base' />
											&nbsp;дисциплин об управлениии
										</span>
									</div>
									<div className={stls.counter}>
										<IconCheckCircle />
										<span>
											<ProgramSubjects subjects='specialty' />
											&nbsp;дисциплин специализации
										</span>
									</div>
								</div>
							)}
						</div> */}
						<div className={stls.sortingContainer}>
							<SortingPrograms />
						</div>
						<div className={stls.programs}>
							<CardsProgram />
						</div>
					</div>
				</div>
			</div>
		</ConfigProgramsProvider>
	)
}

export default ProgramsPage
