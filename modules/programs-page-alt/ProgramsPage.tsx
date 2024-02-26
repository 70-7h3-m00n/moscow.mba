import stls from './ProgramsPage.module.sass'
import cn from 'classnames'
import { ProgramsPageProps } from './types'

import localFont from 'next/font/local'

import { ProgramsFiltersSection } from './widgets'
import { ProgramsPageProvider } from './fractals/context/context'
import { ProgramsCardsSection } from './widgets/ProgramsCardsSection/ProgramsCardsSection'

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
	// console.log('programs: ', programs)
	return (
		<ProgramsPageProvider programs={programs}>
			<div className={cn(className, stls.container, helvetica.className)}>
				<ProgramsFiltersSection className={stls.filtersSection} />
				<ProgramsCardsSection className={stls.cardsSection} />
			</div>
		</ProgramsPageProvider>
	)
}

export default ProgramsPageAlt
