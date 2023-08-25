import { useContext } from 'react'
import SeminarCard from '../SeminarCard/SeminarCard'
import stls from './SeminarCards.module.sass'
// import { WebinarCard } from '@/components/sections'
import WebinarCard from '@/components/sections/general/WebinarCard'
import { contextStaticPropsSeminars } from 'pages/seminars'

const SeminarCards = ({ timeframe }) => {
	const { seminars, seminarCategories } = useContext(contextStaticPropsSeminars)

	const t = {
		id: 2,
		title: 'Digital аналитика процессов организации',
		date: '2023-08-31T09:00:00.000Z',
		duration: 24,
		slug: 'digital-analitika-proczessov-organizaczii',
		category: 'маркетинг',
		authors: [
			{
				name: 'Светлана Назарова',
				portrait:
					'https://res.cloudinary.com/npomba/image/upload/v1692863897/speaker_7_18542d9513.jpg'
			},
			{
				name: 'Максим Захаров',
				portrait:
					'https://res.cloudinary.com/npomba/image/upload/v1690201959/happy_young_waiter_holding_glass_of_champagne_and_towel_171337_5290_1_78847a80ec.png'
			}
		]
	}

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
							dur={`${card.duration}:00`}
							disabled={disabled}
							slug={card.slug}
						/>
					)
				})}
		</div>
	)
}

export default SeminarCards
