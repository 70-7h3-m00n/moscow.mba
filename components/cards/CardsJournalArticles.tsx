import stls from '@/styles/components/cards/CardsJournalArticles.module.sass'
import {
	TypeClassNames,
	TypeLibJournalReadMoreArticlesArticles
} from '@/types/index'
import cn from 'classnames'
import { useRef, WheelEvent, MouseEvent, useState, useEffect } from 'react'
import { getClassNames } from '@/helpers/index'
import { CardJournalArticle } from '@/components/cards'
import { IconArrowLeft } from '@/components/icons'

type TCardsJournalArticlesProps = TypeClassNames & {
	articles: TypeLibJournalReadMoreArticlesArticles
}

const CardsJournalArticles = ({
	classNames,
	articles
}: TCardsJournalArticlesProps) => {
	const translations = {
		ariaLabelBtnLeft: 'Листать влево',
		ariaLabelBtnRight: 'Листать вправо'
	}

	// * horizontal scroll with mouse wheel
	// TODO: generalize this into it's own hook
	// TODO: improve arrows to be not interactive when there is no more content to scroll
	const ref = useRef<HTMLUListElement>(null)
	const [handleOnClickFired, setHandleOnClickFired] = useState(false)
	const [dataScrollLeft, setDataScrollLeft] = useState(null)

	const [dataScrollRight, setDataScrollRight] = useState(null)

	// type THandleOnWheelProps = {
	// 	e: WheelEvent<HTMLUListElement>
	// 	ref: typeof ref
	// }

	// const handleOnWheel = ({ e, ref }: THandleOnWheelProps) => {
	// 	console.log(e)
	// 	console.log(ref)

	// 	const refCurrent = ref.current

	// 	if (e.deltaY === 0) return

	// 	refCurrent.scrollTo({
	// 		left: refCurrent.scrollLeft + e.deltaY,
	// 		behavior: 'smooth'
	// 	})

	// 	return
	// }

	// const setPreventPageScroll = (bool: boolean) => {
	// 	if (bool) {
	// 		document.body.classList.add('stop-scrolling')
	// 		return
	// 	}

	// 	document.body.classList.remove('stop-scrolling')
	// 	return
	// }

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
		<div
			className={
				cn(stls.container, getClassNames({ classNames })) || undefined
			}>
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
			<ul
				ref={ref}
				className={stls.list}
				// onWheel={e => handleOnWheel({ e, ref })}
				// onMouseEnter={() => setPreventPageScroll(true)}
				// onMouseLeave={() => setPreventPageScroll(false)}
			>
				{articles.map((article, idx) => (
					<li
						key={`SectionJournalReadMoreArticles__${article.title}--${idx}`}
						className={stls.listItem}>
						<CardJournalArticle article={article} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default CardsJournalArticles
