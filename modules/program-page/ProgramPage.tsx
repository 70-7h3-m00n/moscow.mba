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

const unbounded = Unbounded({
	weight: ['400'],
	style: ['normal'],
	subsets: ['latin', 'cyrillic'],
	display: 'swap'
})

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
					helvetica.className,
					unbounded.className
				)}
			>
				<HeroSection className={stls.heroSection} />
				<AboutProgram className={stls.section} />
				<WhatWillYouLearnNew className={stls.section} />
				<WhoIsForNew className={stls.section} />
				<div id='process' />
				<HowProcessGoesNew className={stls.section} />
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
				<BreadcrumbsSection />
			</div>
		</ProgramPageProvider>
	)
}
