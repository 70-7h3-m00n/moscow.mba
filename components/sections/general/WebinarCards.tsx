import stls from '@/styles/components/sections/WebinarCards.module.sass'
// import { WebinarCard } from '@/components/sections'
import WebinarCard from '@/components/sections/general/WebinarCard'

const WebinarCards = ({ timeframe }) => {
	const data = [
		{
			id: '5c171fb3-ff67-4ece-b11d-9223b03e6f0a',
			title: 'Сквозная аналитика в Российском ретейле',
			portrait: '/assets/images/speakers/speaker-1.jpg',
			speaker: 'Эдуард Тихонов',
			date: new Date(2021, 7, 4, 17, 0),
			dur: '40:00'
		},
		{
			id: '0b26f1f5-e7d9-42a6-856d-899843ef2795',
			title: 'Power BI: изучаем азы работы с данными',
			portrait: '/assets/images/speakers/speaker-2.jpg',
			speaker: 'Антон Гвоздев',
			date: new Date(2021, 7, 7, 19, 0),
			dur: '40:00'
		},
		{
			id: '89c33e74-33af-498c-973a-b19cfb873c98',
			title: 'Как монетизировать свои soft и hard skills',
			portrait: '/assets/images/speakers/speaker-3.jpg',
			speaker: 'Сергей Морозов',
			date: new Date(2021, 6, 4, 17, 0),
			dur: '40:00'
		},
		{
			id: 'f2bf8cf5-44c5-470c-a2c1-a96e6dc0c75b',
			title: 'Методы монетизации цифровых продуктов',
			portrait: '/assets/images/speakers/speaker-4.jpg',
			speaker: 'Дарья Демидова',
			date: new Date(2021, 6, 7, 19, 0),
			dur: '40:00'
		},
		{
			id: 'cdbc3b5f-ccda-4e5d-80e7-d759bd5036b7',
			title: 'Как управлять удаленной командой',
			portrait: '/assets/images/speakers/speaker-5.jpg',
			speaker: 'Елена Колосова',
			date: new Date(2021, 5, 4, 17, 0),
			dur: '40:00'
		},
		{
			id: '99c33a33-5816-4d59-8635-d150c8b85fc7',
			title: 'Разработка инвестиционной стратегии стартапа',
			portrait: '/assets/images/speakers/speaker-6.jpg',
			speaker: 'Александр Бойко',
			date: new Date(2021, 5, 7, 19, 0),
			dur: '40:00'
		},
		{
			id: '23fb2240-7450-4243-bf17-7182c5e9fcfe',
			title: 'Кризисный менеджмент в 2021 году',
			portrait: '/assets/images/speakers/speaker-7.jpg',
			speaker: 'Светлана Назарова',
			date: new Date(2021, 4, 4, 17, 0),
			dur: '40:00'
		},
		{
			id: 'b3ad8536-bd83-4ae8-9e54-379df2fe4709',
			title: 'Как пандемия повлияла на бизнес-процессы в е-commerce?',
			portrait: '/assets/images/speakers/speaker-8.jpg',
			speaker: 'Даниил Виль',
			date: new Date(2021, 4, 7, 19, 0),
			dur: '40:00'
		},
		{
			id: '8002484d-cafc-4a40-841d-4c541c1e75cd',
			title: 'Digital аналитика процессов организации',
			portrait: '/assets/images/speakers/speaker-9.jpg',
			speaker: 'Максим Захаров',
			date: new Date(2021, 8, 4, 17, 0),
			dur: '40:00'
		}
	]

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
	const cards =
		timeframe === 'archive'
			? data.filter(card => card.date < now)
			: timeframe === 'upcoming'
			? data.filter(card => card.date > now)
			: data

	return (
		<div className={stls.list}>
			{cards
				.sort((a, b) => a.date.getMonth() - b.date.getMonth())
				.map(card => {
					const month = months.filter(
						(str, idx) => idx === card.date.getMonth()
					)[0]
					const date = card.date.getDate()
					const hours = card.date.getHours()
					const minutes =
						card.date.getMinutes().toString().length === 1
							? `0${card.date.getMinutes()}`
							: `${card.date.getMinutes()}`
					const disabled = card.date < now ? true : false
					return (
						<WebinarCard
							key={card.id}
							title={card.title}
							portrait={card.portrait}
							speaker={card.speaker}
							month={month}
							date={date}
							hours={hours}
							minutes={minutes}
							dur={card.dur}
							disabled={disabled}
						/>
					)
				})}
		</div>
	)
}

export default WebinarCards
