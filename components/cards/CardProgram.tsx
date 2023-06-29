import stls from '@/styles/components/cards/CardProgram.module.sass'
import Link from 'next/link'
import { useAt } from '@/hooks/index'
import { ruCaseMonth } from '@/helpers/index'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import Price from '@/components/costs/Price'
import { IconArrowTopRight } from '@/components/icons'

const CardProgram = ({ professionLayout, program, number, type, format }) => {
	const at = useAt()

	const studyFieldIsAccounting =
		program?.study_field?.slug?.trim() === 'accounting-analysis-and-audit'

	const programCategory = program?.category?.type

	const studyCategories = {
		mini: 'Mini MBA',
		mba: 'MBA',
		profession: 'Профессия',
		course: 'Курс'
	}

	return (
		<Link legacyBehavior href={`/programs/${type}/${format}/${program?.slug}`}>
			<a className={stls.container}>
				<div className={stls.IconArrowTopRightContainer}>
					<IconArrowTopRight classNames={[stls.IconArrowTopRight]} />
				</div>
				<div>
					<span className={stls.category}>
						{/* {at.mini
							? 'Mini MBA'
							: at.mba
							? 'MBA'
							: at.profession
							? at.en
								? 'Profession'
								: 'Профессия'
							: at.course
							? at.en
								? 'Course'
								: 'Курс'
							: ''} */}
						{studyCategories[program?.category?.type]}
					</span>
				</div>
				<h3 className={stls.programTitle}>{program?.title}</h3>
				<div className={stls.bottomContainer}>
					<div>
						<Price
							discount={!at.blended}
							type={type}
							format={format}
							programPrice={
								studyFieldIsAccounting
									? 59000
									: (at.profession || at.course) && program?.price
							}
							renderedByComponent='CardProgram'
						/>
					</div>
					<div className={stls.duration}>
						{program?.duration?.minStudyMonths ? (
							`${program?.duration?.minStudyMonths} ${
								at.en ? 'month' : ruCaseMonth(program?.duration?.minStudyMonths)
							}`
						) : (
							<TrainingPeriod type={type} />
						)}
					</div>
				</div>
			</a>
		</Link>
	)
}

export default CardProgram
