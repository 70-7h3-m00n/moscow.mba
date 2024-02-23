import stls from './ProgramsCardsSection.module.sass'
import cn from 'classnames'
import { ProgramsCardsSectionProps } from './types'

import { useContext } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { Wrapper } from '@/components/layout'
import { Tag } from 'modules/program-page/widgets'

export const ProgramsCardsSection = ({
	className,
	...rest
}: ProgramsCardsSectionProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<Tag variant='gamma'>{state.direction || 'Все направления'}</Tag>
				<div>
					{state.UIPrograms?.map(el => (
						<div key={el._id}>
							{el.category.type} {el.title}
						</div>
					))}
				</div>
			</Wrapper>
		</section>
	)
}
