import stls from './CardsList.module.sass'
import cn from 'classnames'
import { CardsListProps } from './types'
import { ProgramCard } from '../ProgramCard/ProgramCard'

import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { useContext, useState } from 'react'
import { BtnArticlesShowMore, BtnBeta } from '@/components/btns'

export const CardsList = ({ className, ...rest }: CardsListProps) => {
	const { state } = useContext(ProgramsPageContext)

	const programs = state.UIPrograms?.filter(
		program =>
			program?.slug !== 'executive' &&
			program?.slug !== 'international-business-law' &&
			program?.studyFormat !== 'blended'
	)

	const sizeArticles = programs?.length
	const defaultSizeShowArticles = 8
	const defaultSizeShowMore = 4

	const [sizeShowArticles, setSizeShowArticles] = useState(
		defaultSizeShowArticles
	)

	const changeShowMore = () => {
		setSizeShowArticles(
			sizeShowArticles => sizeShowArticles + defaultSizeShowMore
		)
	}

	return (
		<ul className={cn(className, stls.content)} {...rest}>
			{programs
				?.filter((_, idx) => idx < sizeShowArticles)
				?.map(program => (
					<li className={stls.item} key={program._id}>
						<ProgramCard program={program} />
					</li>
				))}
			{sizeArticles > sizeShowArticles && (
				<div className={stls.buttonWrapper}>
					<BtnBeta variant='alpha' onClick={changeShowMore}>
						Показать больше
					</BtnBeta>
				</div>
			)}
		</ul>
	)
}
