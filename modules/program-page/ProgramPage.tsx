import stls from './ProgramPage.module.sass'
import cn from 'classnames'
import { ProgramPageProps } from './types'
import { ProgramPageProvider } from './fractals/context/ProgramPageProvider'
import { HeroSection } from './widgets'
import { AboutProgram } from './widgets/AboutProgram/AboutProgram'
import { WhatWillYouLearnNew } from './widgets/WhatWillYouLearn/WhatWillYouLearn'
import { WhoIsForNew } from './widgets/WhoIsFor/WhoIsFor'
import { HowProcessGoesNew } from './widgets/HowProcessGoes/HowProcessGoes'
import { CtaForm } from './widgets/CtaForm/CtaForm'
import { ProgramModules } from './widgets/ProgramModules/ProgramModules'
import { Diploma } from './widgets/Diploma/Diploma'
import { ExpertsNew } from './widgets/Experts/Experts'
import { Employment } from './widgets/Employment/Employment'
import { EmploymentPartners } from './widgets/EmploymentPartners/EmploymentPartners'
import { Networking } from './widgets/Networking/Networking'
import { Accreditation } from './widgets/Accreditation/Accreditation'
import { Reviews } from './widgets/Reviews/Reviews'

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
			</div>
		</ProgramPageProvider>
	)
}
