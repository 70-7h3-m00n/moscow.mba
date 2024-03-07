import stls from './ProgramsCardsList.module.sass'
import cn from 'classnames'
import { ProgramsCardsListProps } from './types'

import { Wrapper } from '@/components/layout'
import { useContext } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { TypeLibProgram, TypeLibPrograms } from '@/types/index'
import { Tag } from 'modules/program-page/widgets'
import { IconCloseAlt, IconRefresh } from '@/components/icons'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'
import { SortingEnum } from 'modules/programs-page-alt/fractals'
import { FilterTags } from '../FilterTags/FilterTags'
import { CardsHeading } from '../CardsHeading/CardsHeading'
import { ProgramCard } from '../ProgramCard/ProgramCard'
import { CardsList } from '../CardsList/CardsList'

const array = ['курс', 'продолжительность', 'с трудоустройством', 'four']

export const ProgramsCardsList = ({
	className,
	...rest
}: ProgramsCardsListProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<FilterTags className={stls.filterTags} />
			<CardsHeading />
			<CardsList />
		</div>
	)
}
