import { useContext } from 'react'
import SeminarCard from '../SeminarCard/SeminarCard'
import stls from './SeminarCards.module.sass'
// import { WebinarCard } from '@/components/sections'
import WebinarCard from '@/components/sections/general/WebinarCard'
import { contextStaticPropsSeminars } from 'pages/seminars'

const SeminarCards = ({ timeframe }) => {
	const { seminars, seminarCategories } = useContext(contextStaticPropsSeminars)

	const months = [
		'янв',
		'фев',
		'мар',
		'апр',
		'май',
		'июн',
		'июл',
		'авг',
		'сен',
		'окт',
		'ноя',
		'дек'
	]

	const now = new Date()

	//TODO: Add archive & upcoming seminars
	// const cards =
	// 	timeframe === 'archive'
	// 		? seminars?.filter(seminar => new Date(seminar?.date) < now)
	// 		: timeframe === 'upcoming'
	// 		? seminars.filter(seminar => new Date(seminar?.date) > now)
	// 		: seminars

	const cards = seminars

	return (
		<div className={stls.list}>
			{cards
				?.sort(
					(a, b) => new Date(a?.date).getTime() - new Date(b?.date).getTime()
				)
				?.map(card => {
					const month = months.filter(
						(str, idx) => idx === new Date(card.date).getMonth()
					)[0]
					const date = new Date(card.date).getDate()
					const hours = new Date(card.date).getHours()
					const minutes =
						new Date(card.date).getMinutes().toString().length === 1
							? `0${new Date(card.date).getMinutes()}`
							: `${new Date(card.date).getMinutes()}`
					const disabled = new Date(card.date) < now ? true : false
					return (
						<SeminarCard
							key={card.id}
							title={card.title}
							portrait={card.authors[0].portrait}
							speaker={card.authors[0].name}
							month={month}
							date={date}
							hours={hours}
							minutes={minutes}
							dur={card.duration}
							disabled={disabled}
							slug={card.slug}
						/>
					)
				})}
		</div>
	)
}

export default SeminarCards
