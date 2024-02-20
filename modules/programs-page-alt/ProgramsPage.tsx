import stls from './ProgramsPage.module.sass'
import cn from 'classnames'
import { ProgramsPageProps } from './types'

import localFont from 'next/font/local'

import { ProgramsFiltersSection } from './widgets'
import {
	ProgramsPageContext,
	ProgramsPageProvider
} from './fractals/context/context'

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
	return (
		<ProgramsPageProvider programs={programs}>
			<div className={cn(className, stls.container, helvetica.className)}>
				<ProgramsFiltersSection />
			</div>
		</ProgramsPageProvider>
	)
}

export default ProgramsPageAlt
