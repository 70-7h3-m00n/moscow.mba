import stls from './CardsList.module.sass'
import cn from 'classnames'
import { CardsListProps } from './types'
import { ProgramCard } from '../../../../../components/cards/ProgramCard/ProgramCard'

import { useState } from 'react'
import { BtnBeta } from '@/components/btns'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const CardsList = ({ className, programs }: CardsListProps) => {
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
		<motion.ul className={cn(className, stls.content)} layout>
			{programs
				?.filter((_, idx) => idx < sizeShowArticles)
				?.map(program => (
					<motion.li
						className={stls.item}
						key={program._id}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.98 }}
						layout
					>
						<Link
							href={`/programs/${program?.category.type}/${program?.studyFormat}/${program?.slug}`}
						>
							<ProgramCard program={program} />
						</Link>
					</motion.li>
				))}
			{sizeArticles > sizeShowArticles && (
				<div className={stls.buttonWrapper}>
					<BtnBeta variant='alpha' onClick={changeShowMore}>
						Показать больше
					</BtnBeta>
				</div>
			)}
		</motion.ul>
	)
}
