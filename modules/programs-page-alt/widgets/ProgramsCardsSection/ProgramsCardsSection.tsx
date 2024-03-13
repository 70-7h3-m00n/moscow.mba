import stls from './ProgramsCardsSection.module.sass'
import cn from 'classnames'
import { ProgramsCardsSectionProps } from './types'

import { useContext } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { Wrapper } from '@/components/layout'
import { Tag } from 'modules/program-page/widgets'

import { ProgramsMain } from './ProgramsMain/ProgramsMain'
import { ProgramsSidebar } from './ProgramsSearch/ProgramsSidebar'

export const ProgramsCardsSection = ({
	className,
	...rest
}: ProgramsCardsSectionProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<ProgramsSidebar />
				<ProgramsMain />
			</Wrapper>
		</section>
	)
}
