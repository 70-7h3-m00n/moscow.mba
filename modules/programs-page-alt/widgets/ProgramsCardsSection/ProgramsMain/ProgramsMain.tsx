import stls from './ProgramsMain.module.sass'
import cn from 'classnames'
import { ProgramsMainProps } from './types'

import { FilterTags } from '../FilterTags/FilterTags'
import { CardsHeading } from '../CardsHeading/CardsHeading'
import { CardsList } from '../CardsList/CardsList'

export const ProgramsMain = ({ className, ...rest }: ProgramsMainProps) => {
	return (
		<div className={cn(className, stls.content)} {...rest}>
			<FilterTags className={stls.filterTags} />
			<CardsHeading />
			<CardsList />
		</div>
	)
}
