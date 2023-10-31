import stls from './SubjectsSection.module.sass'
import { SubjectsSectionType } from './types'

import useAt from '@/hooks/useAt'
import { ProgramsModule } from '@/components/general'
import {
	createProgramModulesBase,
	createProgramModulesSpecialized
} from '@/helpers/index'
import { practiceArray } from './constants'

export const SubjectsSection = ({ program }: SubjectsSectionType) => {
	const at = useAt()
	const programModulesBase = createProgramModulesBase(program)
	const programModulesSpecialty = createProgramModulesSpecialized(program)

	return (
		<div>
			{program && program?.baseSubjects?.length > 0 && !at.executive && (
				<>
					{program &&
						program?.baseSubjects?.length > 0 &&
						!at.executive &&
						!at.profession &&
						!at.course && (
							<div className={stls.pl}>
								<h3 className={stls.h3}>Базовые дисциплины</h3>
							</div>
						)}
					<div className={stls.list}>
						{programModulesBase.map((module, idx) => (
							<ProgramsModule
								key={`ProgramsModule-${idx}`}
								title={`${idx + 1} модуль`}
								subTitle={module.title && module.title}
								items={module?.subjects && module.subjects}
								fadeOutEffect={
									at.profession ||
									(at.course &&
										(idx === programModulesBase.length - 1 ||
											(idx === programModulesBase.length - 2 &&
												programModulesBase.length % 2 === 0)))
								}
							/>
						))}
					</div>
				</>
			)}
			{program &&
				program?.specializedSubjects?.length > 0 &&
				!at.profession &&
				!at.course && (
					<div className={stls.pl}>
						<h3 className={stls.h3}>Специализированные дисциплины</h3>
					</div>
				)}
			<div className={stls.list}>
				{program?.specializedSubjects?.length > 0 && (
					<>
						{programModulesSpecialty.map((module, idx) => (
							<ProgramsModule
								key={`programModulesSpecialty-${idx}`}
								title={`${idx + 1} модуль`}
								subTitle={module.title && module.title}
								items={module?.subjects && module.subjects}
							/>
						))}
					</>
				)}
			</div>
			<div>
				{program?.specializedSubjectsAddons?.Practice ? (
					<ProgramsModule
						title='Практика'
						subTitle=''
						items={
							at.course
								? practiceArray[1]
								: at.profession
								? practiceArray[2]
								: practiceArray[0]
						}
					/>
				) : program?.specializedSubjectsAddons?.OfflineModule ? (
					<ProgramsModule
						title='Очный модуль'
						subTitle=''
						items={[
							'Живое общение со спикерами',
							'Групповые проекты и разбор кейсов',
							'Домашние задания и курсовая работа',
							'Защита проектов и выпускной вечер'
						]}
					/>
				) : program?.specializedSubjectsAddons?.diplomaProtection ? (
					<ProgramsModule
						title='Защита диплома'
						items={[
							'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
							'Защита итоговой дипломной работы'
						]}
					/>
				) : (
					<></>
				)}
			</div>
		</div>
	)
}
