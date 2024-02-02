import stls from './ProgramPage.module.sass'
import cn from 'classnames'
import { ProgramPageProps } from './types'

import { ProgramPageProvider } from './fractals/context/context'
import useAt from '@/hooks/useAt'
import { FutureJob } from './widgets/FutureJob/FutureJob'
import { EducationROI } from './widgets/EducationROI/EducationROI'
import {
	HeroSection,
	AboutProgram,
	WhatWillYouLearnNew,
	WhoIsForNew,
	HowProcessGoesNew,
	CtaForm,
	ProgramModules,
	Diploma,
	ExpertsNew,
	Employment,
	EmploymentPartners,
	Networking,
	Accreditation,
	Reviews,
	StudyCostNew,
	Faq,
	RecommendedProgramsNew
} from './widgets'

export const ProgramPage = ({
	className,
	programs,
	program,
	teachers
}: ProgramPageProps) => {
	const at = useAt()

	const isEmployment = program?.employment !== false

	return (
		<ProgramPageProvider
			programs={programs}
			program={program}
			teachers={teachers}
		>
			<div className={cn(className, stls.container)}>
				<HeroSection className={stls.heroSection} />
				<AboutProgram className={stls.section} />
				<WhatWillYouLearnNew className={stls.section} />
				<WhoIsForNew className={stls.section} />
				<HowProcessGoesNew className={stls.section} id='how-process-goes' />
				<CtaForm className={stls.section} />
				<ProgramModules className={stls.section} id='program-modules' />
				<Diploma className={stls.section} />
				<ExpertsNew className={stls.section} id='experts' />
				{isEmployment && (
					<Employment className={stls.section} id='employment' />
				)}
				{at.profession || at.course ? (
					<>
						<FutureJob className={stls.section} />
						<EducationROI className={stls.section} />
						<EmploymentPartners className={stls.section} />
					</>
				) : (
					<>
						<EmploymentPartners className={stls.section} />
						<Networking className={stls.section} />
					</>
				)}
				<CtaForm className={stls.section} variant='beta' />
				<Accreditation className={cn(stls.section, stls.accreditation)} />
				<Reviews className={stls.section} id='reviews' />
				<StudyCostNew className={stls.section} id='study-cost' />
				<Faq className={stls.section} />
				<CtaForm className={stls.section} variant='gamma' />
				{/* <RecommendedProgramsNew className={stls.section} /> */}
			</div>
		</ProgramPageProvider>
	)
}
