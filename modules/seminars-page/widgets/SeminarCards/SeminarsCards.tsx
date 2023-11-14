import stls from './SeminarCards.module.sass'

import { useContext, useEffect } from 'react'
import { contextStaticPropsSeminars } from 'pages/seminars'
import { SeminarCard } from '../SeminarCard/SeminarCard'
import { Calendar } from '../Calendar/Calendar'

const SeminarCards = ({ timeframe }) => {
	const now = new Date()
	const { showSeminars } = useContext(contextStaticPropsSeminars)

	// const filteredSeminars = showSeminars.filter(card =>
	// 	timeframe === 'archive'
	// 		? new Date(card.date) < now
	// 		: new Date(card.date) >= now
	// )

	return (
		<div className={stls.list}>
			{showSeminars?.map(card => (
				<SeminarCard key={card.id} card={card} />
			))}
		</div>
	)
}

export default SeminarCards
