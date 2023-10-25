import stls from '@/styles/components/cards/CardProgram.module.sass'
import Link from 'next/link'
import { useAt } from '@/hooks/index'
import { ruCase } from '@/helpers/index'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import Price from '@/components/costs/Price'
import { IconArrowTopRight } from '@/components/icons'
import {
	FilterFormatTrainingEnum,
	useConfigProgramsContext
} from 'modules/programs-page/fractals'
import TrainingPeriodHours from '@/components/costs/TrainingPeriodHours'

const CardProgram = ({ program }) => {
	const at = useAt()
	const { configPrograms } = useConfigProgramsContext()

	const type = program?.category.type
	const format = program?.studyFormat

	const isAllProgramsBlendedPage =
		at.allPrograms &&
		configPrograms.filterTrainingFormat === FilterFormatTrainingEnum.blended

	return (
		<Link legacyBehavior href={`/programs/${type}/${format}/${program?.slug}`}>
			<a className={stls.container}>
				<div className={stls.IconArrowTopRightContainer}>
					<IconArrowTopRight classNames={[stls.IconArrowTopRight]} />
				</div>
				<div>
					<span className={stls.category}>
						{type === 'mini'
							? 'Mini MBA'
							: type === 'mba'
							? 'MBA'
							: type === 'profession'
							? at.en
								? 'Profession'
								: 'Профессия'
							: type === 'course'
							? at.en
								? 'Course'
								: 'Курс'
							: ''}
					</span>
				</div>
				<h3 className={stls.programTitle}>{program?.title}</h3>
				<div className={stls.bottomContainer}>
					<div>
						<Price
							discount={!at.blended && !isAllProgramsBlendedPage}
							type={type}
							format={format}
							programPrice={(at.profession || at.course) && program?.price}
							renderedByComponent='CardProgram'
						/>
					</div>
					<div className={stls.duration}>
						{program?.duration?.minStudyMonths ? (
							`${program?.duration?.minStudyMonths} ${
								at.en
									? 'month'
									: ruCase(program?.duration?.minStudyMonths, [
											'месяц',
											'месяца',
											'месяцев'
									  ])
							}`
						) : (
							<TrainingPeriod type={type} />
						)}
						<span className={stls.durationSeparator}> </span>
						{program?.duration?.studyHours ? (
							`${program?.duration?.studyHours} ${
								at.en
									? 'hours'
									: ruCase(+program?.duration?.studyHours, [
											'час',
											'часа',
											'часов'
									  ])
							}`
						) : (
							<TrainingPeriodHours type={type} />
						)}
					</div>
				</div>
			</a>
		</Link>
	)
}

export default CardProgram
