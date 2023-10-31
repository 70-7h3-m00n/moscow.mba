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

	const professionRectangleData = [
		{
			number: program?.duration?.studyHours || null,
			description: 'часов видео-лекций'
		},
		{
			number: program?.duration?.minStudyMonths || null,
			description: `${ruCase(+program?.duration?.minStudyMonths, [
				'месяц',
				'месяца',
				'месяцев'
			])} обучения`
		},
		{
			number: program?.duration?.practicalLessons || null,
			description: 'практических занятий'
		},
		{
			number: ' ',
			description: (
				<>
					обновлено в <span className={stls.number}>{getYear(new Date())}</span>
				</>
			)
		}
	]

	return (
		<ul
			className={cn(className, stls.redRectangle, {
				[stls.profession]: at.profession
			})}
		>
			{!at.profession && (
				<li className={stls.redItem}>
					<div className={stls.number}>
						{at.executive ? (
							<ProgramSubjects subjects='base' />
						) : (
							program && program?.baseSubjects?.length
						)}
					</div>
					<p className={stls.p}>
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
							<div className={stls.number}>
								<IconCheckCircleAltDim />
							</div>
							<p className={stls.p}>Практика и защита дипломной работы</p>
						</>
					) : !at.profession &&
					  program?.programModulesCounters?.rightCounter ===
							'specializedlAcademicDisciplines' ? (
						<>
							<div className={stls.number}>
								{program?.specializedSubjects?.length}
							</div>
							<p className={stls.p}>дисциплин специализации</p>
						</>
					) : !at.profession &&
					  program?.programModulesCounters?.rightCounter ===
							'practiceAndExam' ? (
						<>
							<div className={stls.number}>
								<IconCheckCircleAltDim />
							</div>
							<p className={stls.p}>Практика и защита дипломной работы</p>{' '}
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
							item.number && (
								<li className={stls.redItem} key={idx}>
									<div className={stls.number}>{item.number}</div>
									<p className={stls.p}>{item.description}</p>
								</li>
							)
					)}
				</>
			)}
		</ul>
	)
}
