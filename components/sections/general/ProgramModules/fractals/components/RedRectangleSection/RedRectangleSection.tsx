import stls from './RedRectangleSection.module.sass'
import cn from 'classnames'

import { IconCheckCircleAltDim } from '@/components/icons'
import { ProgramSubjects } from '@/components/general'
import useAt from '@/hooks/useAt'
import { RedRectangleSectionType } from './types'
import { ruCase } from '@/helpers/index'
import { getYear } from 'date-fns'

export const RedRectangleSection = ({
	className,
	program
}: RedRectangleSectionType) => {
	const at = useAt()
	const currentYear = getYear(new Date())

	const professionRectangleData = [
		{
			title: `${program?.duration?.studyHours} часов` || null,
			description: 'Видео-уроков'
		},
		{
			title: program?.duration?.practicalLessons,
			description: 'Практических занятий'
		},
		{
			title: program?.duration?.workshops,
			description: 'Воркшопов'
		},
		{
			title:
				`${program?.duration?.minStudyMonths} ${ruCase(
					+program?.duration?.minStudyMonths,
					['месяц', 'месяца', 'месяцев']
				)}` || null,
			description: `Продолжительность обучения`
		},

		{
			title: `${currentYear} год`,
			description: 'Дата обновления'
		}
	]

	return (
		<ul
			className={cn(className, stls.rectangle, {
				[stls.profession]: at.profession
			})}
		>
			{!at.profession && (
				<li className={stls.redItem}>
					<div className={stls.title}>
						{at.executive ? (
							<ProgramSubjects subjects='base' />
						) : (
							program && program?.baseSubjects?.length
						)}
					</div>
					<p className={stls.description}>
						{program?.programModulesCounters?.leftCounter ===
						'specializedlAcademicDisciplines'
							? 'профильных дисциплин'
							: program?.programModulesCounters?.leftCounter ===
							  'academicDisciplines'
							? 'дисциплин'
							: program?.programModulesCounters?.leftCounter ===
							  'generalAcademicDisciplines'
							? 'дисциплин базовой части'
							: 'дисциплин'}
					</p>
				</li>
			)}
			{!at.profession && (
				<li className={stls.redItem}>
					{program?.programModulesCounters?.rightCounter === 'icon' ? (
						<>
							<div className={stls.title}>
								<IconCheckCircleAltDim className={stls.iconCheck} />
							</div>
							<p className={stls.description}>
								Практика и защита дипломной работы
							</p>
						</>
					) : !at.profession &&
					  program?.programModulesCounters?.rightCounter ===
							'specializedlAcademicDisciplines' ? (
						<>
							<div className={stls.title}>
								{program?.specializedSubjects?.length}
							</div>
							<p className={stls.description}>дисциплин специализации</p>
						</>
					) : !at.profession &&
					  program?.programModulesCounters?.rightCounter ===
							'practiceAndExam' ? (
						<>
							<div className={stls.title}>
								<IconCheckCircleAltDim />
							</div>
							<p className={stls.description}>
								Практика и защита дипломной работы
							</p>{' '}
						</>
					) : (
						''
					)}
				</li>
			)}
			{at.profession && (
				<>
					{professionRectangleData.map(
						(item, idx) =>
							item.title && (
								<li className={stls.item} key={idx}>
									<p className={stls.title}>{item.title}</p>
									<p className={stls.description}>{item.description}</p>
								</li>
							)
					)}
				</>
			)}
		</ul>
	)
}
