import stls from '@/styles/components/sections/RecommendedPrograms.module.sass'
import {
	TypeClassNames,
	TypeLibJournalArticle,
	TypeLibJournalReadMoreArticles
} from '@/types/index'
import Link from 'next/link'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { CardProgram } from '../../../modules/programs-page/widgets/CardsProgram/fractals/components/CardProgram/index'
import { Wrapper } from '@/components/layout'
import { MouseEvent, useRef, useState } from 'react'
import { IconArrowLeft } from '@/components/icons'

const RecommendedPrograms = ({ programs }) => {
	const recommendedPrograms = programs
		?.filter(program => program.isActive)
		?.slice(0, 6)

	const translations = {
		ariaLabelBtnLeft: 'Листать влево',
		ariaLabelBtnRight: 'Листать вправо'
	}

	const ref = useRef<HTMLUListElement>(null)
	const [handleOnClickFired, setHandleOnClickFired] = useState(false)
	const [dataScrollLeft, setDataScrollLeft] = useState(null)
	const [dataScrollRight, setDataScrollRight] = useState(null)

	type THandleOnClick = {
		e: MouseEvent<HTMLButtonElement>
		dir: 'left' | 'right'
	}
	const handleOnClick = ({ e, dir }: THandleOnClick) => {
		setHandleOnClickFired(true)
		e.preventDefault()

		const refCurrent = ref.current

		if (dir === 'left') {
			refCurrent.scrollTo({
				left: refCurrent.scrollLeft - 280,
				behavior: 'smooth'
			})
			return
		}

		if (dir === 'right') {
			refCurrent.scrollTo({
				left: refCurrent.scrollLeft + 280,
				behavior: 'smooth'
			})

			return
		}
	}

	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>Рекомендуемые курсы</h2>
				<ul ref={ref} className={stls.list}>
					{recommendedPrograms.map((program, idx) => (
						<li key={idx} className={stls.listItem}>
							<CardProgram program={program} />
						</li>
					))}
				</ul>
				<div className={stls.arrows}>
					<button
						className={cn(stls.arrowBtn, stls.arrowBtnLeft)}
						aria-label={translations.ariaLabelBtnLeft}
						title={translations.ariaLabelBtnLeft}
						onClick={e => handleOnClick({ e, dir: 'left' })}
						data-scroll={dataScrollLeft}>
						<IconArrowLeft classNames={[stls.IconArrowLeft]} />
					</button>
					<button
						className={cn(stls.arrowBtn, stls.arrowBtnRight)}
						aria-label={translations.ariaLabelBtnRight}
						title={translations.ariaLabelBtnRight}
						onClick={e => handleOnClick({ e, dir: 'right' })}
						data-scroll={dataScrollRight}>
						<IconArrowLeft classNames={[stls.IconArrowLeft]} />
					</button>
				</div>
			</Wrapper>
		</section>
	)
}

export default RecommendedPrograms
