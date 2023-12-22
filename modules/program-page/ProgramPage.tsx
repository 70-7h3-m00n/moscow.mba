import stls from './ProgramPage.module.sass'
import cn from 'classnames'
import { ProgramPageProps } from './types'

import { ProgramPageProvider } from './fractals/context/context'
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
				<HowProcessGoesNew className={stls.section} />
				<CtaForm className={stls.section} />
				<ProgramModules className={stls.section} />
				<Diploma className={stls.section} />
				<ExpertsNew className={stls.section} />
				<Employment className={stls.section} />
				<EmploymentPartners className={stls.section} />
				<Networking className={stls.section} />
				<CtaForm className={stls.section} />
				<Accreditation className={cn(stls.section, stls.accreditation)} />
				<Reviews className={stls.section} />
				<StudyCostNew className={stls.section} />
				<Faq className={stls.section} />
				<CtaForm className={stls.section} />
				<RecommendedProgramsNew className={stls.section} />
			</div>
		</ProgramPageProvider>
	)
}
