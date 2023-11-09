import stls from './CardsProgram.module.sass'
import cn from 'classnames'
import { CardsProgramProps } from './types'

import { usePrograms } from 'modules/programs-page/fractals'
import { CardProgram } from './fractals'
import { useState } from 'react'
import { BtnArticlesShowMore } from '@/components/btns'

const CardsProgram = ({ className }: CardsProgramProps) => {
	const { renderPrograms } = usePrograms()

	const programs = renderPrograms?.filter(
		program =>
			program?.slug !== 'executive' &&
			program?.slug !== 'international-business-law'
	)

	const sizeArticles = programs.length
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
		<>
			<div className={cn(className, stls.cardsList)}>
				{programs
					?.filter((_, idx) => idx < sizeShowArticles)
					?.map((program, idx) => {
						return (
							<CardProgram
								key={program?._id || program?.id}
								program={program}
							/>
						)
					})}
			</div>
			{sizeArticles > sizeShowArticles && (
				<div className={stls.buttonWrapper}>
					<BtnArticlesShowMore onClick={changeShowMore} />
				</div>
			)}
		</>
	)
}

export default CardsProgram
