import stls from './ProgramsPage.module.sass'
import cn from 'classnames'
import { ProgramsPageProps } from './types'

import localFont from 'next/font/local'

import { ProgramsFiltersSection } from './widgets'
import { ProgramsPageProvider } from './fractals/context/context'
import { ProgramsCardsSection } from './widgets/ProgramsCardsSection/ProgramsCardsSection'
import { RecommendedProgramsAlt } from '@/components/sections/general/RecommendedProgramsAlt/RecommendedPrograms'
import { BreadcrumbsSection } from 'modules/program-page/widgets'
import { CtaForm } from '@/components/sections/general/CtaForm/CtaForm'
import { WhatWillYouLearnNew } from '@/components/sections/general/WhatWillYouLearn/WhatWillYouLearn'
import { Faq } from '@/components/sections/general/Faq/Faq'
import { ReviewsAlt } from '@/components/sections/general/Reviews/Reviews'
import { filterByEmployment } from './fractals/utils/filterPrograms'

const helvetica = localFont({
	src: [
		{
			path: '../../public/assets/fonts/HelveticaNeue.woff2',
			weight: '400',
			style: 'normal'
		}
	]
})

const ProgramsPageAlt = ({ className, programs }: ProgramsPageProps) => {
	const data = programs
		.filter(el => el.category.slug !== 'executive')
		.slice(0, 7)

	return (
		<ProgramsPageProvider programs={programs}>
			<div className={cn(className, stls.container, helvetica.className)}>
				<ProgramsFiltersSection className={cn(stls.filters)} />
				<ProgramsCardsSection className={cn(stls.section, stls.cards)} />
				<RecommendedProgramsAlt
					className={cn(stls.section, stls.recommended)}
					programs={data}
				/>
				<WhatWillYouLearnNew
					className={cn(stls.section, stls.whatWillYouLearn)}
				/>
				<ReviewsAlt className={stls.section} id='reviews' />
				<Faq className={cn(stls.section, stls.section)} />
				<CtaForm className={cn(stls.section, stls.section)} variant='gamma' />
				<BreadcrumbsSection />
			</div>
		</ProgramsPageProvider>
	)
}

export default ProgramsPageAlt
