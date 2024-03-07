import stls from './CardsList.module.sass'
import cn from 'classnames'
import { CardsListProps } from './types'
import { ProgramCard } from '../ProgramCard/ProgramCard'

import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { useContext } from 'react'

export const CardsList = ({ className, ...rest }: CardsListProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	return (
		<ul className={cn(className, stls.content)} {...rest}>
			{state.UIPrograms?.map(program => (
				<li className={stls.item} key={program._id}>
					<ProgramCard program={program} />
				</li>
			))}
		</ul>
	)
}
