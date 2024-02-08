import stls from './ProgramPage.module.sass'
import cn from 'classnames'
import { ProgramPageProps } from './types'

import { ProgramPageProvider } from './fractals/context/context'
import localFont from 'next/font/local'
import { Unbounded } from 'next/font/google'
import useAt from '@/hooks/useAt'
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
	BreadcrumbsSection,
	EducationROI,
	FutureJob
} from './widgets'

const helvetica = localFont({
	src: [
		{
			path: '../../public/assets/fonts/HelveticaNeue.woff2',
			weight: '400',
			style: 'normal'
		}
	]
})

// const unbounded = Unbounded({
// 	weight: ['400'],
// 	style: ['normal'],
// 	subsets: ['latin', 'cyrillic'],
// 	display: 'swap'
// })

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
			<div
				className={cn(
					className,
					stls.container,
					helvetica.className
					// unbounded.className
				)}
			>
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
				<Diploma className={stls.section} />
				<ExpertsNew className={stls.section} id='experts' program={program} />
				{isEmployment && (
					<Employment className={stls.section} id='employment' />
				)}
				{at.profession || at.course ? (
					<>
						<FutureJob className={stls.section} program={program} />
						<EducationROI className={stls.section} program={program} />
						<EmploymentPartners className={stls.section} />
					</>
				) : (
					<>
						<EmploymentPartners className={stls.section} />
						<Networking className={stls.section} />
					</>
				)}
				<CtaForm className={stls.section} variant='beta' program={program} />
				<Accreditation className={cn(stls.section, stls.accreditation)} />
				<Reviews className={stls.section} id='reviews' program={program} />
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
