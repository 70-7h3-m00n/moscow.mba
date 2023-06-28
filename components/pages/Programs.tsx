import stls from '@/styles/components/pages/Programs.module.sass'
import { FC, useContext, useState } from 'react'
import { useAt } from '@/hooks/index'
import { ContextStaticProps } from '@/context/index'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import InfoRectangle from '@/components/general/InfoRectangle'
import ProgramSubjects from '@/components/general/ProgramSubjects'
import ProgramsQty from '@/components/general/ProgramsQty'
import Filters from '@/components/general/Filters'
import CardProgram from '@/components/cards/CardProgram'
import IconCheckCircle from '@/components/icons/IconCheckCircle'
import ProgramsHero from '../general/ProgramsHero'
import { SortingPrograms } from '../general'

export enum FilterTypeProgramEnum {
	all = 'all',
	mini = 'mini',
	mba = 'mba',
	profession = 'profession',
	course = 'course'
}

export enum FilterFormatTrainingEnum {
	online = 'online',
	blended = 'blended'
}

export enum FiltersEnum {
	filterTypeProgram = 'filterTypeProgram',
	filterTrainingFormat = 'filterTrainingFormat',
	filterDuration = 'filterDuration',
	filterDirection = 'filterDirection'
}

type TConfigPrograms = {
	sorting?: string
	filterTypeProgram?: keyof typeof FilterTypeProgramEnum | string
	filterDuration?: number
	filterDirection?: string
}

interface Props {
	mbaTypeOfProgram: keyof typeof FilterTypeProgramEnum
	mbaFormat: keyof typeof FilterFormatTrainingEnum
}

const PagePrograms: FC<Props> = ({ mbaTypeOfProgram, mbaFormat }) => {
	const { programs, curStudyField } = useContext(ContextStaticProps)

	const at = useAt()

	const programsFiltered = programs?.filter(
		program =>
			program?.studyFormat === mbaFormat &&
			program?.category?.type === mbaTypeOfProgram
	)

	const programCards =
		(at.profession || at.course) && curStudyField
			? programsFiltered?.filter(
					program => program?.study_field?.name === curStudyField
			  )
			: programsFiltered

	return (
		<>
			<section className={stls.jumbotronPrograms}>
				<div className={stls.generalContainer}>
					<Breadcrumbs />
				</div>
			</section>
			<ProgramsHero />
			<div className={stls.generalContainer}>
				<div className={stls.container}>
					<Filters mbaTypeOfProgram={mbaTypeOfProgram} mbaFormat={mbaFormat} />
					<div className={stls.content}>
						<div className={stls.programMainInfo}>
							<h1 className={stls.title}>
								ПРОГРАММЫ <span>ОБУЧЕНИЯ</span>
							</h1>
							{!at.profession && !at.course && (
								<InfoRectangle
									programPage={true}
									type={mbaTypeOfProgram}
									format={mbaFormat}
								/>
							)}
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

							{at.profession && (
								<div className={stls.desc}>
									Программа профессиональной переподготовки разработана для
									специалистов и руководителей, которые хотят систематизировать
									имеющиеся знания или познакомиться с ключевыми аспектами новой
									для себя сферы управленческой деятельности
								</div>
							)}
							{at.course && (
								<div className={stls.desc}>
									Программа повышения квалификации разработана для специалистов
									и руководителей, которые хотят систематизировать имеющиеся
									знания или познакомиться с ключевыми аспектами новой для себя
									сферы управленческой деятельности
								</div>
							)}
						</div>
						<div className={stls.sortingContainer}>
							<SortingPrograms />
						</div>
						<div className={stls.programs}>
							{programCards?.map((program, idx) => {
								return (
									<CardProgram
										key={program?._id || program?.id}
										professionLayout={at.profession || at.course}
										program={program}
										number={idx + 1}
										type={mbaTypeOfProgram}
										format={mbaFormat}
									/>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PagePrograms
