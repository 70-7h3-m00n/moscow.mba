import stls from './ProgramPage.module.sass'
import cn from 'classnames'
import { ProgramPageProps } from './types'

import { ProgramPageProvider } from './fractals/context/context'
import localFont from 'next/font/local'
import useAt from '@/hooks/useAt'
import {
	HeroSection,
	AboutProgram,
	WhoIsForNew,
	HowProcessGoesNew,
	ProgramModules,
	Diploma,
	ExpertsNew,
	Employment,
	EmploymentPartners,
	Networking,
	Accreditation,
	StudyCostNew,
	BreadcrumbsSection,
	EducationROI,
	FutureJob
} from './widgets'
import { WhatWillYouLearnNew } from '@/components/sections/general/WhatWillYouLearn/WhatWillYouLearn'
import { CtaForm } from '@/components/sections/general/CtaForm/CtaForm'
import { Faq } from '@/components/sections/general/Faq/Faq'
import { ReviewsAlt } from '@/components/sections/general/Reviews/Reviews'

const helvetica = localFont({
	src: [
		{
			path: '../../public/assets/fonts/HelveticaNeue.woff2',
			weight: '400',
			style: 'normal'
		}
	]
})

export const ProgramPage = ({
	className,
	programs,
	program,
	teachers
}: ProgramPageProps) => {
	const at = useAt()

	return (
		<ProgramPageProvider
			programs={programs}
			program={program}
			teachers={teachers}
		>
			<div className={cn(className, stls.container, helvetica.className)}>
				<HeroSection className={stls.heroSection} program={program} />
				<AboutProgram className={stls.section} program={program} />
				<WhatWillYouLearnNew className={stls.section} program={program} />
				<WhoIsForNew className={stls.section} program={program} />
				<div id='process' />
				<HowProcessGoesNew className={stls.section} />
				<CtaForm className={stls.section} program={program} />
				<ProgramModules
					className={stls.section}
					id='program-modules'
					program={program}
				/>
				<Diploma className={stls.section} program={program} />
				<ExpertsNew className={stls.section} id='experts' program={program} />

				{program?.frdo === false && (at.profession || at.course) ? (
					<>
						<FutureJob className={stls.section} program={program} />
						<EducationROI className={stls.section} program={program} />
					</>
				) : at.profession || at.course ? (
					<>
						<Employment className={stls.section} id='employment' />
						<FutureJob className={stls.section} program={program} />
						<EducationROI className={stls.section} program={program} />
						<EmploymentPartners className={stls.section} />
					</>
				) : (
					<>
						<Employment className={stls.section} id='employment' />
						<EmploymentPartners className={stls.section} />
						<Networking className={stls.section} />
					</>
				)}
				<CtaForm className={stls.section} variant='beta' program={program} />
				<Accreditation className={cn(stls.section, stls.accreditation)} />
				<ReviewsAlt className={stls.section} id='reviews' program={program} />
				<StudyCostNew
					className={stls.section}
					id='study-cost'
					program={program}
				/>
				<Faq className={stls.section} program={program} />
				<CtaForm className={stls.section} variant='gamma' program={program} />
				{/* <RecommendedProgramsNew className={stls.section} /> */}
				<BreadcrumbsSection program={program} />
			</div>
		</ProgramPageProvider>
	)
}
